var express = require('express');
var router = express.Router();
var social = require('npm_exam_package');
//var validToken = [22, 23, 24, 25, 26, 26, 27, 28, 29, 30 ];
var validToken = social.validToken;
var auth = function(req, res, next) {
  if (validToken.includes(parseInt(req.query.token))||
      req.query.token==='admin') {
    return next();
  }
  return res.status(401).json({message: 'Invalid token'})
}

router.get('/AllUsers', auth,  function(req, res) {
    res.status(200).json(social.viewAllUsers());
})

router.get('/AllUsersLog', auth,  function(req, res) {
    res.status(200).json(social.usersRegistered());
})
router.get('/AllToken', auth,  function(req, res) {
    res.status(200).json(social.usersToken());
})

router.post('/Signin', auth,  function(req, res) {

    res.status(201).json(social.sendToSocial(req.body.name,
    req.body.surname));
})

router.post('/InPost/:id', auth,  function(req, res) {
    var id = parseInt(req.params.id);
    var body = req.body;
    res.status(201).json(social.insertPost(id,body));
})

router.get('/ReqSend/:id/:idFriend', auth,  function(req, res) {
    var id = parseInt(req.params.id);
    var idFriend =  parseInt(req.params.idFriend);
    res.status(200).json(social.reqSendFriendship(id, idFriend));
})

router.get('/ReqRec/:idFriend/:id', auth,  function(req, res) {
    var idFriend =  parseInt(req.params.idFriend);
    var id = parseInt(req.params.id);
    res.status(200).json(social.reqFriendship(idFriend,id));
})

router.get('/Accept/:id/:idFriend', auth,  function(req, res) {
    var idFriend =  parseInt(req.params.idFriend);
    var id = parseInt(req.params.id);
    res.status(200).json(social.acceptFriend(id,idFriend));
})
router.get('/ViewPost/:id/:idFriend', auth,  function(req, res) {
    var idFriend =  parseInt(req.params.idFriend);
    var id = parseInt(req.params.id);
    res.status(200).json(social.viewPostFriend(id,idFriend));
})
module.exports = router;
