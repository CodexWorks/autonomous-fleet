export const randomString = (len) => {
  let res = '';
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charsLen = chars.length;
  for (let i = 0; i < len; i++) {
    res += chars.charAt(Math.floor(Math.random() * charsLen));
  }
  return res;
};

export const lowerCharString = (len) => {
  let res = '';
  let chars = 'abcdefghijklmnopqrstuvwxyz';
  let charsLen = chars.length;
  for (let i = 0; i < len; i++) {
    res += chars.charAt(Math.floor(Math.random() * charsLen));
  }
  return res;
};

export const upperCharString = (len) => {
  let res = '';
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let charsLen = chars.length;
  for (let i = 0; i < len; i++) {
    res += chars.charAt(Math.floor(Math.random() * charsLen));
  }
  return res;
};

export const numString = (len) => {
  let res = '';
  let chars = '0123456789';
  let charsLen = chars.length;
  for (let i = 0; i < len; i++) {
    res += chars.charAt(Math.floor(Math.random() * charsLen));
  }
  return res;
};
