import { stringInterpolator } from './string-interpolator';
import { ResolverData } from '@graphql-mesh/types';

export type ResolverDataBasedFactory<T> = (data: ResolverData) => T;

export function parseInterpolationStrings(interpolationStrings: string[], argTypeMap?: Record<string, string>) {
  const interpolationKeys = interpolationStrings.reduce(
    (keys, str) => [...keys, ...(str ? stringInterpolator.parseRules(str).map((match: any) => match.key) : [])],
    [] as string[]
  );

  const args: Record<string, { type: string }> = {};
  const contextVariables: string[] = [];

  for (const interpolationKey of interpolationKeys) {
    const interpolationKeyParts = interpolationKey.split('.');
    const varName = interpolationKeyParts[interpolationKeyParts.length - 1];
    if (interpolationKeyParts[0] === 'args') {
      const argType = argTypeMap && varName in argTypeMap ? argTypeMap[varName] : 'ID';
      args[varName] = {
        type: argType,
      };
    } else if (interpolationKeyParts[0] === 'context') {
      contextVariables.push(varName);
    }
  }

  return {
    args,
    contextVariables,
  };
}

export function getInterpolatedStringFactory(nonInterpolatedString: string): ResolverDataBasedFactory<string> {
  return resolverData => stringInterpolator.parse(nonInterpolatedString, resolverData);
}

export function getInterpolatedHeadersFactory(
  nonInterpolatedHeaders: Record<string, string> = {}
): ResolverDataBasedFactory<Record<string, string>> {
  return resolverData => {
    const headers: Record<string, string> = {};
    for (const headerName in nonInterpolatedHeaders) {
      const headerValue = nonInterpolatedHeaders[headerName];
      if (headerValue) {
        headers[headerName.toLowerCase()] = stringInterpolator.parse(headerValue, resolverData);
      }
    }
    return headers;
  };
}

export function getHeadersObject(headers: Headers): Record<string, string> {
  const headersObj: Record<string, string> = {};
  headers.forEach((value, key) => {
    headersObj[key] = value;
  });
  return headersObj;
}
