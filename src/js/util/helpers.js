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
      dayOfWeek = 'Sunday';
      break;
    case 1:
      dayOfWeek = 'Monday';
      break;
    case 2:
      dayOfWeek = 'Tuesday';
      break;
    case 3:
      dayOfWeek = 'Wednesday';
      break;
    case 4:
      dayOfWeek = 'Thursday';
      break;
    case 5:
      dayOfWeek = 'Friday';
      break;
    case 6:
      dayOfWeek = 'Saturday';
      break;
  }
  return dayOfWeek;
};

// Generate full month name
export const getMonth = (month) => {
  let currentMonth;
  switch (month) {
    case 0:
      currentMonth = 'January';
      break;
    case 1:
      currentMonth = 'February';
      break;
    case 2:
      currentMonth = 'March';
      break;
    case 3:
      currentMonth = 'April';
      break;
    case 4:
      currentMonth = 'May';
      break;
    case 5:
      currentMonth = 'June';
      break;
    case 6:
      currentMonth = 'July';
      break;
    case 7:
      currentMonth = 'August';
      break;
    case 8:
      currentMonth = 'September';
      break;
    case 9:
      currentMonth = 'October';
      break;
    case 10:
      currentMonth = 'November';
      break;
    case 11:
      currentMonth = 'December';
      break;
  }
  return currentMonth;
};

export default convertCelcius;
