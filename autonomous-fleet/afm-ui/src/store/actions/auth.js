import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

/**
 * Function that checks the authentication and logs the user out after a given amount of seconds
 * @param {number} expirationTime The number of seconds the logout will occur after checking the authentication
 * @returns {Function}
 */
export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000); //multiply miliseconds by 1000
  };
};

export const authLogin = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post('http://127.0.0.1:8000/rest-auth/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // 3600 seconds * 1000 = 1 hour
        localStorage.setItem('token', token); // sets token in browser local memory
        localStorage.setItem('expirationDate', expirationDate); // sets expiration date in browser local memory
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600)); // 1 hour
      });
  };
};

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
