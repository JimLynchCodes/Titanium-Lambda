/**
 *  @author Jim Lynch <jim@wisdomofjim.com>
 *
 *  This is one one way of testing your lambda function as a whole when it is exposed as a REST endpoint.
 *
 *  With the supertest library we can hook into the express middleware we are using to make it think it is
 *  being hit by a real get / post request, etc. These tests DO call out to external services (hence why they are
 *  in the e2e-tests folder).
 */

'use strict';

const supertest = require('supertest');
const test = require('unit.js');
const app = require('../app.js');

const request = supertest(app);

describe('Lambda responses when calling it as a REST endpoint.', function () {

  describe('Calling to endpoing in "happy case" where known character is queried.', () => {

    [
      {
        'charIndex': 1,
        'name': 'Luke Skywalker',
        'expectedHairColor': 'blond',
        'expectedEyeColor': 'blue'
      },
      {
        'charIndex': 2,
        'name': 'C-3PO',
        'expectedHairColor': 'n/a',
        'expectedEyeColor': 'yellow'
      },
      {
        'charIndex': 3,
        'name': "R2-D2",
        'expectedHairColor': 'n/a',
        'expectedEyeColor': 'red'
      },
      {
        'charIndex': 4,
        'name': 'Darth Vader',
        'expectedHairColor': 'none',
        'expectedEyeColor': 'yellow'
      },
      {
        'charIndex': 5,
        'name': 'Leia Organa',
        'expectedHairColor': 'brown',
        'expectedEyeColor': 'brown'
      },
      {
        'charIndex': 6,
        'name': 'Owen Lars',
        'expectedHairColor': 'brown, grey',
        'expectedEyeColor': 'blue'
      },
      {
        'charIndex': 7,
        'name': 'Beru Whitesun lars',
        'expectedHairColor': 'brown',
        'expectedEyeColor': 'blue'
      },
      {
        'charIndex': 8,
        'name': 'R5-D4',
        'expectedHairColor': 'n/a',
        'expectedEyeColor': 'red'
      },
      {
        'charIndex': 9,
        'name': 'Biggs Darklighter',
        'expectedHairColor': 'black',
        'expectedEyeColor': 'brown'
      },
      {
        'charIndex': 10,
        'name': 'bi-Wan Kenobi',
        'expectedHairColor': 'auburn, white',
        'expectedEyeColor': 'blue-gray'
      }
    ].forEach(charObj => {
      it('verifies get', function (done) {
        request.get('/?character=' + charObj.charIndex)
          .expect(200).end(function (err, result) {
          test.string(result.body.hairColor).contains(charObj.expectedHairColor);
          test.string(result.body.eyeColor).contains(charObj.expectedEyeColor);
          test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
          done(err);
        });
      });
    })
  });

  describe('Calling to endpoint with bad query param for character', () => {

    [
      {
        'charIndex': 'luke',
        'expectedError': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': 'DERP',
        'expectedError': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': '!@#$!#$^@#$%!',
        'expectedError': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': '',
        'expectedError': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': 42,
        'expectedError': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': 11,
        'expectedError': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': -1,
        'expectedError': 'Please pass query parameter "character" with a value 0 - 10.'
      }
    ]
      .forEach(charObj => {
        it('verifies get', function (done) {
          request.get('/?character=' + charObj.charIndex)
            .expect(200).end(function (err, result) {
            test.string(result.body.error).contains(charObj.expectedError);
            test.value(result).hasHeader('content-type', 'application/json; charset=utf-8');
            done(err);
          });
        });
      })

  })

});
