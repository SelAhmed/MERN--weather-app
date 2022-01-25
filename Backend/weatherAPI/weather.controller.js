const cfg = require('../config.json');
const fetch = require('cross-fetch');
var weather = require('../_helpers/apiBodyRes');
const express = require('express');
const router = express.Router();

const city = "london";
const day_bnr = 5;
const cityQuery = "//api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+cfg.weatherAPI;
const newURL = weather.getUrlForecast();


// routes
// router.get('/daily/:city', weather.dailyCollect(cityQuery));
// router.get('/forecast/:city/', weather.forecastCollect(newURL));
  