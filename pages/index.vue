<template>
	<div>
		<article class="media blog-title">
			<div class="media-left">
				<h3 class="title">Blog</h3>
			</div>
			<div class="media-right">
				<nuxt-link to="/post/new" class="button is-success">
					<span class="">
						<span>New Post</span>

						<span class="icon is-medium">
							<i class="fa fa-plus-square"></i>
						</span>
					</span>
				</nuxt-link>
			</div>
		</article>
		<div class="columns is-multiline">
			<div class="column is-4" v-for="post in allPosts" :key="post.id">
				<nuxt-link :to="`post/${post.author.id}`">
					<div class="box">
						<div class="title is-4">
							{{ post.title }}
						</div>
						<div class="content">
							{{ post.body}}
						</div>
					</div>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
import allPosts from "~/apollo/queries/allPosts";
	export default {
		data() {
			return {
				allPosts:[],
				chars: 40
			}
		},
		apollo: {
			posts: {
				prefetch: true,
				query: allPosts,
				result ({data: {posts}, loading}) {
					this.allPosts = posts.map(post => {
						return Object.assign({},post,{
							body: `${post.body.substr(0, this.chars)}...`
						})
					});
				}
			},
		},
		head() {
			return {title: "All posts"}
		}
	};
</script>

<style>
	.box {
		background-color: ghostwhite;
	}

</style>
