const { fetchWeather, fetchWeatherByGeo } = require('../util/fetchWeather');

const fetchWeatherData = async (req, res) => {
  const { city } = req.query;

  if (city === undefined) {
    return res.status(400).json({ message: 'No city specified' });
  }

  try {
    const weather = await fetchWeather(city);

    return res.status(200).json(weather);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const fetchWeatherByGeoData = async (req, res) => {
  const { lon, lat } = req.query;

  if (lon === undefined || lat === undefined) {
    return res.status(400).json({ message: 'missing geolocation coordinates' });
  }

  try {
    const weather = await fetchWeatherByGeo(lat, lon);

    return res.status(200).json(weather);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchWeatherData, fetchWeatherByGeoData };
