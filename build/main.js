require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_server_express__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_apollo_server_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apollo_graphql_schema__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api__ = __webpack_require__(12);









const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 4000;

app.set('port', port);

// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_5__api__["a" /* default */]);

app.use('/graphql', __WEBPACK_IMPORTED_MODULE_2_body_parser___default.a.json(), Object(__WEBPACK_IMPORTED_MODULE_3_apollo_server_express__["graphqlExpress"])({ schema: __WEBPACK_IMPORTED_MODULE_4__apollo_graphql_schema__["a" /* default */] }));
app.use('/graphiql', Object(__WEBPACK_IMPORTED_MODULE_3_apollo_server_express__["graphiqlExpress"])({ endpointURL: '/graphql' }));

// Import and Set Nuxt.js options
let config = __webpack_require__(14);
config.dev = !("development" === 'production');

// Init Nuxt.js
const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolvers__ = __webpack_require__(8);



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

const schema = Object(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__["makeExecutableSchema"])({ typeDefs, resolvers: __WEBPACK_IMPORTED_MODULE_1__resolvers__["a" /* default */] });

// addMockFunctionsToSchema({ schema, mocks });

/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connectors__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sequelize__);



const Op = __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.Op;

const resolvers = {
	Query: {
		author(root, { id, firstName }) {
			return __WEBPACK_IMPORTED_MODULE_0__connectors__["a" /* Author */].find({
				where: { [Op.or]: [{ firstName }, { id }] }
			});
			// return Author.findById(id)
		},
		authors() {
			return __WEBPACK_IMPORTED_MODULE_0__connectors__["a" /* Author */].findAll();
		},
		posts() {
			return __WEBPACK_IMPORTED_MODULE_0__connectors__["b" /* Post */].findAll();
		}
	},
	Mutation: {
		async newPost(root, args) {
			return await newPost(args);
		}
	},
	Author: {
		posts(author) {
			return author.getPosts({ where: {} });
		}
	},
	Post: {
		author(post) {
			return post.getAuthor();
		}
	}
};

async function newPost(obj) {
	console.log('obj ', obj);
	let author = await __WEBPACK_IMPORTED_MODULE_0__connectors__["a" /* Author */].create({
		firstName: obj.firstName,
		lastName: obj.lastName || ''
	});

	return await author.createPost({
		title: obj.title,
		body: obj.body || ''
	});
}

/* harmony default export */ __webpack_exports__["a"] = (resolvers);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_casual__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_casual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_casual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);




const db = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a('blog', null, null, {
	dialect: 'sqlite',
	storage: './blog.sqlite'
});

const AuthorModel = db.define('author', {
	firstName: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING },
	lastName: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING }
});

const PostModel = db.define('post', {
	title: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING },
	body: { type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING }
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

// create mock data with a seed, so we always get the same
__WEBPACK_IMPORTED_MODULE_1_casual___default.a.seed(123);
db.sync({ force: true }).then(() => {
	__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.times(10, () => {
		return AuthorModel.create({
			firstName: __WEBPACK_IMPORTED_MODULE_1_casual___default.a.first_name,
			lastName: __WEBPACK_IMPORTED_MODULE_1_casual___default.a.last_name
		}).then(author => {
			return author.createPost({
				title: `A post by ${author.firstName}`,
				body: __WEBPACK_IMPORTED_MODULE_1_casual___default.a.sentences(3)
			});
		});
	});
});

const Author = db.models.author;
const Post = db.models.post;



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("casual");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__(13);




const router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Add USERS Routes
router.use(__WEBPACK_IMPORTED_MODULE_1__users__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


const router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Mock Users
const users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }];

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users);
});

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
	/*
  ** Headers of the page
  */
	head: {
		title: "nuxt-one",
		meta: [{ charset: "utf-8" }, {
			name: "viewport",
			content: "width=device-width, initial-scale=1"
		}, {
			hid: "description",
			name: "description",
			content: "Nuxt with Express and graphQL"
		}],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, {
			rel: "stylesheet",
			href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
		}]
	},
	/*
  ** Customize the progress bar color
  */
	css: ["~/node_modules/bulma/css/bulma.css", "~/assets/css/style.css"],
	loading: { color: "#FFDD57" },
	router: {
		middleware: ["getRoute"]
	},
	// Add apollo module
	modules: ["@nuxtjs/apollo"],
	// Give apollo module options
	apollo: {
		clientConfigs: {
			default: "~/apollo/client-configs/default.js"
		}
	},
	/*
  ** Build configuration
  */
	build: {
		// vendor: ["axios"],
		postcss: {
			plugins: {
				"postcss-custom-properties": false
			}
			/*
     ** Run ESLint on save
     */
			// extend(config, { isDev, isClient }) {
			//   if (isDev && isClient) {
			//     config.module.rules.push({
			//       enforce: "pre",
			//       test: /\.(js|vue)$/,
			//       loader: "eslint-loader",
			//       exclude: /(node_modules)/
			//     });
			//   }
			// }
		} }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map