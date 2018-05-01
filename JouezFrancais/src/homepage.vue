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
							<a href="#profile">jeremyyy</a>
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
	<div class="row">
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
				<button class="btn waves-effect waves-light z-depth-2 col s3 push-s8" name="conj_next" v-on:click = "update_form()"> Next
				<i class="material-icons right">send</i></button>
			</div>
	</div>
</div>
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
	//import conjugate from './components/modulePanel'
	
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
				isLoggedIn: true,
				conjugate: true,
				username: "jeremyyy",
				update_form: function() {
					document.getElementById("present").setAttribute("style", "background-color: #009688;")
					document.getElementById("past").setAttribute("style", "background-color: #009688;")
					document.getElementById("imp").setAttribute("style", "background-color: #d50000;")
					document.getElementById("imp").setAttribute("title", "connaissais")
					document.getElementById("future").setAttribute("style", "background-color: #009688;")
					document.getElementById("conditional").setAttribute("style", "background-color: #009688;")
					document.getElementById("subj").setAttribute("style", "background-color: #d50000;")
					document.getElementById("subj").setAttribute("title", "connaisse")
					setTimeout(function() {}, 10000)
				}
			}
		}
	}
</script>
<style src="../css/materialize/css/materialize.css"></style>