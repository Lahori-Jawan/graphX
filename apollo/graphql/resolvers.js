import { Author, Post } from './connectors';
import Sequelize from 'sequelize';

const Op = Sequelize.Op

const resolvers = {
	Query: {
		author(root, {id, firstName}) {
			return Author.find({
				where: { [Op.or]: [{ firstName }, { id}] }
			})
			// return Author.findById(id)
		},
		authors() {
			return Author.findAll()
		},
		posts() {
			return Post.findAll()
		}
	},
	Mutation: {
		async newPost(root, args) {
			return await newPost(args)
		},
	},
	Author: {
		posts(author) {
			return author.getPosts({ where: {  } })
		}
	},
	Post: {
		author(post) {
			return post.getAuthor();
		}
	}
};

async function newPost(obj) {
	console.log('obj ', obj)
	let author = await Author.create({
		firstName: obj.firstName,
		lastName: obj.lastName || '',
	})

	return await author.createPost({
		title: obj.title,
		body: obj.body || '',
	});
}

export default resolvers;
