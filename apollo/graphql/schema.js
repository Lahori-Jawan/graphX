import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers'

const typeDefs = `
type Query {
	author(id: Int, firstName: String): Author,
	authors: [Author],
	posts: [Post],
	post(id: Int): Post
}

type Mutation {
	newPost(firstName: String!, lastName: String, title: String!, body: String): Post,
	newComment(message: String!, postId: Int!, userId: Int!): Comment
}

type User {
	id: Int,
	username: String,
	googleId: String
}

type Author {
	id: Int,
	firstName: String,
	lastName: String,
	posts(id: Int): [Post]
}

type Post {
	id: Int,
	title: String,
	body: String,
	author: Author,
	comments: [Comment]
}

type Comment {
	id: Int,
	message: String,
	post: Post,
	user: User,
	updatedAt: String
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
