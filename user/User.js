var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  login: String,
  password: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');