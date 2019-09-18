"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SouseUserPageIcon = exports.InstagramIcon = exports.FacebookIcon = exports.TwitterIcon = void 0;

var _Twitter = require("styled-icons/feather/Twitter");

var _Facebook = require("styled-icons/feather/Facebook");

var _Instagram = require("styled-icons/feather/Instagram");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TwitterIcon = (0, _styledComponents["default"])(_Twitter.Twitter).withConfig({
  displayName: "userProfileStyling__TwitterIcon",
  componentId: "sc-15hi236-0"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.TwitterIcon = TwitterIcon;
var FacebookIcon = (0, _styledComponents["default"])(_Facebook.Facebook).withConfig({
  displayName: "userProfileStyling__FacebookIcon",
  componentId: "sc-15hi236-1"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.white;
});
exports.FacebookIcon = FacebookIcon;
var InstagramIcon = (0, _styledComponents["default"])(_Instagram.Instagram).withConfig({
  displayName: "userProfileStyling__InstagramIcon",
  componentId: "sc-15hi236-2"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.white;
});
exports.InstagramIcon = InstagramIcon;

var SouseUserPageIcon = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseUserPageIcon",
  componentId: "sc-15hi236-3"
})([".souseUserPageImage{border-radius:50%;height:12vw;width:12vw;overflow:hidden;display:flex;justify-content:center;align-items:center;}.userHomePageImageBorder{padding:0rem;border:0.3rem solid ", ";}"], function (props) {
  return props.theme.secondaryColor;
});

exports.SouseUserPageIcon = SouseUserPageIcon;