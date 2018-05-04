const express = require("express");
const mongoose = require("mongoose");
var user = require("../models/user.js");
var lesson = require("../models/menu.js");
var router = express.Router();

router.get("/", function (req, res) {
    user.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function (req, res) {
    var id = req.params.id;
    user.find({
        _id: id
    }, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
}).post("/", function (req, res) {
    var obj = req.body;
    var model = new user(obj);
    model.save(function (err) {
        if (err) {
            res.send(err);
            return;
        }
        res.send("created");
    });
}).put("/:id", function (req, res) {
    var id = req.params.id;
    var obj = req.body;

    user.findByIdAndUpdate(id, obj,
        function (err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
}).delete("/", function (req, res) {
    user.remove({}, function (err) {
        if (err) {
            res.send(error);
            return;
        }
        res.send("deleted all");
    });
}).delete("/:id", function (req, res) {
    var id = req.params.id;
    user.findByIdAndRemove(id, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
}).get("/user-menus/:id", function (req, res) {
  var id = req.params.id;
  var _user = user.findOne({
    _id: id
  }, function (err) {
    if (err) {
        res.send("error");
        return;
    }
  });

  _user.exec(function (err, docs) {
    var lessonIds = docs.menus.map(function (lessonId) {
      return mongoose.Types.ObjectId(lessonId);
    });

    var lessons = lesson.find({
      _id: {
        "$in": lessonIds
      }
    }, function (err) {
      if (err) {
          res.send("error");
          return;
      }
    })
    // Fill with "joined" info instead of just ids
    .populate({
      path: 'modules',
      populate: { path: 'words' }
    });;

    lessons.exec(function (err, docs) {
      res.send(docs);
    });
  });
});
