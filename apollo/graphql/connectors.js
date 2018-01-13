import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('blog', null, null, {
	dialect: 'sqlite',
	storage: './blog.sqlite',
});

const AuthorModel = db.define('author', {
	firstName: { type: Sequelize.STRING },
	lastName: { type: Sequelize.STRING },
});

const PostModel = db.define('post', {
	title: { type: Sequelize.STRING },
	body: { type: Sequelize.STRING },
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

// create mock data with a seed, so we always get the same
casual.seed(123);
db.sync({ force: true }).then(() => {
	_.times(10, () => {
		return AuthorModel.create({
					firstName: casual.first_name,
					lastName: casual.last_name,
				}).then((author) => {
					return author.createPost({
						title: `A post by ${author.firstName}`,
						body: casual.sentences(3),
					});
				});
	});
});

const Author = db.models.author;
const Post = db.models.post;

export { Author, Post };
