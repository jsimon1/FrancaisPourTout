<template>
<div class="conjugatePanel">
	<div class="row">
		<form class="col s12">
			<h3> Je connaitre</h3>
			<div class="row">
				<div class="input-field col s6">
					<input placeholder="Present" id="present" type="text" class="validate">
				</div>
				<div class="input-field col s6">
					<input placeholder="Past" id="past" type="text" class="validate">
				</div>
			</div>
			<div class="row">
				<div class="input-field col s6">
					<input placeholder="Imperfect" id="imp" type="text" class="validate">
				</div>
				<div class="input-field col s6">
					<input placeholder="Future" id="future" type="text" class="validate">
				</div>
			</div>
			<div class="row">
				<div class="input-field col s6">
					<input placeholder="Conditional" id="conditional" type="text" class="validate">
				</div>
				<div class="input-field col s6">
					<input placeholder="Subjunctive" id="subj" type="text" class="validate">
				</div>
			</div>
			<div class="row">
				<button class="btn waves-effect waves-light z-depth-2 col s3 push-s8" name="conj_next" onclick = "updateForm()"> Next
				<i class="material-icons right">send</i></button>
			</div>
		</form>
	</div>
</div>
</template>
<script>
	export default {
		name: 'conjugatePanel'
	}
</script>