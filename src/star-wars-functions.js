'use strict';
/**
 *  @author Jim Lynch <jim@wisdomofjim.com
 *
 *  This file is an example of how you can extract asynchronous apis into class containing one or more functions that
 *  (could) return promises.
 */

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
   *  @param number
   *  @returns {Promise}
   *
   *    @resolves {
   *      name: String
   *      hairColor: String,
   *      eyeColor: String,
   *    }
   *
   *    @rejects {
   *      msg: string
   *    }
   */

  getCharacterData(number) {
    return new Promise((resolve, reject) => {

      const intNumber = parseInt(number);

      if (isNaN(intNumber)) {
        reject(errorResponse)
      } else if (intNumber < 1 || intNumber > 10) {
        reject(errorResponse)
      }

      this.axios.get('https://swapi.co/api/people/' + intNumber)
        .then(function (response) {
          const importantData = {
            'name': response.data.name,
            'hairColor': response.data.hair_color,
            'eyeColor': response.data.eye_color,
          };
          resolve(importantData);
        })
        .catch(function (error) {
          reject({'error': error});
        });
    })
  }

}

module.exports = StarWarsFunctions;