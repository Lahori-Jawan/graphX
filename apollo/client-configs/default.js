import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default (ctx) => {
	const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });
	// const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cj1dqiyvqqnmj0113yuqamkuu' })

	// auth token
	let token = ctx.isServer ? ctx.req.session : window.__NUXT__.state.session

	// middleware
	const middlewareLink = new ApolloLink((operation, forward) => {
		operation.setContext({
		headers: { authorization: `Bearer ${token}` }
		})
		return forward(operation)
	})
	const link = middlewareLink.concat(httpLink)
	return {
		link,
		cache: new InMemoryCache()
	}
}
