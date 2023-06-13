const fetchWeather = async (city) => {
  const key = process.env.API_KEY;

  const weatherAPI = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  );

  const weatherData = await weatherAPI.json();

  if (weatherData.cod === '404') {
    return res.status(400).json({ message: 'City not found' });
  }

  const oneCallAPI = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=hourly,minutely&appid=${key}`
  );
  const oneCallData = await oneCallAPI.json();

  return { weatherData, oneCallData };
};

const fetchWeatherByGeo = async (latitude, longitude) => {
  const key = process.env.API_KEY;

  const reverseGeoAPI = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${key}`
  );

  const reverseGeoData = await reverseGeoAPI.json();

  if (reverseGeoData.length === 0) {
    return res.status(404).json({ message: 'Location not found' });
  }

  if (reverseGeoData[0].name === undefined) return;

  const weather = await fetchWeather(reverseGeoData[0].name);
  return weather;
};

module.exports = { fetchWeather, fetchWeatherByGeo };
