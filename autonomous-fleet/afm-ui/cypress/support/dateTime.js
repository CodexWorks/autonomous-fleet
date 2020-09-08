export const dateTime = () => {
  let now = new Date();
  return `${now.getMonth()}-${now.getDate()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};
