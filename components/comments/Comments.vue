<template>
	<div id="comments">
		<comment v-if="comments" v-for="(comment,i) in comments" :comment="comment" :key="i">
		</comment>
		<!-- comment box -->
		<article class="media">
			<figure class="media-left">
				<p class="image is-64x64">
					<img src="https://bulma.io/images/placeholders/128x128.png">
				</p>
			</figure>
			<div class="media-content">
				<div class="field">
					<p class="control">
						<textarea class="textarea" v-model="message" @keyup.enter="newComment" placeholder="Add a comment..."></textarea>
					</p>
				</div>
				<div class="field">
					<p class="control">
						<button class="button" @click="newComment">Post comment</button>
					</p>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
import Comment from './Comment'

import newComment from '~/apollo/queries/newComment'
import allPosts from '~/apollo/queries/allPosts'

export default {
	props: {
		id: {
			type: Number,
			required: true
		},
		username: {
			type: String,
			// required: true
			default: 'nk'
		},
		comments: {
			type: Array
		}
	},
	created () {
		this.$apollo.addSmartQuery('posts', allPosts)
	},
	data () {
		return {
			message:  '' ,
			userId: Number,
			postId: Number
		}
	},
	methods: {
		newComment () {
			const message = this.message
			let user = Object
			if(this.message.trim()) {
				this.$apollo.mutate({
					mutation: newComment,
					variables: {
						message: this.message.trim(),
						postId: this.id,
						userId: Math.floor(Math.random()*7+1)
					},
					update: (store, { data: {newComment} } ) => {
						try {
							console.log('comment ', newComment )
							const cached = store.readQuery({ query: allPosts })
							cached.posts[(this.id-1)].comments.push(newComment)
							store.writeQuery({ query: allPosts, data: cached })
							this.message = ''
							user = newComment.user
							console.log('read all ', store.readQuery({ query: allPosts }))
							console.log('read ', store.readQuery({ query: allPosts, variables: { id: (this.id-1) } }))
						} catch (e) {
							console.log('error ', e)
						}
					},
					optimisticResponse: {
						__typename: 'Mutation',
						newComment: {
							__typename: 'Comment',
							message: message,
							user: {
								__typename: 'User',
								username: this.username,
								googleId: Math.floor((Math.random()*9+3)*99)
							}
						}
					},
					error(error) {
						alert('error occurred ', error)
					}
				})

			} else {
				alert('hey Yo... whats up?')
			}
		}
	},
	components: {
		Comment
	}
}
</script>


<style>

	#comments {
		margin-top: 1.5rem;
	}

	#comments .media.is-comment {
		background: white;
    	margin-top: 0.5rem;
	}

	.user > .comment-meta {
		display: block;
	}
</style>

