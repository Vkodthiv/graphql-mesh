import { readFileOrUrl } from '@graphql-mesh/utils';
import { JSONSchema, JSONSchemaObject } from 'json-machete';
import toJsonSchema from 'to-json-schema';
import { JSONSchemaOperationConfig } from './types';
import { getOperationMetadata } from './utils';

const anySchema: JSONSchemaObject = {
  title: 'Any',
  anyOf: [
    {
      type: 'object',
      additionalProperties: true,
    },
    {
      type: 'string',
    },
    {
      type: 'number',
    },
    {
      type: 'boolean',
    },
  ],
};

export async function getReferencedJSONSchemaFromOperations({
  operations,
  cwd,
}: {
  operations: JSONSchemaOperationConfig[];
  cwd: string;
}) {
  const finalJsonSchema: JSONSchema = {
    type: 'object',
    title: '_schema',
    properties: {},
    required: ['query'],
  };
  for (const operationConfig of operations) {
    const { operationType, rootTypeName, fieldName } = getOperationMetadata(operationConfig);
    const rootTypeDefinition = (finalJsonSchema.properties[operationType] = finalJsonSchema.properties[
      operationType
    ] || {
      type: 'object',
      title: rootTypeName,
      properties: {},
    });
    rootTypeDefinition.properties = rootTypeDefinition.properties || {};
    if (operationConfig.responseSchema) {
      rootTypeDefinition.properties[fieldName] = {
        $ref: operationConfig.responseSchema,
      };
    } else if (operationConfig.responseSample) {
      const sample = await readFileOrUrl(operationConfig.responseSample, {
        cwd,
      }).catch((e: any) => {
        throw new Error(`responseSample - ${e.message}`);
      });
      const generatedSchema = toJsonSchema(sample, {
        required: false,
        objects: {
          additionalProperties: false,
        },
        strings: {
          detectFormat: true,
        },
        arrays: {
          mode: 'first',
        },
      });
      generatedSchema.title = operationConfig.responseTypeName;
      rootTypeDefinition.properties[fieldName] = generatedSchema;
    } else {
      const generatedSchema: JSONSchemaObject = operationConfig.responseTypeName
        ? {
            ...anySchema,
            title: operationConfig.responseTypeName,
          }
        : anySchema;
      rootTypeDefinition.properties[fieldName] = generatedSchema;
    }

    const rootTypeInputPropertyName = operationType + 'Input';
    const rootInputTypeName = rootTypeName + 'Input';
    const rootTypeInputTypeDefinition = (finalJsonSchema.properties[rootTypeInputPropertyName] = finalJsonSchema
      .properties[rootTypeInputPropertyName] || {
      type: 'object',
      title: rootInputTypeName,
      properties: {},
    });
    if ('binary' in operationConfig) {
      const generatedSchema = {
        title: operationConfig.requestTypeName || 'Upload',
        type: 'string',
        format: 'upload',
      };
      rootTypeInputTypeDefinition.properties[fieldName] = generatedSchema;
    } else if ('requestSchema' in operationConfig) {
      rootTypeInputTypeDefinition.properties[fieldName] = {
        $ref: operationConfig.requestSchema,
      };
    } else if ('requestSample' in operationConfig) {
      const sample = await readFileOrUrl(operationConfig.requestSample, {
        cwd,
      }).catch((e: any) => {
        throw new Error(`requestSample:${operationConfig.requestSample} cannot be read - ${e.message}`);
      });
      const generatedSchema = toJsonSchema(sample, {
        required: false,
        objects: {
          additionalProperties: false,
        },
        strings: {
          detectFormat: true,
        },
        arrays: {
          mode: 'first',
        },
      });
      generatedSchema.title = operationConfig.requestTypeName;
      rootTypeInputTypeDefinition.properties[fieldName] = generatedSchema;
    }
  }
  return finalJsonSchema;
}
