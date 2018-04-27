<template>
<div class="test">
	<h1>{{title}}</h1>
	<p v-if="showName">{{user.firstName}}</p>
</div>
</template>
<script>
	export default {
		name: 'test',
		data() {
			return {
				title: 'Hello World',
				user: {
					firstName: 'John',
					lastName: 'Doe'
				},
				showName: false
			}
		}
	}
</script>
<style scoped></style>