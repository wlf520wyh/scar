<template>
	<div>
		<StudentHome />
		<Message />
		<Footer />
		
	</div>
</template>

<script>
import StudentHome from '../components/StudentHome.vue'
import Message from '../components/Message.vue'
import Footer from '../components/Footer.vue'
export default {
	components: {
		StudentHome,
		Message,
		Footer
	}
}
</script>

<style>
</style>
