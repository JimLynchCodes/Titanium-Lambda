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

describe('Tests app', function() {
  xit('verifies get', function(done) {
    request.get('/').expect(200).end(function(err, result) {
        test.string(result.body.Output).contains('Hello');
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
