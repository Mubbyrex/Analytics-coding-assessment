import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://analytics-api.herokuapp.com/analytics",
  cache: new InMemoryCache(),
});
