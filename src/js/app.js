// Import CSS

import '../css/styles.css';

// Main Event Listener

window.addEventListener('load', () => {
  // Select App Div
  const app = document.querySelector('.temperature-section');

  // Declare Location Co-ordinates
  let longitude;
  let latitude;

  // OpenWeatherMap.org API Key
  const apiKey = process.env.API_KEY;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;

      const getWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      const getForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      function convertToF(degree) {
        const celsius = Math.floor(degree);
        const farenheit = Math.floor((celsius * (9 / 5)) + 32);
        return farenheit;
      }

      // Set current day weather

      function setWeather(data) {
        // Destructure data
        const { weather, main, name } = data;

        // Query selectors for current day text
        const timezone = document.querySelector('.timezone');
        const temp = document.querySelector('.temperature');
        const dayType = document.querySelector('.day-type');
        const icon = document.querySelector('.icon');

        // Function to convert standard Metric values to Farenheight

        // Set current day text
        timezone.textContent = name;
        temp.textContent = `${Math.floor(main.temp)}C / ${convertToF(main.temp)}F`;
        dayType.textContent = weather[0].main;

        // Determine which weather icon to display
        const dayIcon = weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${dayIcon}@2x.png`;

        // Sets blank canvas element to main weather icon

        function setIcon() {
          const context = icon.getContext('2d');
          const image = new Image();
          image.src = iconUrl;
          image.onload = function setImage() {
            context.drawImage(image, 0, 0);
          };
        }
        setIcon();
      }

      // 5-Day forecast generator

      function fiveDay(data) {
        const { list } = data;
        const date = new Date(list[0].dt_txt);
        const today = new Date();
        today.setDate(date.getDate());

        // Return current day text

        function getToday(inc) {
          today.setDate(date.getDate());
          const futureDay = today.getDay() + inc;

          let day;

          switch (futureDay) {
            case 0:
              day = 'Sunday';
              return day;
            case 1:
              day = 'Monday';
              return day;
            case 2:
              day = 'Tuesday';
              return day;
            case 3:
              day = 'Wednesday';
              return day;
            case 4:
              day = 'Thursday';
              return day;
            case 5:
              day = 'Friday';
              return day;
            case 6:
              day = 'Saturday';
              return day;
            default:
              day = 'Sunday';
              return day;
          }
        }

        // Query Selectors for 5 Day Forecasts

        const dayOneDiv = document.querySelector('.day-one');
        const dayTwoDiv = document.querySelector('.day-two');
        const dayThreeDiv = document.querySelector('.day-three');
        const dayFourDiv = document.querySelector('.day-four');
        const dayFiveDiv = document.querySelector('.day-five');

        // Filter day values from main list

        function dayFilter(inc) {
          const day = new Date();
          day.setDate(date.getDate() + inc);
          const dayFiltered = day.getDate();

          const dayTemps = list.filter((item) => {
            const currentDay = new Date(item.dt_txt);
            const currentDayDate = currentDay.getDate();
            return currentDayDate === dayFiltered;
          });
          return dayTemps;
        }

        // Return hour from list date and convert it to 12-hour format

        function getHour(dateString) {
          const dateSupplied = new Date(dateString);
          const hours = dateSupplied.getHours();
          let hour;

          if (hours > 0 && hours < 12) {
            hour = `${hours} AM`;
          } else if (hours === 12) {
            hour = '12 PM';
          } else if (hours === 0) {
            hour = '12 AM';
          } else {
            hour = `${hours - 12} PM`;
          }
          return hour;
        }

        // Lists forecast dates from

        function entryMap(item) {
          const dayIcon = item.weather[0].icon;
          const celsius = Math.floor(item.main.temp);
          const weather = item.weather[0].main;

          const icon = `
            <img src="http://openweathermap.org/img/wn/${dayIcon}.png" alt="icon" />
          `;

          const details = `
            <span>${getHour(item.dt_txt)}</span>
            <span>${celsius}C / ${convertToF(celsius)}F</span>
          `;

          return `
            <div class='weather-entry'>
              <div class="weather-details">${details}</div>
              <div class="weather-icon">${icon}<span>${weather}</span></div>
            </div>
          `;
        }

        // Function for generating output of day forecasts with 3-hour entries

        function generateDay(forecasts) {
          return `
            <div class="day-header"> ${getToday(forecasts)}</div>
            ${dayFilter(forecasts).map((item) => entryMap(item)).join('')}
          `;
        }

        // Sets 5-day DIVs with content

        dayOneDiv.innerHTML = generateDay(0);
        dayTwoDiv.innerHTML = generateDay(1);
        dayThreeDiv.innerHTML = generateDay(2);
        dayFourDiv.innerHTML = generateDay(3);
        dayFiveDiv.innerHTML = generateDay(4);
      }

      fetch(getWeatherUrl)
        .then((res) => res.json())
        .then((data) => setWeather(data))
        .catch((res) => res.json());

      fetch(getForecastUrl)
        .then((res) => res.json())
        .then((data) => fiveDay(data))
        .catch((res) => res.json());
    });
  } else {
    app.textContent = 'Error: No location found';
  }
});
