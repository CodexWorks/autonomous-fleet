/**
 * Generate a string of characters of variable length and type.
 * @param {number} len The desired lenght of the string.
 * @param {string} type For number: 0-9; for lowercase: a-z; for uppercase: A-Z. If nothing is specified, it uses [a-zA-Z0-9].
 * @yields {string} of random characters of desired length and type.
 */
export const stringGenerator = (len, type) => {
  let res = '';
  let chars = '';
  switch (type) {
    case '0-9':
      chars = '0123456789';
      break;
    case 'A-Z':
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      break;
    case 'a-z':
      chars = 'abcdefghijklmnopqrstuvwxyz';
      break;
    default:
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      break;
  }
  let charsLen = chars.length;
  for (let i = 0; i < len; i++) {
    res += chars.charAt(Math.floor(Math.random() * charsLen));
  }
  return res;
};
