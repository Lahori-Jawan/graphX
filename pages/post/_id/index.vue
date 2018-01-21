<template>
	<div v-if="Author">
		<single-post
			:id="Author.posts[0].id"
			:author="Author.firstName"
			:title="Author.posts[0].title"
			:body="Author.posts[0].body"
			:comment="Author.posts[0].comments">
		</single-post>
	</div>
</template>

<script>
import author from '~/apollo/queries/author'
import SinglePost from '~/components/SinglePost'
export default {
	apollo: {
		Author: {
			query: author,
			variables() {
				return { id: this.$route.params.id }
			},
			update: data => {
				return data.author
			}
		}
	},
	components: {
		SinglePost
	},
	head() {
		return {
			title: (this.Author ? `${this.Author.posts[0].title} `: 'Loading')
		}
	},
}
</script>

<style>
img {
	max-width: 600px;
}
</style>
