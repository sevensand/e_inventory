var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EquipmentSchema = new Schema({
  description: String,
  code: String,
  brand: String,
  model: String,
  searialno: String,
  location: String,
  condition: String,
  purchasedate: Date,
  qty: Number
});

module.exports = mongoose.model("tools", EquipmentSchema);
