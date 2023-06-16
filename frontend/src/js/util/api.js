export const getLocation = async (city) => {
  try {
    const weather = await fetch(`/api?city=${city}`);
    const weatherData = await weather.json();
    return weatherData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getByGeolocation = async (latitude, longitude) => {
  try {
    const weather = await fetch(`/api/geo?lat=${latitude}&lon=${longitude}`);
    const weatherData = await weather.json();
    return weatherData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getLocation;
