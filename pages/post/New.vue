<template>
	<div>
		<form>
			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label class="label">Title</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input class="input" type="text" placeholder="Post title" v-model="title" required>
						</div>
					</div>
				</div>
			</div>

			<div class="field is-horizontal">
				<div class="field-label is-normal">
					<label class="label">Body</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<textarea class="textarea" placeholder="..." v-model="body" required></textarea>
						</div>
					</div>
				</div>
			</div>

			<div class="field is-horizontal">
				<div class="field-label">

				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<button class="button is-primary" @click.prevent="newPost">
								Create Post
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import allPosts from "~/apollo/queries/allPosts";
import newPost from '~/apollo/queries/newPost';

	export default {
		data () {
			return {
				author: 'lahori',
				title: '',
				body: ''
			}
		},
		methods: {
			newPost (e) {
				if(this.author && this.title) {
					this.$apollo.mutate({
						mutation: newPost,
						variables: {
							firstName: this.author,
							title: this.title,
							body: this.body
						},
						update: (store, { data: {newPost} } ) => {
							const cached = store.readQuery({ query: allPosts })
							cached.posts.push(newPost)
							store.writeQuery({ query: allPosts, data: cached })
						},
						// Optimistic UI
						// Will be treated as a 'fake' result as soon as the request is made
						// so that the UI can react quickly and the user be happy
						// optimisticResponse: {
						// 	__typename: 'Mutation',
						// 	addTag: {
						// 	__typename: 'Tag',
						// 	id: -1,
						// 	label: newTag,
						// 	},
						// }
					})
				} else {
					alert('hey Yo... whats up?')
				}
				this.title = ''
				this.body = ''
			}
		}
	};

</script>

<style>


</style>
