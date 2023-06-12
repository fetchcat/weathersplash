const getCurrentData = async (latitude, longitude) => {
  const key = process.env.API_KEY;
  // const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&cnt=1&appid=${key}`;

  const api = 'http://localhost:5000/api';

  try {
    const response = await fetch(api);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getLocation = async (city) => {
  const key = '04ea0eda40393d00abdfa297bbbefb1e';

  try {
    const weatherAPI = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    );
    const weatherData = await weatherAPI.json();

    const oneCallAPI = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=hourly,minutely&appid=${key}`
    );
    const oneCallData = await oneCallAPI.json();

    return { weatherData, oneCallData };
  } catch (error) {
    console.error(error);
    return null;
  }
};

//export default getcurrentData;
