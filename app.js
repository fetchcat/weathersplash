// Main Event Listener

window.addEventListener('load', () => {
  // Declare Location Co-ordinates
  let longitude;
  let latitude;

  // OpenWeatherMap.org API Key
  const apiKey = 'f31102df1df2d7b675ab99ade20dccf8';
  const proxy = 'https://cors-anywhere.herokuapp.com/';

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      longitude = position.coords.longitude;
      latitude = position.coords.latitude; 

      const getWeatherUrl = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      const getForecastUrl = `${proxy}api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      const getForcastLocal = './forecast.json';
      const getWeatherLocal = './weather.json';

      function setWeather(data) {
        // Destructure Data
        const { weather, main, name } = data;
        
        // Query Selectors
        const timezone = document.querySelector(".timezone");
        const temp = document.querySelector(".temperature");
        const dayType = document.querySelector(".day-type");
        const icon = document.querySelector(".icon");
        
        // Set Item Text
        timezone.textContent = name;
        temp.textContent = Math.floor(main.temp);
        dayType.textContent = weather[0].description;

        // Determine Weather Icon to display
        const dayIcon = weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${dayIcon}@2x.png`;

        // Set Main Weather Icon

        setIcon();

        function setIcon() {
          let context = icon.getContext('2d');
          image = new Image();
          image.src = iconUrl;
          image.onload = function() {
            context.drawImage(image, 0, 0)
          }
        }
      }

      // 5 Day Forecast

      function fiveDay(data) {
        const { list } = data;
        let date = new Date(list[0].dt_txt);
        let day = new Date();
        day.setDate(date.getDate());

        function getToday(inc) {
          let today = new Date();
          today.setDate(date.getDate());
          let newtoday = today.getDay() + inc;
          
          let day;
  
          switch (newtoday) {
            case 0 :
              return day = "Sunday";
            case 1 :
              return day = "Monday";
            case 2 :
              return day = "Tuesday";
            case 3 :
              return day = "Wednesday";
            case 4 :
              return day = "Thursday";
            case 5 :
              return day = "Friday";
            case 6 :
              return day = "Saturday";
          }
        }

        const dayOneDiv = document.querySelector('.day-one');
        const dayTwoDiv = document.querySelector('.day-two');
        const dayThreeDiv = document.querySelector('.day-three');
        const dayFourDiv = document.querySelector('.day-four');
        const dayFiveDiv = document.querySelector('.day-five');

        function dayFilter(inc) {
          const day = new Date;
          day.setDate(date.getDate() + inc)
          const dayDay = day.getDate();
          
          const dayTemps = list.filter(item => {
            const currentDay = new Date(item.dt_txt);
            const currentDayDay = currentDay.getDate();
            return currentDayDay === dayDay;
          })
          return dayTemps;
        }

        function getHour(date) {
          let dateSupplied = new Date(date);
          let hours = dateSupplied.getHours();
          let hour;

          if (hours > 0 && hours < 12) {
            hour = hours + " AM"
          } else if ( hours === 12) {
            hour = "12 PM"
          } else if ( hours === 0 ) {
            hour = "12 AM"
          }
          else (
            hour = (hours - 12) + " PM"
          )
          return hour;
        }

        getHour();

        function entryMap(item) {
          const dayIcon = item.weather[0].icon;
          const icon = `http://openweathermap.org/img/wn/${dayIcon}.png`;
          return "<div class='weather-entry'>" + getHour(item.dt_txt) + ' ' + Math.floor(item.main.temp) + ' ' + item.weather[0].main + "<img src=" + icon + " />" + "</div>";
        }

        dayOneDiv.innerHTML = "<div>" + getToday(0) + "</div>" + dayFilter(0).map(item => entryMap(item)).join('');
        dayTwoDiv.innerHTML = "<div>" + getToday(1) + "</div>" + dayFilter(1).map(item => entryMap(item)).join('');
        dayThreeDiv.innerHTML = "<div>" + getToday(2) + "</div>" + dayFilter(2).map(item => entryMap(item)).join('');
        dayFourDiv.innerHTML = "<div>" + getToday(3) + "</div>" + dayFilter(3).map(item => entryMap(item)).join('');
        dayFiveDiv.innerHTML = "<div>" + getToday(4) + "</div>" + dayFilter(4).map(item => entryMap(item)).join('');

      }

      fetch(getWeatherLocal)
      .then(res => res.json())
      .then(data => setWeather(data));

      fetch(getForcastLocal)
        .then(res => res.json())
        .then(data => fiveDay(data));

    })
  } else {
    h1.textContent = "No location found"; 
  }
 
})