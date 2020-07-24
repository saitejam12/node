const axios = require('axios');
const chalk = require('chalk');
const getGeoCode = require('./geocode');
const getWeather = require('./weather');

const weatherInfo = (value) => {
  getGeoCode(value, (coords) => {
    getWeather(coords);
  });
};

weatherInfo('chicago');
