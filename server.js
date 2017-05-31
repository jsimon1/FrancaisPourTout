// server init + mods
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var explore = require('./explorer.js');
const fs = require('fs');

// server route handler
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

mongoose.connect('mongodb://localhost/FrancaisPourTout');

function getPage () {
  pageRes = explore.getPage('http://conjugator.reverso.net/conjugation-french-verb-finir.html');
  fs.appendFile('response.txt', pageRes , function (err){
   if (err) {
     console.log('Unable to write to file');
   }
  });
}

// start server
http.listen(3000, function(){
  console.log('Server up on *:3000');
  getPage();
});