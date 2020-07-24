const axios = require('axios');
const chalk = require('chalk');

//Open Weather Map API key
const OWM_API_KEY = `&appid=545f13f841ca097329540c0a1d23bb0e`;

// const city = `chicago`;
// const lat = '41.85';
// const lon = '-87.65';

const OWM_API_URL = `https://api.openweathermap.org/data/2.5/weather?`;
const units = '&units=metric';

const getWeather = (coord) => {
  axios
    .get(OWM_API_URL + coord.coords + units + OWM_API_KEY)
    .then((response) => {
      const data = response.data;
      console.log(data);
      console.log(
        chalk.greenBright(
          `Its ${data.main.temp} degrees Centigrade in ${coord.location} and has ${data.weather[0].description}`
        )
      );
    })
    .catch((error) => {
      console.log(error);
      console.log(
        chalk.bgRed('Error. Something Went Wrong. please check the entry is valid/connection  to API is valid')
      );
    });
};

module.exports = getWeather;
