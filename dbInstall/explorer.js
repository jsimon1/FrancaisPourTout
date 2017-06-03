//Explorer.js is used for installing the initial database, imported by install.js
console.log("Explorer Loaded");
var request = require('request-promise');
var explore = require('./explorer.js');
var cheerio =  require('cheerio');


//getPage is a utility function to return a page given a link
module.exports.getPage = (link) => {
	console.log("Link:" + link);
	var options = {
		uri: link,
		transform: function (body) {
			return cheerio.load(body);
		}
	};
	request(options)
		.then(function ($) {
			console.log($);
		})
		.catch(function (err){
			console.log("Explorer failed at getPage");
		});
}
