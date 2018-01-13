<template>
	<nav class="navbar is-link is-fixed-top">
		<div class="navbar-brand">
			<nuxt-link to="/" class="navbar-item">
				<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
			</nuxt-link>
			<div :class="['navbar-burger', 'burger', isActive ? 'is-active': '']" @click="isActive = !isActive">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>

		<div :class="['navbar-menu', isActive ? 'is-active': '']">
			<div class="navbar-start">
				<nuxt-link to="/" class="navbar-item">
					Home
				</nuxt-link>
				<a href="https://vuejs.org/" class="navbar-item" target="_blank">
					Vue
				</a>
				<a href="https://expressjs.com" class="navbar-item" target="_blank">
					Express
				</a>
				<a href="http://graphql.org/" class="navbar-item" target="_blank">
					graphQL
				</a>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="field is-grouped">
						<p class="control">
							<a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000"
							    target="_blank" href="https://twitter.com/intent/tweet?text=Vue+Bulma+Nuxt+graphQL: a modern fllstack package based on Nuxt and apollo GraphQL&amp;hashtags=NuxtStack&amp;via=LahoriJawan1">
								<span class="icon">
									<i class="fa fa-twitter"></i>
								</span>
								<span>
									Tweet
								</span>
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data () {
		return {
			isActive : false
		}
	},
	watch: {
		isActive() {
			console.log(`is active ? ${this.isActive}`)
		}
	}
}
</script>

