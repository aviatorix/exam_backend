var assert = require('assert');
var social = require('./index.js');

describe('Social network function', function() {
  it('Social is an array to length 1',
    function() {
          social.sendToSocial("Caio","Sempronio");
          assert.equal(social.viewAllUsers().length, 2);
  });

 it('Add a Post in array social',
    function() {
        social.insertPost(1,"Hello World");
  });

  it('Friendship request sent',
    function() {
        social.reqSendFriendship(1,2);
  });

  it('Friend request received',
    function() {
        social.reqSendFriendship(2,1);
  });
  it('Remove a post in social',
    function() {
        social.removePost (1);
  });

  it('Removes a friend request made',
    function() {
        social.removeReqE (1);
  });

  it('Accept a request',
    function() {
        social.acceptFriend(1,2);
  });

});
