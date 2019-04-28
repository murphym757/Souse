"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _errorReducer = _interopRequireDefault(require("./errorReducer"));

var _authReducer = _interopRequireDefault(require("./authReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  errors: _errorReducer.default,
  auth: _authReducer.default
});

exports.default = _default;