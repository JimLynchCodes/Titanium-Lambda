'use strict';
/**
 *  @author Jim Lynch
 *
 *  This is an example of what I like to call "integration tests". They are similar to unit tests in that they aim to
 *  verify the correct return values for individual functions tested in isolation. However, unlike unit tests which
 *  have side effects such as external requests mocked, these tests allow the functions to call the external apis.
 */
const expect = require('chai').expect
const StarWarsFunctions = require('./../src/star-wars-functions');


describe('StarWarsFunctions', function () {

  describe('getCharacterData', () => {

    it('should get real Luke skywalker data when calling getCharacterData with the value 1.', () => {
      const swf = new StarWarsFunctions();
      swf.getCharacterData(1).then(result => {
        return expect(result).to.deep.equal(
          {
            'name': 'Luke Skywalker',
            'eyeColor': 'blue',
            'hairColor': 'blond',
          }
        );
      })
    })

  });
});
