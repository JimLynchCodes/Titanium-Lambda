'use strict';

'use strict';

const supertest = require('supertest');
const test = require('unit.js');
const app = require('../app.sw-api-example');
const sinon = require('sinon');
const expect = require('chai').expect;

const fakeResponseObject = {
  set: function () {},
  send: function () {}
};

describe('Tests app', function () {

  describe('Reading params to lambda function.', () => {

    let stub;

    before(() => {
      stub = sinon.stub(app.starWarsFunctions, 'getCharacterData').callsFake(() => {
        return new Promise(resolve => {
          resolve({
            'name': 'Luke Skywalker',
            'hair_color': 'blond',
            'eye_color': 'blue',
          })
        })
      })
    });

    after(() => {
      stub.restore();
    });

    it('should set lambdaParams property from "req.apiGateway.event".', () => {
      app.getHandler({
        "apiGateway": {
          "event": {
            "hello": 'test-event'
          }
        }
      }, fakeResponseObject);

      expect(app.lambdaParams['hello']).to.equal('test-event')
    });


    it('should set lambdaParams property from "req.query".', () => {
      app.getHandler({
        "query": {
          "something": 'other test'
        }
      }, fakeResponseObject);

      expect(app.lambdaParams['something']).to.equal('other test')
    })

  });

  describe('correctly calling express\'s res.send to send the lambda function response.', () => {

    let stub;
    let getCharacterDataSpy;

    const fakeCharacterData = {
      'name': 'Luke Skywalker',
      'hair_color': 'blond',
      'eye_color': 'blue',
    };

    afterEach(() => {
      stub.restore();
      getCharacterDataSpy.restore();
    });

    it('should call res.send with the character data on success.', () => {
      stub = sinon.stub(app.starWarsFunctions, 'getCharacterData').callsFake(() => {
        return new Promise(resolve => {
          resolve(fakeCharacterData)
        })
      });

      getCharacterDataSpy = sinon.spy(fakeResponseObject, 'send');

      return app.getHandler({
        "apiGateway": {
          "event": {
            "hello": 'test-event'
          }
        }
      }, fakeResponseObject).then(() => {
        return expect(getCharacterDataSpy.calledOnceWithExactly(fakeCharacterData)).to.be.true;
      });
    });

    it('should call res.send with the error data on fail.', () => {

      const sampleError = {"error": "uh oh, something broke!"}

      stub = sinon.stub(app.starWarsFunctions, 'getCharacterData').callsFake(() => {
        return new Promise((resolve, reject) => {
          reject(sampleError);
        })
      });

      getCharacterDataSpy = sinon.spy(fakeResponseObject, 'send');

      return app.getHandler({}, fakeResponseObject).then(() => {
        return expect(getCharacterDataSpy.calledOnceWithExactly(sampleError)).to.be.true;
      });
    })
  })
});
