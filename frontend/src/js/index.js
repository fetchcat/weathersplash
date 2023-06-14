import '../styles/global.css';
import '../styles/buttons.css';
import '../styles/header.css';
import '../styles/weather.css';
import '../styles/loader.css';
import '../styles/message.css';

import searchFieldListener, { currentLocationListener } from './util/listeners';
import { clearWeather } from './util/dom';

const searchButton = document.querySelector('#search');
const currentButton = document.querySelector('#current');
const inputField = document.querySelector('#input');
const clearButton = document.querySelector('#clear');

// Search Button and Input Field
searchButton.addEventListener('click', searchFieldListener);
inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') searchFieldListener();
});

// Current Button
currentButton.addEventListener('click', currentLocationListener);

// Clear Button
clearButton.addEventListener('click', clearWeather);
