'use strict';

const axios = require('axios');
const errorResponse = {'error': 'Please pass query parameter "character" with a value 0 - 10.'};
class StarWarsFunctions {

  constructor() {
    this.axios = axios;
  }

  /**
   *
   *  Pass in a number 1-10 representing a star wars character.
   *  return hair_color and eye color of that character.
   *
   * @param number
   * @returns {Promise}
   *
   * @resolves {
   *   hairColor: String,
   *   eyeColor: String,
   * }
   *
   * @rejects {
   *    msg: string
   * }
   */

  getCharacterData(number) {
    return new Promise( (resolve, reject) => {

      const intNumber = parseInt(number);

      if (isNaN(intNumber)) {
        reject(errorResponse)
      } else if (intNumber < 0 || intNumber > 10) {
        reject(errorResponse)
      }

      this.axios.get('https://swapi.co/api/people/' + intNumber)
        .then(function (response) {
          const importantData = {
            'hairColor': response.data.hair_color,
            'eyeColor': response.data.eye_color,
          }
          resolve(importantData);
        })
        .catch(function (error) {
          reject(error);
        });
    })
  }

}

module.exports = StarWarsFunctions;