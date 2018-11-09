var bodyParser = require('body-parser');
const Request = require('./request.model');

module.exports = function(app) {
  app.get('/api/request', (req, res) => {
    Request.find({ status: 1}, (error, result) => {
         if(error) {
             return res.status(500).send(error);
         }
         res.send({result, number: result.length});
     });
  });

  app.get('/api/approved', (req, res) => {
    Request.find({status: 2}, (error, result) => {
      if(error) {
        return res.status(500).send(error);
      }
      res.send({result, number: result.length});
    });
  });

  app.get('/api/cborrowed', (req, res) => {
    Request.find({status: 3}, (error, result) => {
      if(error) {
        return res.status(500).send(error);
      }
      res.send({result, number: result.length});
    });
  });

  app.get('/api/item/:id', function(req, res) {
    Request.findById(req.params.id , function(error, request)  {
      res.json(request)
    });
  })

  app.get('/api/search', (req, res) => {
    const rgx = new RegExp('^'+req.query.description);
    Request.find({$or: [
      {status: req.query.status, description: rgx}
    ]}, function(error, result){
      if(error) {
        return res.status(500).send(error);
      }
      res.send({ result })
    });
  })

}
