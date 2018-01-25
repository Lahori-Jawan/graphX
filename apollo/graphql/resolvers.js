import { Author, Post, User, Comment } from './connectors';
import Sequelize from 'sequelize';

const Op = Sequelize.Op

const resolvers = {
	Query: {
		author(root, {id, firstName, postId}) {
			return Author.find({
				where: { [Op.or]: [{ firstName }, { id}] }
			})
		},
		authors() {
			return Author.findAll()
		},
		posts() {
			return Post.findAll()
		},
		post(root, { id }) {
			console.log('id ', id)
			return Post.findOne({ where: { id } });
		}
	},
	Mutation: {
		async newPost(root, args) {
			return await newPost(args)
		},
		async newComment(root, args) {
			return await createComment(args)
		}
	},
	Author: {
		async posts(author, {id}=null) {
			let filter = { authorId: author.id }
			id ? filter['id'] = id : ''
			return Post.findAll({
				where: filter
			});
			// let posts = await author.getPosts()
			// if (id && posts) {
			// 	return posts.filter( ({id}) => id === id );
			// } else {
			// 	return posts
			// }
			// id && posts ? posts.filter(post => post.id === id) : posts
		}
	},
	Post: {
		author(post) {
			return post.getAuthor();
		},
		comments(post) {
			// let filter = { postId: post.id }
			// cPostId ? filter['id'] = cPostId : ''
			return Comment.findAll({
				where: { postId: post.id }
			});
			// return post.getComments();
		}
	},
	Comment: {
		post(comment) {
			return comment.getPost()
		},
		user(comment) {
			return comment.getUser()
		}
	}
};

async function newPost(obj) {
	let author = await Author.create({
		firstName: obj.firstName,
		lastName: obj.lastName || '',
	})

	return await author.createPost({
		title: obj.title,
		body: obj.body || '',
	});
}

async function createComment(comment) {
	return await Comment.create(comment)
}

export default resolvers;
