<template>
	<div class="layout-default">
		<top-bar></top-bar>
		<div class="container">
			<nuxt/>
		</div>
	</div>
</template>

<script>
import TopBar from '~/components/TopBar'
export default {
	components: {
		'top-bar': TopBar
	}
}
</script>

<style>
	.container {
		padding: 2rem 0;
	}
</style>

