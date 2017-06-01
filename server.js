// server init + mods
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var install = require('./install.js');
const fs = require('fs');

// server route handler
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// start server
http.listen(3000, function(){
  console.log('Server up on *:3000');
});
