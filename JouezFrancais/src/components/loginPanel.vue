<template>
<div class="loginPanel">
	<div class="row">
		<form class="col s12">
			<div class="row">
				<div class="input-field col s12">
					<input placeholder="Email" id="username" type="email" class="validate">
				</div>
				<div class="input-field col s12">
					<input placeholder="Password" id="password" type="password" class="validate">
				</div>
				<div class="row">
					<p>
						<label>
							<input type="checkbox" checked="checked" />
							<span>Remember me</span>
						</label>
						<button class="btn waves-effect waves-light z-depth-2 col s3 push-s8" classtype="submit" name="action"> Log in
						<i class="material-icons right">send</i>
						</button>
					</p>
				</div>
			</div>
		</form>
	</div>
</div>
</template>
<script>
	export default {
		name: 'loginPanel',
		data() {
			return {
				username: 'jeremyyy'
			}
		}
	}
</script>