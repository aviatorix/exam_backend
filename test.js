var assert = require('assert');
var request = require('supertest');
var social = require('./app');

describe('GET Social Network', function() {
    it('return all user', function(done) {
        request(social)
          .get('/users/AllUsers?token=admin')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
    it('return all users logged in', function(done) {
        request(social)
          .get('/users/AllUsersLog?token=admin')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
    it('return all token', function(done) {
        request(social)
          .get('/users/AllToken?token=admin')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
    it('inserting a post', function(done) {
        request(social)
          .post('/users/InPost/1?token=admin')
          .set('Accept', 'application/json')
          .send({message:'Hello World!'})
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
    it('sign in user', function(done) {
        request(social)
          .post('/users/Signin?token=admin')
          .set('Accept', 'application/json')
          .send({name:'Pippo',surname:'Sempronio'})
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
    it('send a request', function(done) {
        request(social)
          .get('/users/ReqSend/1/2?token=admin')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
    it('receive a request', function(done) {
        request(social)
          .get('/users/ReqRec/2/1?token=admin')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
    it('accept a request', function(done) {
        request(social)
          .get('/users/Accept/1/2?token=admin')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
    it('view a post of friends', function(done) {
        request(social)
          .get('/users/ViewPost/1/2?token=admin')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
      });
    })
});
