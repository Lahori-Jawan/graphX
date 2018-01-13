import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers'

const typeDefs = `
type Query {
	author(id: Int, firstName: String): Author,
	authors: [Author],
	posts: [Post]
}

type Mutation {
	newPost(firstName: String!, lastName: String, title: String!, body: String): Post
}

type Author {
	id: Int,
	firstName: String,
	lastName: String,
	posts: [Post]
}

type Post {
	id: Int,
	title: String,
	body: String,
	author: Author
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
