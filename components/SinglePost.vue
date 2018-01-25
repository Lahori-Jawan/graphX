<template>
	<div>
		<section class="articles">
			<div class="column is-10 is-offset-1">
				<!-- START ARTICLE -->
				<div class="card article">
					<div class="card-content">
						<div class="media">
							<div class="media-center">
								<img src="~/assets/images/daria-morgendorffer.jpg" class="author-image" alt="Placeholder image">
							</div>
							<div class="media-content has-text-centered single-post-title">
								<p class="title article-title">
									{{ title }}
								</p>
								<p class="subtitle is-6 article-subtitle">
									{{ author }}
								</p>
							</div>
						</div>

						<div class="content article-body">
							{{ body }}
						</div>
					</div>
				</div> <!-- END ARTICLE -->
				<comments :id="id" :comments="comment"></comments>
			</div>
		</section>
		<!-- END ARTICLE FEED -->
	</div>
</template>

<script>
import {Comments} from './comments/index'
export default {
	props: ['id', 'author', 'title', 'body', 'comment'],
	components: {
		'comments': Comments
	}
}
</script>

<style>

	.container {
		padding: 0;
	}
	.article-body {
		font-size: 1.75rem;
	}

</style>
