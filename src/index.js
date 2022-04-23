import "./styles/index.css";

const fetchWeather = () => {
  const key = process.env.API_KEY;
  // DOM Elements

  const location = document.querySelector("#location");
  const currentDate = document.querySelector("#current-date");
  const currentTemp = document.querySelector("#current-temp");
  const currentWeatherDesc = document.querySelector("#current-weather");
  const currentWeatherIcon = document.querySelector("#current-weather-icon");
  const currentDay = document.querySelector("#current-day");
  const eightDay = document.querySelector("#eight-day");

  const landing = document.querySelector("#landing");

  // Current Geographic Position;

  let currentPosition = {
    longitude: null,
    latitude: null,
  };

  // Convert Kelvin to Celcius

  const convertCelcius = (temp) => {
    return Math.floor(temp - 273.15);
  };

  // Convert Kelvin to Fahrenheit

  const convertFahrenheit = (temp) => {
    return Math.floor(((temp - 273.15) * 9) / 5 + 32);
  };

  // Generate full name for each day

  const getDay = (day) => {
    let dayOfWeek;
    switch (day) {
      case 0:
        dayOfWeek = "Sunday";
        break;
      case 1:
        dayOfWeek = "Monday";
        break;
      case 2:
        dayOfWeek = "Tuesday";
        break;
      case 3:
        dayOfWeek = "Wednesday";
        break;
      case 4:
        dayOfWeek = "Thursday";
        break;
      case 5:
        dayOfWeek = "Friday";
        break;
      case 6:
        dayOfWeek = "Saturday";
        break;
    }
    return dayOfWeek;
  };

  // Generate full month name

  const getMonth = (month) => {
    let currentMonth;
    switch (month) {
      case 1:
        currentMonth = "January";
        break;
      case 2:
        currentMonth = "February";
        break;
      case 3:
        currentMonth = "March";
        break;
      case 4:
        currentMonth = "April";
        break;
      case 5:
        currentMonth = "May";
        break;
      case 6:
        currentMonth = "June";
        break;
      case 7:
        currentMonth = "July";
        break;
      case 8:
        currentMonth = "August";
        break;
      case 9:
        currentMonth = "September";
        break;
      case 10:
        currentMonth = "October";
        break;
      case 11:
        currentMonth = "November";
        break;
      case 12:
        currentMonth = "December";
        break;
    }
    return currentMonth;
  };

  // Parse Unix string date into human readable elements

  const parseDate = (time) => {
    const milliseconds = time * 1000;
    const date = new Date(milliseconds);
    const dayFullName = getDay(date.getDay());
    const monthFullName = getMonth(date.getMonth());
    const dayOfMonth = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return { dayOfMonth, hours, minutes, dayFullName, monthFullName };
  };

  const renderCurrentData = (data) => {
    const { dayFullName, monthFullName, dayOfMonth } = parseDate(data.dt);
    location.textContent = `${data.name}, ${data.sys.country}`;
    currentWeatherDesc.textContent = data.weather[0].main;
    currentTemp.textContent = `${convertCelcius(
      data.main.temp
    )}C / ${convertFahrenheit(data.main.temp)}F`;

    currentDay.textContent = `${dayFullName}, ${monthFullName} ${dayOfMonth}`;

    currentWeatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  };

  // Render 8 Day forecast elements to DOM

  const renderLongTermData = (data) => {
    data.daily.forEach((day) => {
      const { dayFullName } = parseDate(day.dt);
      const maxTempC = convertCelcius(day.temp.max);
      const maxTempF = convertFahrenheit(day.temp.max);

      const minTempC = convertCelcius(day.temp.min);
      const minTempF = convertFahrenheit(day.temp.min);

      const dayForecast = document.createElement("div");
      dayForecast.classList.add("day");
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

  // API Request, then render current data

  const getcurrentData = () => {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${currentPosition.latitude}&lon=${currentPosition.longitude}&appid=${key}`;

    // const api = "http://localhost:3002/api";

    fetch(api)
      .then((response) => response.json())
      .then((data) => renderCurrentData(data))
      .catch((error) => console.log(error));
  };

  // API Request, then Render 8 Day Data

  const getLongTermData = () => {
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentPosition.latitude}&lon=${currentPosition.longitude}&exclude=current,minutely,hourly&appid=${key}`;

    // const api = "http://localhost:3001/api";

    fetch(api)
      .then((response) => response.json())
      .then((data) => renderLongTermData(data))
      .catch((error) => console.log(error));
  };

  // Check for Geolocation, else display error

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      currentPosition = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      };
      getcurrentData();
      getLongTermData();
    });
  } else {
    landing.innerHTML = `
    <div class="error">
      No location detected. Please enable location services in your browser
    </div>
    `;
  }
};

// fetch weather info on load

window.addEventListener("load", fetchWeather);
