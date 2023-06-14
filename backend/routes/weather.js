const express = require('express');
const router = express.Router();
const {
  fetchWeatherData,
  fetchWeatherByGeoData,
} = require('../controllers/weather');

router.route('/').get(fetchWeatherData);
router.route('/geo').get(fetchWeatherByGeoData);

module.exports = router;
