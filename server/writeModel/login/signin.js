const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const User = require('../../readModel/users/user.model');
const bcrypt = require('bcrypt');


module.exports = function(app) {

  app.post('/signin', function(req, res){
    User.findOne({ username: req.body.username })
    .exec()
    .then(function(user){
      bcrypt.compare(req.body.password, user.password, function(err, result){
        if(err){
          return res.status(401).json({
            failed: 'failed to login',
            status: 401
          });
        }
        if(result) {
          const JWT = jwt.sign({
            username: user.username,
            _id: user._id,
          }, 'secret', {
            expiresIn: '2h'
          });
          return res.json({
            success: 'your authenticated',
            userlevel: user.userlevel,
            token: JWT,
            status: 200
          })
        }
        return res.status(401).json({
          failed: 'Unauthorized Access',
          status: 401
        });
      });
    })
    .catch(error => {
      res.status(500).json({
        failed: 'Something Wrong!!!',
        status: 500
      })
    })
  });

}
