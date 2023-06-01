import getcurrentData from './api';
import renderCurrentData from './dom';

const fetchWeather = () => {
  // DOM Element
  const landing = document.querySelector('#landing');

  // If location found, pass info to function and render on screen
  const successCallback = async (position) => {
    const { latitude, longitude } = position.coords;

    const weatherData = await getcurrentData(latitude, longitude);

    if (weatherData !== null) {
      renderCurrentData(weatherData);
    } else {
      landing.innerHTML = `
       <div class="error">
        Failed to get weather data. Please try again.
       </div>
       `;
    }
  };

  // If no location found, display error message
  const failCallback = (error) => {
    landing.innerHTML = `
       <div class="error">
         No location detected. Please enable location services in your browser
       </div>
       `;
    console.error(error);
  };

  // Check Position
  navigator.geolocation.getCurrentPosition(successCallback, failCallback);
};

export default fetchWeather;
