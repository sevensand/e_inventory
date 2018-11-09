var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuditSchema = new Schema({
  description: String
});

module.exports = mongoose.model("equipmentlog", AuditSchema);
