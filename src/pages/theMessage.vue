<template>
	<div>
		<TheMessage />
		<Footer />
	</div>
</template>

<script>
import TheMessage from '../components/theMessage.vue'
import Footer from '../components/MessageFooter.vue'
export default {
	components: {
		Footer,
		TheMessage
	}
}
</script>

<style>
</style>
