var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Lesson = require('../models/lesson')

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//POST route for login/register
router.post('/login', function (req, res, next) {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }

  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {

    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        req.session.userId = user._id;
        return res.redirect('/index.html');
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/index.html');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

// User requests lesson
router.post('/lesson/new', function (req, res, next) {
  // If lesson doesn't exist for user yet, add lesson requested to user's dashboard of lessons
  if(!User.hasLesson(req.lesson)) {
    User.addLesson(req.module);
  }
  // Otherwise, just send back data
  Lesson.handleLesson(req,res,next);
});

// User finishes lesson
router.post('/lesson/finish', function (req, res, next) {

});
