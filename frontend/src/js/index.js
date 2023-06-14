import '../styles/global.css';
import '../styles/buttons.css';
import '../styles/header.css';
import '../styles/weather.css';
import '../styles/loader.css';
import '../styles/message.css';

import { renderCurrentWeather, renderEightDayForecast } from './util/dom';
import { getByGeolocation, getLocation } from './util/api';
import { addLoader, removeLoader, addMessage } from './util/dom';

const searchButton = document.querySelector('#search');
const searchInput = document.querySelector('#input');
const currentButton = document.querySelector('#current');
const details = document.querySelector('#details');

searchButton.addEventListener('click', async () => {
  if (searchInput.value === '') return;

  addLoader();

  const response = await getLocation(searchInput.value);

  if (response !== null) {
    renderCurrentWeather(response.weatherData);
    renderEightDayForecast(response.oneCallData);
    searchInput.value = '';
    details.classList.remove('none');
    removeLoader();
  }
  addMessage('error', 'derp');
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
        details.classList.remove('none');
      }
    });
  } else {
    /* geolocation IS NOT available */
    console.log('derp');
  }
});
