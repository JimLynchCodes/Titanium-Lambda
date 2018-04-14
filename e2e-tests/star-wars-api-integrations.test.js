'use strict';

/**
 *  @author Jim Lynch <jim@wisdomofjim.com>
 *
 *  This is an example of what I like to call "integration tests". They are similar to unit tests in that they aim to
 *  verify the correct return values for individual functions tested in isolation. However, unlike unit tests which
 *  have side effects such as external requests mocked, these tests allow the functions to call the external apis.
 */
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

      swf.getCharacterData(1).then( result => {

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



});
