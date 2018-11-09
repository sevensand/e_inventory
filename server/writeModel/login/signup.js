const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const extjwt = require('express-jwt');
const User = require('../../readModel/users/user.model');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

module.exports = function(app) {
  app.post('/api/signup', function(req, res){
    bcrypt.hash(req.body.password, 10, function(err, hash){
    if(err){
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        username: req.body.username,
        password: hash,
        contactno: req.body.contactno,
        userlevel: req.body.userlevel
      });
      user.save()
      .then(function(result){
        console.log(result)
        res.status(200).json({
          success: 'New Users Added'
        });
      })
      .catch(error => {
        res.status(500).json({
          error: err
        });
      })
    }
  });
  });

  app.put('/api/updateuser/:id', function(req, res) {
    User.findById(req.params.id, function(error, request) {
      request.username = req.body.username,
      request.name = req.body.name,
      request.contactno = req.body.contactno,
      request.userlevel = req.body.userlevel
      request.save()
      res.json(request)
    });
  })

}
