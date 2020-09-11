/**
 * Function that returns the date and time at the moment of running.
 * @returns {string} The date and time with format MM-DD-YYYY HH:MM:SS
 */
export const dateTime = () => {
  let now = new Date();
  return `${now.getMonth()}-${now.getDate()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};
