<template>
    <article class="media is-comment">
		<figure class="media-left">
			<p class="image is-64x64">
				<img src="~/assets/images/skeeter-valentine.jpg">
			</p>
		</figure>
		<div class="media-content">
			<div class="content">
				<p class="user">
					<strong class="comment-meta">
						{{ comment.user.username }}
					</strong>
						{{ comment.message }}
					<small class="comment-meta">
						<a>Like</a> ·
						<a>Reply</a> · 3 hrs
					</small>
				</p>
			</div>
		</div>
	</article>
</template>

<script>
export default {
	props: {
		comment: {
			type: Object,
			required: true
		}
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
