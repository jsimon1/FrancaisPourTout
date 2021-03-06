// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import homepage from './homepage'

Vue.config.productionTip = false

/* eslint-disable no-new */
var home = new Vue({
	el: '#homepage',
	components: { homepage },
	template: '<homepage/>'
})
