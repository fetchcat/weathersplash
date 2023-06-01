import '../styles/index.css';

import fetchWeather from './util/listeners';

// fetch weather info on load
window.addEventListener('load', fetchWeather);
