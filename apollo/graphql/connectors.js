import Sequelize, {STRING, INTEGER} from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('blog', null, null, {
	dialect: 'sqlite',
	storage: './blog.sqlite',
});

const UserModel = db.define('user', {
	username: STRING,
	googleId: STRING
});

const AuthorModel = db.define('author', {
	firstName: { type: STRING },
	lastName: { type: STRING },
});

const PostModel = db.define('post', {
	title: { type: STRING },
	body: { type: STRING },
});

const CommentModel = db.define('comment', {
	message: STRING,
	// timestamp:
	// userid: 				/* added by belongsTo */
	// postid					//		//
	parentcommentid: INTEGER   	/* later */
})

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);
CommentModel.belongsTo(PostModel)
PostModel.hasMany(CommentModel);
CommentModel.belongsTo(PostModel);
CommentModel.belongsTo(UserModel);

// create mock data with a seed, so we always get the same
casual.seed(123);
db.sync({ force: true }).then(() => {
	_.times(10, () => {
		return UserModel.create({
			username: casual.username,
			googleId: casual.phone
		}).then(user => {
			return AuthorModel.create({
				firstName: casual.first_name,
				lastName: casual.last_name,
			}).then((author) => {
				return author.createPost({
					title: `A post by ${author.firstName}`,
					body: casual.sentences(3),
				});
			});
		})
	});
});

const Author = db.models.author;
const Post = db.models.post;
const User = db.models.user;
const Comment = db.models.comment;

export { Author, Post, User, Comment };
