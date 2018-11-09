var bodyParser = require('body-parser');
const Users = require('./user.model');

module.exports = function(app){
  app.get('/api/users', (req, res) => {
    Users.find({}, (error, result) => {
        if(error) {
          return res.status(500).send(error);
        }
        res.send(result);
    })
  });

  app.get('/api/users/:id', (req, res) => {
    Users.findById(req.params.id, function(error, result){
      res.json(result)
    })
  });
}
