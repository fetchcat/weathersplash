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

const renderCurrentData = (data) => {
  const currentWeatherDesc = document.querySelector('#current-weather');
  const currentWeatherIcon = document.querySelector('#current-weather-icon');
  const currentDay = document.querySelector('#current-day');

  const location = document.querySelector('#location');
  const loader = document.querySelector('#loader');

  const { dayFullName, monthFullName, dayOfMonth } = parseDate(data.dt);

  loader.classList.add('none');

  location.textContent = `${data.name}, ${data.sys.country}`;
  currentWeatherDesc.textContent = data.weather[0].main;
  currentTemp.textContent = `${convertCelcius(
    data.main.temp
  )}\xB0C / ${convertFahrenheit(data.main.temp)}\xB0F`;

  currentDay.textContent = `${dayFullName}, ${monthFullName} ${dayOfMonth}`;

  currentWeatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
};

// Render 8 Day forecast elements to DOM
export const renderLongTermData = (data) => {
  const eightDay = document.querySelector('#eight-day');

  data.daily.forEach((day) => {
    const { dayFullName } = parseDate(day.dt);
    const maxTempC = convertCelcius(day.temp.max);
    const maxTempF = convertFahrenheit(day.temp.max);

    const minTempC = convertCelcius(day.temp.min);
    const minTempF = convertFahrenheit(day.temp.min);

    const dayForecast = document.createElement('div');
    dayForecast.classList.add('day');
    dayForecast.innerHTML = `
      <h3>${dayFullName}</h3>
      <div class="icon-background">
        <img src='http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png' />
      </div>
      <p class="info-color">${day.weather[0].main}</p>
      <p class="info-color">High: ${maxTempC}C/${maxTempF}F</p>
      <p class="info-color">Low: ${minTempC}C/${minTempF}F</p>
      <p class="info-color">Humidity: ${day.humidity}%</p>
    `;
    eightDay.appendChild(dayForecast);
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
  loader.remove();
};

export const addMessage = (type, text) => {
  if (type === undefined || text === undefined) return;

  const message = document.createElement('div');
  message.classList.add(
    type === 'error' ? 'message message--error' : 'message'
  );
  message.innerText = text;

  weather.appendChild(message);
};

export default renderCurrentData;
