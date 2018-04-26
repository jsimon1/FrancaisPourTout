// server init + mods
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const fs = require('fs');
const yargs = require('yargs');

// yargs init
//
const argv = yargs
  .command('install', 'Initial database installation, comes with 500 verbs and their conjugations')
  .help()
  .argv;

var cmd = argv._[0];

// Command Line handlers
if (cmd === 'install') {
  var install = require('./dbInstall/install.js');
  install.createDatabase();
}

// server route handler

var routes = require('./routes/router');
app.use('/', routes);

// start server
http.listen(3000, function(){
  console.log('Server up on *:3000');
});
