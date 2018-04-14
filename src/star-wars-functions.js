'use strict';

const axios = require('axios');

class StarWarsFunctions {

  constructor() {
    this.axios = axios;
  }

  getCharacterData(number) {
    return new Promise( (resolve, reject) => {
      this.axios.get('https://swapi.co/api/people/' + number)
        .then(function (response) {
          const importantData = {
            'hairColor': response.data.hair_color,
            'eyeColor': response.data.eye_color,
          }
          resolve(importantData);
        })
        .catch(function (error) {
          console.log('getCharacterData failed! ', error);
          reject(error);
        });
    })
  }

  getMovieData(number) {
    return new Promise( (resolve, reject) => {
      this.axios.get('https://swapi.co/api/films/' + number)
        .then(function (response) {
          const importantData = {
            "releaseDate": response.data.release_date
          }
          resolve(importantData);
        })
        .catch(function (error) {
          console.log('getMovieData failed! ', error);
          reject(error);
        });
    })
  }

}

module.exports = StarWarsFunctions;