
var mongoose = require('mongoose');
var MenuSchema = new mongoose.Schema({
    menuId: String,
    parentMenuId: String,
    menuName: String,
    url: String
});
mongoose.model('Menu', MenuSchema);

module.exports = mongoose.model('Menu');