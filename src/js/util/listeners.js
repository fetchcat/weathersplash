import getCurrentData from './api';
import { renderCurrentWeather } from './dom';

// export const getCurrentLocation = () => {
//   const successCallback = async (position) => {
//     const { latitude, longitude } = position.coords;

//     const weatherData = await getCurrentData(latitude, longitude);

//     if (weatherData !== null) renderCurrentWeather(weatherData);
//   };

//   // If no location found, display error message
//   const failCallback = (error) => {
//     landing.innerHTML = `
//        <div class="error">
//          No location detected. Please enable location services in your browser
//        </div>
//        `;
//     console.error(error);
//   };

//   // Check Position
//   navigator.geolocation.getCurrentPosition(successCallback, failCallback);
// };

// export default fetchWeather;
