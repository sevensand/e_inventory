var bodyParser = require('body-parser');
const Equipment = require('./equipment.model');
module.exports = function (app) {
    app.get('/api/equipment', (req, res) => {
      Equipment.find({}, (error, result)=> {
        if(error) {
          return res.status(500).send(error);
        }
        res.send({
          result,
          number: result.length
        });
      })
    });

}
