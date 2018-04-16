'use strict';
/**
 *   @author Jim Lynch <jim@wisdomofjim.com>
 *
 *   Unit tests for the star-wars-functions class. Here I mock axios.get method and verify that a hardcoded response
 *   yields the correct return value for getCharacterData function. Also verifies that bad inputs return error messages.
 */

const sinon = require('sinon');
const expect = require('chai').expect
const StarWarsFunctions = require('./../src/star-wars-functions');

describe('star-wars-functions - getCharacterData', function () {

  describe('getCharacterData happy path.', () => {

    it('should return an object with keys "name", "hairColor", "eyeColor" containing values from the axios ' +
      'response, ', () => {
      const swf = new StarWarsFunctions();

      const axiosGetStub = sinon.stub(swf.axios, 'get').callsFake(() => {
        return new Promise(resolve => {
          resolve({
            'some stuff': 'things...',
            'data': {
              'name': 'Luke Skywalker',
              'hair_color': 'blond',
              'eye_color': 'blue',
              'other stuff': 'other things.'
            }
          })
        })
      });

      return swf.getCharacterData(1).then(result => {
        axiosGetStub.restore();
        return expect(result).to.deep.equal(
          {
            'name': 'Luke Skywalker',
            'eyeColor': 'blue',
            'hairColor': 'blond',
          }
        );
      })

    });

  });

  describe('bad inputs to "getCharacterData" that return error messages.', () => {
    [
      {
        'charIndex': 'luke',
        'error': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': 'DERP',
        'error': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': '!@#$!#$^@#$%!',
        'error': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': '',
        'error': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': 42,
        'error': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': 11,
        'error': 'Please pass query parameter "character" with a value 0 - 10.'
      },
      {
        'charIndex': -1,
        'error': 'Please pass query parameter "character" with a value 0 - 10.'
      },

    ]
      .forEach(charObj => {
        it(`should return error message for: ${charObj.charIndex} (not integers between 1 and 10`, () => {
          const swf = new StarWarsFunctions();
          return swf.getCharacterData(charObj.charIndex).then(successHandler => {
            },
            result => {
              expect(result.error).to.deep.equal(charObj.error)
            })

        })
      })
  });

  describe('axios request fails.', () => {

    it('should return promise rejected with object: { error: [error message from axios] } when the axios request ' +
      'fails.', () => {

      const swf = new StarWarsFunctions();

      const axiosFailingGetStub = sinon.stub(swf.axios, 'get').callsFake(() => {
        return new Promise((resolve, reject) => {
          reject('bad stuff happened!');
        })
      });

      return swf.getCharacterData(1).then(successHandler => {
        },
        result => {
          axiosFailingGetStub.restore();
          return expect(result).to.deep.equal(
            {
              'error': 'bad stuff happened!'
            })
        })

    })

  })

});
