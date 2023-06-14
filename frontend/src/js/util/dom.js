import convertCelcius, { convertFahrenheit, parseDate } from './helpers';

export const renderCurrentWeather = (data) => {
  const currentTemp = document.querySelector('#current-temp');
  const currentWeatherIcon = document.querySelector('#current-weather-icon');
  const currentWeatherDesc = document.querySelector('#current-weather');
  const currentDay = document.querySelector('#current-day');
  const location = document.querySelector('#location');

  const { dayFullName, monthFullName, dayOfMonth } = parseDate(data.dt);

  currentTemp.textContent = `${convertCelcius(
    data.main.temp
  )}\xB0C / ${convertFahrenheit(data.main.temp)}\xB0F`;

  currentDay.textContent = `${dayFullName}, ${monthFullName} ${dayOfMonth}`;

  location.textContent = `${data.name}, ${data.sys.country}`;

  currentWeatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  currentWeatherIcon.classList.add('weather__icon-lg');
  currentWeatherIcon.classList.remove('none');
  currentWeatherDesc.textContent = `${data.weather[0].main}`;
};

export const renderEightDayForecast = (data) => {
  const days = data.daily;
  const forecast = document.querySelector('#forecast');

  days.forEach((day) => {
    const { dayOfMonth, dayFullName, monthFullName } = parseDate(day.dt);
    const maxTempC = convertCelcius(day.temp.max);
    const maxTempF = convertFahrenheit(day.temp.max);

    const weatherItem = document.createElement('li');
    weatherItem.classList.add('weather__item');

    const weatherDay = document.createElement('div');
    weatherDay.classList.add('weather__day');
    weatherDay.textContent = `${dayFullName}, ${monthFullName} ${dayOfMonth}`;

    const icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
    icon.alt = day.weather[0].description;
    icon.classList.add('weather__icon-sm');

    const temps = document.createElement('span');
    temps.textContent = `${maxTempC}\u00B0C / ${maxTempF}\u00B0F`;

    weatherItem.appendChild(weatherDay);
    weatherItem.appendChild(icon);
    weatherItem.appendChild(temps);

    forecast.appendChild(weatherItem);
  });
};

export const addLoader = () => {
  const loader = document.createElement('div');
  loader.setAttribute('id', 'loader');
  loader.classList.add('loader');

  const spinner = document.createElement('div');
  spinner.classList.add('loader__spinner');

  loader.appendChild(spinner);
  weather.appendChild(loader);
};

export const removeLoader = () => {
  const loader = document.querySelector('#loader');
  if (loader !== null) loader.remove();
};

export const addMessage = (type, text) => {
  if (type === undefined || text === undefined) return;
  const message = document.createElement('div');

  message.classList.add('message');
  if (type === 'error') message.classList.add('message--error');
  message.innerText = text;

  weather.appendChild(message);
};

export const cleanupMessages = () => {
  const existingMessages = document.querySelectorAll('.message');
  if (existingMessages !== null) {
    existingMessages.forEach((message) => message.remove());
  }
};

export const clearWeather = () => {
  // Reset mesages and Loader as well
  cleanupMessages();
  removeLoader();

  const currentTemp = document.querySelector('#current-temp');
  const currentWeatherIcon = document.querySelector('#current-weather-icon');
  const currentWeatherDesc = document.querySelector('#current-weather');
  const currentDay = document.querySelector('#current-day');
  const location = document.querySelector('#location');
  const forecast = document.querySelector('#forecast');
  const details = document.querySelector('#details');

  currentTemp.innerText = '';
  currentWeatherIcon.src = '';
  currentWeatherIcon.classList.add('none');
  currentWeatherDesc.innerText = '';
  currentDay.innerText = '';
  location.innerText = '';
  forecast.innerText = '';

  details.classList.add('none');
};
