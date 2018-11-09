const Request = require('../../readModel/request/request.model');

module.exports = function(app) {
  app.post('/api/request', function(req, res) {
    var request = new Request();
    request.requesitor = req.body.requesitor;
    request.description = req.body.description;
    request.qty = req.body.qty;
    request.location = req.body.location;
    request.dateborrow = req.body.dateborrow;
    request.datereturn = req.body.datereturn;
    request.status = req.body.status;
    request.save(function(err) {
      if(err) {
        res.send(err)
      }
      res.json({message: 'Request created'})
    })
  });

  app.put('/api/disapproved/:id', function(req, res) {
    Request.findById(req.params.id , function(error, request)  {
      request.status = 4
      request.save()
      res.json(request)
    });
  })

  app.put('/api/approved/:id', function(req, res) {
    Request.findById(req.params.id, function(error, request) {
      request.status = 2
      request.save()
      res.json(request)
    });
  })

  app.put('/api/cborrowed/:id', function(req, res) {
    Request.findById(req.params.id, function(error, request) {
      request.status = 3
      request.save()
      res.json(request)
    });
  })





}
