var express = require('express');
var router = express.Router();
var lesson = require('../models/lesson');
var Lesson = require('../models/lesson')

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//POST route for login/register
router.post('/login', function (req, res, next) {
  // confirm that lesson typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }

  if (req.body.email &&
    req.body.lessonname &&
    req.body.password &&
    req.body.passwordConf) {

    var lessonData = {
      email: req.body.email,
      lessonname: req.body.lessonname,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }

    lesson.create(lessonData, function (error, lesson) {
      if (error) {
        return next(error);
      } else {
        req.session.lessonId = lesson._id;
        return res.redirect('/index.html');
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    lesson.authenticate(req.body.logemail, req.body.logpassword, function (error, lesson) {
      if (error || !lesson) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        req.session.lessonId = lesson._id;
        return res.redirect('/index.html');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

// lesson requests lesson
router.post('/lesson/new', function (req, res, next) {
  // If lesson doesn't exist for lesson yet, add lesson requested to lesson's dashboard of lessons
  if(!lesson.hasLesson(req.lesson)) {
    lesson.addLesson(req.module);
  }
  // Otherwise, just send back data
  Lesson.handleLesson(req,res,next);
});

// lesson finishes lesson
router.post('/lesson/finish', function (req, res, next) {

});
