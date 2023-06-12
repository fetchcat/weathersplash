import '../styles/global.css';
import '../styles/buttons.css';
import '../styles/header.css';
import '../styles/weather.css';

import '../styles/media.css';

import { renderCurrentWeather, renderEightDayForecast } from './util/dom';
import { getLocation } from './util/api';

const searchButton = document.querySelector('#search');
const searchInput = document.querySelector('#input');

searchButton.addEventListener('click', async () => {
  if (searchInput.value === '') return;

  const response = await getLocation(searchInput.value);

  if (response !== null) {
    console.log(response);
    renderCurrentWeather(response.weatherData);
    renderEightDayForecast(response.oneCallData);
    searchInput.value = '';
  }
});

// fetch weather info on load
//window.addEventListener('load', fetchWeather);
feather.replace();
