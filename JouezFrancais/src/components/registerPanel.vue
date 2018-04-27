<template>
<div class="registerPanel">
	<div class="row">
		<form class="col s12">
			<div class="row">
				<div class="input-field col s6">
					<input placeholder="First" id="first_name" type="text" class="validate">
				</div>
				<div class="input-field col s6">
					<input placeholder="Last" id="last_name" type="text" class="validate">
				</div>
				
				<div class="input-field col s12">
					<input placeholder="Username" id="username" type="text" class="validate">
				</div>
				
				<div class="input-field col s12">
					<input placeholder="Email" id="email" type="email" class="validate">
				</div>
				
				<div class="input-field col s12">
					<input placeholder="Password" id="password" type="password" class="validate">
				</div>
				
				<div class="input-field col s12">
					<input placeholder="Confirm Password" id="confirm_password" type="password" class="validate">
				</div>
				<div class="row">
					<p>
						<label>
							<input type="checkbox" checked="checked" />
							<span>Remember me</span>
						</label>
						<button class="btn waves-effect waves-light z-depth-2 col s3 push-s8" classtype="submit" name="action"> Submit
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
		name: 'registerPanel'
	}
</script>