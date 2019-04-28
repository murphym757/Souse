"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutUser = exports.setCurrentUser = exports.loginUser = exports.registerUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _types = require("./types");

var _setAuthToken = _interopRequireDefault(require("../setAuthToken"));

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerUser = function registerUser(user, history) {
  return function (dispatch) {
    _axios.default.post('/souseAPI/u/register', user).then(function (res) {
      return history.push('/login');
    }).catch(function (err) {
      dispatch({
        type: _types.GET_ERRORS,
        payload: err.response.data
      });
    });
  };
};

exports.registerUser = registerUser;

var loginUser = function loginUser(user) {
  return function (dispatch) {
    _axios.default.post('/souseAPI/u/login', user).then(function (res) {
      var token = res.data.token;
      localStorage.setItem('jwtToken', token);
      (0, _setAuthToken.default)(token);
      var decoded = (0, _jwtDecode.default)(token);
      dispatch(setCurrentUser(decoded));
    }).catch(function (err) {
      dispatch({
        type: _types.GET_ERRORS,
        payload: err.response.data
      });
    });
  };
};

exports.loginUser = loginUser;

var setCurrentUser = function setCurrentUser(decoded) {
  return {
    type: _types.SET_CURRENT_USER,
    payload: decoded
  };
};

exports.setCurrentUser = setCurrentUser;

var logoutUser = function logoutUser(history) {
  return function (dispatch) {
    localStorage.removeItem('jwtToken');
    (0, _setAuthToken.default)(false);
    dispatch(setCurrentUser({}));
    history.push('/');
  };
};

exports.logoutUser = logoutUser;