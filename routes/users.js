var express = require('express');
var router = express.Router();
var social = require('npm_exam');

var auth = function(req, res, next) {
    if (req.query.token === '1') {
      return next();
    }
    return res.status(401).json({message: 'Invalid token'})
}
