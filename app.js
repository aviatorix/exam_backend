var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var users = require('./routes/users');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', users);


app.listen(3001);
module.exports = app;
