import { ApolloClient,InMemoryCache,gql } from "@apollo/client";
export const client = new ApolloClient({
    uri:"https://graphql-pokemon2.vercel.app",
    cache: new InMemoryCache()
})
