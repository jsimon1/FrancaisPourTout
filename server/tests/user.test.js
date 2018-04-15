var mongoose = require(mongoose),
    User = require('../model/user'),
    expect = require('expect.js');

var connStr = mongodb://localhost:27017/mongoose-bcrypt-test;
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log(Successfully connected to MongoDB);
});

//
// User test cases
//
describe('User', function() {

  // comparePassword() test cases
  describe('#comparePassword()', function() {
    it('should return true when input password matches datbase password', function() {

    });
  });
});
