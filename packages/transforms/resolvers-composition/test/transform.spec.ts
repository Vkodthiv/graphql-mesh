import InMemoryLRUCache from '@graphql-mesh/cache-inmemory-lru';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { PubSub } from 'graphql-subscriptions';
import { join } from 'path';
import ResolversCompositionTransform, { ResolversComposition } from '../src';
import { execute, parse } from 'graphql';

describe('transform', () => {
  const baseDir: string = undefined;

  it('should handle composition functions from external modules', async () => {
    const transform = new ResolversCompositionTransform({
      cache: new InMemoryLRUCache(),
      pubsub: new PubSub(),
      config: [
        {
          resolver: 'Query.foo',
          composer: join(__dirname, './fixtures/composer.js'),
        },
      ],
      baseDir,
      apiName: '',
      importFn: m => import(m),
    });
    const schema = makeExecutableSchema({
      typeDefs: /* GraphQL */ `
        type Query {
          foo: String
        }
      `,
      resolvers: {
        Query: {
          foo: () => 'BAR',
        },
      },
    });
    const transformedSchema = transform.transformSchema(schema);
    const result = await execute({
      schema: transformedSchema,
      document: parse(/* GraphQL */ `
        {
          foo
        }
      `),
    });
    expect(result.data?.foo).toBe('FOO');
  });
  it('should handle composition functions from functions', async () => {
    const composer: ResolversComposition = next => (root, args, context, info) => 'FOO';
    const transform = new ResolversCompositionTransform({
      cache: new InMemoryLRUCache(),
      pubsub: new PubSub(),
      config: [
        {
          resolver: 'Query.foo',
          composer,
        },
      ],
      baseDir,
      apiName: '',
      importFn: m => import(m),
    });
    const schema = makeExecutableSchema({
      typeDefs: /* GraphQL */ `
        type Query {
          foo: String
        }
      `,
      resolvers: {
        Query: {
          foo: () => 'BAR',
        },
      },
    });
    const transformedSchema = transform.transformSchema(schema);
    const result = await execute({
      schema: transformedSchema,
      document: parse(/* GraphQL */ `
        {
          foo
        }
      `),
    });
    expect(result.data?.foo).toBe('FOO');
  });
});
