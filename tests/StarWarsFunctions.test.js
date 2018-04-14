'use strict';

// const supertest = require('supertest');
// const test = require('unit.js');
// const app = require('../app.js');

// const request = supertest(app);

var expect = require('chai').expect
const StarWarsFunctions = require('./../src/StarWarsFunctions');


describe('StarWarsFunctions', function() {

  describe('buildFinalResponse', () => {

    it('should do things', () => {

      const swf = new StarWarsFunctions();
      expect(swf.buildFinalResponse()).to.equal('ok!');
      // expect(StarWarsFunctions.buildFinalResponse()).to.equal('ok!');



    })


  })


  describe('getMovieData', () => {

    it('should do things', () => {


      const swf = new StarWarsFunctions();

      swf.getCharacterData().then( result => {
        expect(result).to.equal('ok!');
      })
      // expect(StarWarsFunctions.buildFinalResponse()).to.equal('ok!');



    })


  })

  // it('verifies get', function(done) {
  //   request.get('/').expect(200).end(function(err, result) {
  //       test.string(result.body.Output).contains('Hello');
  //       test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
  //       done(err);
  //   });
  // });
  // it('verifies post', function(done) {
  //   request.post('/').expect(200).end(function(err, result) {
  //       test.string(result.body.Output).contains('Hello');
  //       test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
  //       done(err);
  //   });
  // });



});
