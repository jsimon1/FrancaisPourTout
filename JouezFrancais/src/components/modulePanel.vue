<template>
<div class="col s12 m2">
	<div class="container">
		<h4>Lessons</h4>
		<ul class = "collapsible popout" data-collapsible = "accordion">
			<li>
				<div class = "collapsible-header">
				<i class = "material-icons">filter_drama</i>Conjugate -re</div>
				<div class = "collapsible-body"><p style="font-size: large;">Practice conjugating random -re verbs with random pronouns in present, past, indicative, future, and subjunctive tenses.</p><button class="btn waves-effect waves-light z-depth-2 col s3 push-s8" name="c_er" v-on:click="$emit('conjugate')"> Try it out</button></div>
			</li>
			<li>
				<div class = "collapsible-header">
				<i class = "material-icons">filter_drama</i>Conjugate -ir</div>
				<div class = "collapsible-body"><p style="font-size: large;"w>Practice conjugating random -ir verbs with random pronouns in present, past, indicative, future, and subjunctive tenses.</p><button class="btn waves-effect waves-light z-depth-2 col s3 push-s8" name="c_ir"> Try it out</button></div>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
	export default {
		name: 'modulePanel', 
	}
</script>