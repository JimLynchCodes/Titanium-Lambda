'use strict';

var sinon = require('sinon');
var expect = require('chai').expect
const StarWarsFunctions = require('./../src/star-wars-functions');

describe('star-wars-functions', function () {

  describe('getMovieData', () => {

    xit('should should return an object with key "release date" formatted like, "May 15, 2018".',
      () => {
      // const swf = new StarWarsFunctions();
      // expect(swf.buildFinalResponse()).to.equal('ok!');
      // expect(StarWarsFunctions.buildFinalResponse()).to.equal('ok!');


    })


  })


  describe('getCharacterData', () => {


    xit('should should return an object with keys "hairColor" and "eyeColor" containing values from the axios response, ',
      () => {
    const swf = new StarWarsFunctions();

    sinon.stub(swf.axios, 'get').callsFake(() => {

      return new Promise(resolve => {

        resolve({
          'some stuff': 'things...',
          'data': {
            'name': 'Luke Skywalker',
            'hair_color': 'blond',
            'eye_color': 'blue'
          }
        })
      })
    })


    swf.getCharacterData(1).then(result => {

      return expect(result).to.deep.equal(
        {
          'eyeColor': 'blue',
          'hairColor': 'blond',
        }
      );
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


})
;
