//Initial database building of top500verbs using explorer.js utility functions to webcrawl conjugator.reverso.net
console.log("Install.js loaded")
var mongoose = require('mongoose');
var explore = require('./explorer.js');

mongoose.connect('mongodb://localhost/FrancaisPourTout');

//Need to wrap this in a function for all verbs, need to build utility functions for separating $ ($ needs to be returned instead of just stdout in explorer)
pageRes = explore.getPage('http://conjugator.reverso.net/conjugation-french-verb-finir.html');
