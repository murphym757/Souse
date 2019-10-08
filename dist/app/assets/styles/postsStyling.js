"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Close = require("styled-icons/material/Close");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CloseIcon = (0, _styledComponents["default"])(_Close.Close).withConfig({
  displayName: "postsStyling__CloseIcon",
  componentId: "d9cwgo-0"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.CloseIcon = CloseIcon;