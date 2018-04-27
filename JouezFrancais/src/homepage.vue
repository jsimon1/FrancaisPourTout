<template>
<div id="homepage">
	<div class="navbar-fixed">
		<nav class="teal">
			<div class="container">
				<div class="nav-wrapper">
					<a href="#" class="brand-logo center">JouezFrancais</a>
					<ul class="right hide-on-med-and-down">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#explore">Explore</a>
						</li>
						<li v-if="!isLoggedIn">
							<a href="#register">Register</a>
						</li>
						<li v-if="!isLoggedIn">
							<a href="#login">Log in</a>
						</li>
						<li v-if="isLoggedIn">
							<a href="#profile">{{username}}</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
	
	<div style="position:absolute;left:0%;right:50%;top:15%;bottom:15%;float:left;">
		<modulePanel/>
	</div>
	<div style="position:absolute;left:50%;top:10%;bottom:10%;border-left:1px solid red;"></div>
	<div style="position:absolute;left:60%;right:10%;top:15%;bottom:15%;float:right;">
		<div class="profilePanel" v-if="isLoggedIn">
			<profilePanel/>
		</div>
		<div class="row" v-if="!isLoggedIn">
			<div class="col s12">
				<ul class="tabs">
					<li class="tab col s12">
						<a href="#register">
							Register
						</a>
					</li>
					<li class="tab col s12">
						<a href="#login">
							Login
						</a>
					</li>
				</ul>
				<div id="register" class="col s12">
					<registerPanel/>
				</div>
				<div id="login" class="col s12">
					<loginPanel/>
				</div>
			</div>
		</div>
	</div>
	
</div>
</template>
<script>
	import loginPanel from './components/loginPanel'
	import registerPanel from './components/registerPanel'
	import modulePanel from './components/modulePanel'
	import profilePanel from './components/profilePanel'
	
	export default {
		name: 'homepage',
		components: {
			loginPanel,
			registerPanel,
			modulePanel,
			profilePanel
		},
		data() {
			return {
				isLoggedIn: false,
				username: "jeremyyy"
			}
		}
	}
</script>
<style src="../css/materialize/css/materialize.css"></style>