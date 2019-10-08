"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SouseNav = exports.SouseSideNav = exports.LogoutUserIcon = exports.LoggedInUserIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _User = require("styled-icons/feather/User");

var _LogOut = require("styled-icons/feather/LogOut");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoggedInUserIcon = (0, _styledComponents["default"])(_User.User).withConfig({
  displayName: "navbarStyling__LoggedInUserIcon",
  componentId: "sc-7lb5x-0"
})(["color:", ";height:4em;width:2em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.LoggedInUserIcon = LoggedInUserIcon;
var LogoutUserIcon = (0, _styledComponents["default"])(_LogOut.LogOut).withConfig({
  displayName: "navbarStyling__LogoutUserIcon",
  componentId: "sc-7lb5x-1"
})(["color:", ";height:4em;width:2em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.LogoutUserIcon = LogoutUserIcon;

var SouseSideNav = _styledComponents["default"].ul.withConfig({
  displayName: "navbarStyling__SouseSideNav",
  componentId: "sc-7lb5x-2"
})(["background-color:", ";color:", ";& li > a{color:$secondaryColor;}"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
});

exports.SouseSideNav = SouseSideNav;

var SouseNav = _styledComponents["default"].nav.withConfig({
  displayName: "navbarStyling__SouseNav",
  componentId: "sc-7lb5x-3"
})(["background-color:", ";color:", ";"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
});

exports.SouseNav = SouseNav;