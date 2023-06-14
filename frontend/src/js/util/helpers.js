// Convert Kelvin to Celcius
const convertCelcius = (temp) => Math.floor(temp - 273.15);

// Convert Kelvin to Fahrenheit
export const convertFahrenheit = (temp) =>
  Math.floor(((temp - 273.15) * 9) / 5 + 32);

// Parse Date
export const parseDate = (time) => {
  const milliseconds = time * 1000;
  const date = new Date(milliseconds);
  const dayFullName = getDay(date.getDay());
  const monthFullName = getMonth(date.getMonth());
  const dayOfMonth = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return { dayOfMonth, hours, minutes, dayFullName, monthFullName };
};

// Get day of week
export const getDay = (day) => {
  let dayOfWeek;
  switch (day) {
    case 0:
      dayOfWeek = 'Sun';
      break;
    case 1:
      dayOfWeek = 'Mon';
      break;
    case 2:
      dayOfWeek = 'Tue';
      break;
    case 3:
      dayOfWeek = 'Wed';
      break;
    case 4:
      dayOfWeek = 'Thu';
      break;
    case 5:
      dayOfWeek = 'Fri';
      break;
    case 6:
      dayOfWeek = 'Sat';
      break;
  }
  return dayOfWeek;
};

// Generate month name
export const getMonth = (month) => {
  let currentMonth;
  switch (month) {
    case 0:
      currentMonth = 'Jan';
      break;
    case 1:
      currentMonth = 'Feb';
      break;
    case 2:
      currentMonth = 'Mar';
      break;
    case 3:
      currentMonth = 'Apr';
      break;
    case 4:
      currentMonth = 'May';
      break;
    case 5:
      currentMonth = 'Jun';
      break;
    case 6:
      currentMonth = 'Jul';
      break;
    case 7:
      currentMonth = 'Aug';
      break;
    case 8:
      currentMonth = 'Sep';
      break;
    case 9:
      currentMonth = 'Oct';
      break;
    case 10:
      currentMonth = 'Nov';
      break;
    case 11:
      currentMonth = 'Dec';
      break;
  }
  return currentMonth;
};

export default convertCelcius;
