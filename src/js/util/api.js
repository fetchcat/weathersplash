const getcurrentData = async (latitude, longitude) => {
  const key = process.env.API_KEY;
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&cnt=1&appid=${key}`;

  try {
    const response = await fetch(api);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getcurrentData;
