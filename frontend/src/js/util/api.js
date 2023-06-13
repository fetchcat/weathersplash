export const getLocation = async (city) => {
  try {
    const weather = await fetch(`http://localhost:5000/api?city=${city}`);
    const weatherData = await weather.json();

    return weatherData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getByGeolocation = async (latitude, longitude) => {
  try {
    const weather = await fetch(
      `http://localhost:5000/api/geo?lat=${latitude}&lon=${longitude}`
    );

    const weatherData = await weather.json();
    return weatherData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getLocation;
