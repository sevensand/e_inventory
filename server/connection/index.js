const mongoose = require('mongoose');

var uri = "mongodb+srv://admin1:admin1234@einventory01-rny7n.mongodb.net/test?retryWrites=true";

mongoose.connect(uri, function(err, db) {
  if(err) {
    console.log(err)
  } else {
    console.log("connected to DB");
    console.log()
  }
});
