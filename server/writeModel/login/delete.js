const User = require('../../readModel/users/user.model');

module.exports = function(app){

  app.delete('/api/removeuser/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id, function(error, request) {
      if(error) {
        return res.status(401).json({
          failed: 'failed to delete user',
          status: 401
        });
      }
      res.json({ message: "User deleted" })
    })
  })
}
