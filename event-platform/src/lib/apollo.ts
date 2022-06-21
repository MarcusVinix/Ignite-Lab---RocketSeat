import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8dvag186e01xx39w60ywh/master',
	cache: new InMemoryCache()
})