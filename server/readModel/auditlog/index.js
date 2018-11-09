var bodyParser = require('body-parser');
const Auditlog = require('./auditlog.model');


module.exports = function(app) {

  app.get('/api/auditlog', (req, res) => {
    Auditlog.find({}, (error, result) => {
        if(error) {
          return res.status(500).send(error);
        }
        res.send(result);
    })
  });
}
