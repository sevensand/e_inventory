var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  userlevel: String,
  contactno: Number

});

module.exports = mongoose.model("users", UserSchema);
