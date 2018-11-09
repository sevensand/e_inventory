var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const RequestSchema = new Schema({
  requesitor: String,
  description: String,
  qty: Number,
  location: String,
  dateborrow: Date,
  datereturn: Date,
  status: Number,
});

module.exports = mongoose.model("equipment", RequestSchema);
