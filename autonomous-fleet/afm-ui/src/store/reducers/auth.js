import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

// initial state of the app is defined inside reducers.

/** The initial vDOM object, a fall-back state value to use during the state initialization.  */
const initialState = {
  token: null,
  error: null,
  loading: false,
};

// ############# REDUCERS ###########

/**
 * Function that sets error as null and loading as true; starts spinner on dispatch.
 * @param {Object} state The current state.
 * @param {any} action The redux action which drives the reduction process.
 * @returns {Object} The resulting state after reduction.
 */
const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

/**
 * Function that sets error as null and loading as false, makes spinner dissapear, attaches token to the new vDOM object.
 * @param {Object} state The current state.
 * @param {any} action The redux action which drives the reduction process.
 * @returns {Object} The resulting state after reduction.
 */
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
  });
};

/**
 * Function that sets loading as false and attaches the error to the new vDOM object on dispatch.
 * @param {Object} state The current state.
 * @param {any} action The redux action which drives the reduction process.
 * @returns {Object} The resulting state after reduction.
 */
const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

/**
 * Function that sets token as null on dispatch.
 * @param {Object} state The current state.
 * @param {any} action The redux action which drives the reduction process.
 * @returns {Object} The resulting state after reduction.
 */
const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
  });
};

/**
 * Reducer function that is responsible for state changes. Reducer takes in all the actions, determines what the type of the action is, looks at what method it needs to execute, depending on the type of action received.
 * @param {Object} state The current state, defaulted to the initial vDOM object.
 * @param {any} action The redux action which drives the reduction process.
 * @returns {Object} The resulting state after reduction.
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
