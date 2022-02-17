import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://trgnew.local/graphql',
  cache: new InMemoryCache(),
});
