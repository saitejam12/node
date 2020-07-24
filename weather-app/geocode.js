const axios = require('axios');
const chalk = require('chalk');

// Map Box API key
const MB_API_KEY =
  '?access_token=pk.eyJ1Ijoic2FpdGVqYW0xMiIsImEiOiJja2N3aGM4dTQwMjE5MnNvaGo4YTRmaW91In0.DAqStvs7XRFNPsxPRu_iqQ';
const MB_API_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/`;
const getGeoCode = (value, callback) => {
  axios
    .get(MB_API_URL + value + '.json' + MB_API_KEY)
    .then((response) => {
      const disc = response.data.features[0];
      const coords = disc.center;

      callback({
        coords: `lat=${coords[1]}&lon=${coords[0]}`,
        latitude: coords[1],
        logitude: coords[0],
        location: disc.place_name,
      });
    })
    .catch(() => {
      // console.log(error);
      console.log(
        chalk.bgRed(
          'Error. Something Went Wrong with Mapbox Connection. please check the entry is valid/connection  to API is valid'
        )
      );
    });
};

module.exports = getGeoCode;
