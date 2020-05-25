export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const convertToMonthDay = (dateObj) => {
  // date object to string "[M]onth-day"
  const month = monthNames[dateObj.getMonth()];
  const day = dateObj.getDate();
  return `${month}-${day}`;
};
