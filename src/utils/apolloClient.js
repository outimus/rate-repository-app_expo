import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const url = "http://192.168.0.19:4000/graphql"

const httpLink = createHttpLink({
  uri: url,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;