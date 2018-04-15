'use strict';

'use strict';

const supertest = require('supertest');
const test = require('unit.js');
const app = require('../app.js');
const sinon = require('sinon');

const request = supertest(app);

describe('Tests app', function() {

  it('tests get handler: ', () => {
    app.getHandler({}, {set: function() {

    }, send: function () {

    }})
  })

  xit('verifies get', function(done) {
    sinon.stub(app.starWarsFunctions, 'getCharacterData').callsFake( () => {
      return new Promise( (resolve, reject) => {
        resolve({
          'hairColor': 'rainbow',
          'eyeColor': 'orange',
        })
      })
    })

    request.get('/').expect(200).end(function(err, result) {

      test.string(result.body.hairColor).contains('rainbow');
      test.string(result.body.eyeColor).contains('orange');
      test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
      done(err);
    });
  });
  xit('verifies post', function(done) {
    request.post('/').expect(200).end(function(err, result) {
      test.string(result.body.Output).contains('Hello');
      test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
      done(err);
    });
  });
  xit('sdf post', function(done) {
    request.post('/').expect(200).end(function(err, result) {
      test.string(result.body.Output).contains('Hello');
      test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
      done(err);
    });
  });
});



// var sinon = require('sinon');
// var expect = require('chai').expect
// // const StarWarsFunctions = require('./../src/star-wars-functions');
//
// const app = require('../app');
//
// describe('star-wars-functions', function () {
//
//   describe('getMovieData', () => {
//
//     it('should should return an object with key "release date" formatted like, "May 15, 2018".',
//       () => {
//         // const swf = new StarWarsFunctions();
//         // expect(swf.buildFinalResponse()).to.equal('ok!');
//         // expect(StarWarsFunctions.buildFinalResponse()).to.equal('ok!');
//
//         // expect(app.get('/')).to.equal("yo")
//
//         console.log('ok ', app.get('/'))
//
//       })
//
//
//   })
//
//
//   describe('getCharacterData', () => {
//
//
//     //   it('should should return an object with keys "hairColor" and "eyeColor" containing values from the axios response, ',
//     //     () => {
//     //       const swf = new StarWarsFunctions();
//     //
//     //       sinon.stub(swf.axios, 'get').callsFake(() => {
//     //
//     //         return new Promise(resolve => {
//     //
//     //           resolve({
//     //             'some stuff': 'things...',
//     //             'data': {
//     //               'name': 'Luke Skywalker',
//     //               'hair_color': 'blond',
//     //               'eye_color': 'blue'
//     //             }
//     //           })
//     //         })
//     //       })
//     //
//     //
//     //       swf.getCharacterData(1).then(result => {
//     //
//     //         return expect(result).to.deep.equal(
//     //           {
//     //             'eyeColor': 'blue',
//     //             'hairColor': 'blond',
//     //           }
//     //         );
//     //       })
//     //
//     //     })
//     //
//     // })
//   // })
//
// })
