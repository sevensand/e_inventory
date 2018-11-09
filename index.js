const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const db = require('./server/connection');


// api controller
//READ
const  equipment = require('./server/readModel/equipment');
const  request = require('./server/readModel/request');
const  users = require('./server/readModel/users');
const  auditlog = require('./server/readModel/auditlog');

//WRITE
const signin = require('./server/writeModel/login/signin');
const removeuser = require('./server/writeModel/login/delete');
const signup = require('./server/writeModel/login/signup');
const updatereq = require('./server/writeModel/request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

//READ
equipment(app);
request(app);
users(app);
auditlog(app);
//WRITE

//user request
signin(app);
signup(app);
removeuser(app);

updatereq(app);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './app/index.html'));

});
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log('Server is running on: ' + port));
