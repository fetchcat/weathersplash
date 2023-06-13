import '../styles/global.css';
import '../styles/buttons.css';
import '../styles/header.css';
import '../styles/weather.css';

import { renderCurrentWeather, renderEightDayForecast } from './util/dom';
import { getByGeolocation, getLocation } from './util/api';

const searchButton = document.querySelector('#search');
const searchInput = document.querySelector('#input');
const currentButton = document.querySelector('#current');

searchButton.addEventListener('click', async () => {
  if (searchInput.value === '') return;

  const response = await getLocation(searchInput.value);

  if (response !== null) {
    renderCurrentWeather(response.weatherData);
    renderEightDayForecast(response.oneCallData);
    searchInput.value = '';
  }
});

currentButton.addEventListener('click', async () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await getByGeolocation(latitude, longitude);

      if (response !== null) {
        renderCurrentWeather(response.weatherData);
        renderEightDayForecast(response.oneCallData);
        searchInput.value = '';
      }
    });
  } else {
    /* geolocation IS NOT available */
    console.log('derp');
  }
});
