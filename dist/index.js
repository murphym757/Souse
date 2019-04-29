"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _store = _interopRequireDefault(require("./server/store"));

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _setAuthToken = _interopRequireDefault(require("./server/setAuthToken"));

var _authentication = require("./server/actions/authentication");

var _main = _interopRequireDefault(require("./app/components/main.js"));

require("materialize-css/dist/css/materialize.min.css");

var _bootstrapMin = _interopRequireDefault(require("../node_modules/bootstrap/dist/css/bootstrap.min.css"));

var _bootstrapGridMin = _interopRequireDefault(require("../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"));

var _bootstrapMin2 = _interopRequireDefault(require("../node_modules/bootstrap/dist/js/bootstrap.min.js"));

require("./app/assets/styles/styles.scss");

var _fonts = _interopRequireDefault(require("./app/assets/styles/fonts.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (localStorage.jwtToken) {
  (0, _setAuthToken["default"])(localStorage.jwtToken);
  var decoded = (0, _jwtDecode["default"])(localStorage.jwtToken);

  _store["default"].dispatch((0, _authentication.setCurrentUser)(decoded));

  var currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    _store["default"].dispatch((0, _authentication.logoutUser)());

    window.location.href = '/login';
  }
}

(0, _reactDom.render)(_react["default"].createElement(_reactRedux.Provider, {
  store: _store["default"]
}, _react["default"].createElement(_main["default"], null)), document.getElementById("app"));