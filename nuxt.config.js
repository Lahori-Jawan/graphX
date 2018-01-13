module.exports = {
	/*
  ** Headers of the page
  */
	head: {
		title: "nuxt-one",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				hid: "description",
				name: "description",
				content: "Nuxt with Express and graphQL"
			}
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href:
					"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
			}
		]
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
		vendor: ["axios"],
		postcss: {
			plugins: {
				"postcss-custom-properties": false
			}
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
	}
};
