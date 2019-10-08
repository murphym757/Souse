"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditUserProfileOptionsFont = exports.UserPageOptionsLink = exports.UserPageOptionsLI = exports.UserPageOptionsUL = exports.UserPageOptionsH5Selected = exports.UserPageOptionsH5 = exports.UserPostIcons = exports.InstagramIcon = exports.FacebookIcon = exports.TwitterIcon = exports.SouseUserPageIcon = void 0;

var _Twitter = require("styled-icons/feather/Twitter");

var _Facebook = require("styled-icons/feather/Facebook");

var _Instagram = require("styled-icons/feather/Instagram");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// User Image

/* ---------------------------------------------------- */
var SouseUserPageIcon = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseUserPageIcon",
  componentId: "sc-15hi236-0"
})([".souseUserPageImage{border-radius:50%;height:12vw;width:12vw;overflow:hidden;display:flex;justify-content:center;align-items:center;}.userHomePageImageBorder{padding:0rem;border:0.3rem solid ", ";}"], function (props) {
  return props.theme.secondaryColor;
});
/* ---------------------------------------------------- */
// Bio Section

/* ---------------------------------------------------- */


exports.SouseUserPageIcon = SouseUserPageIcon;
var TwitterIcon = (0, _styledComponents["default"])(_Twitter.Twitter).withConfig({
  displayName: "userProfileStyling__TwitterIcon",
  componentId: "sc-15hi236-1"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.TwitterIcon = TwitterIcon;
var FacebookIcon = (0, _styledComponents["default"])(_Facebook.Facebook).withConfig({
  displayName: "userProfileStyling__FacebookIcon",
  componentId: "sc-15hi236-2"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.FacebookIcon = FacebookIcon;
var InstagramIcon = (0, _styledComponents["default"])(_Instagram.Instagram).withConfig({
  displayName: "userProfileStyling__InstagramIcon",
  componentId: "sc-15hi236-3"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
/* ---------------------------------------------------- */
// User's Posts

/* ---------------------------------------------------- */

exports.InstagramIcon = InstagramIcon;

var UserPostIcons = _styledComponents["default"].img.withConfig({
  displayName: "userProfileStyling__UserPostIcons",
  componentId: "sc-15hi236-4"
})([".souseUserPostsUserHomePage{object-fit:cover;width:15vw;height:15vw;}&:hover{border:1px solid ", ";}"], function (props) {
  return props.theme.secondaryColor;
});
/* ---------------------------------------------------- */
// User's Options

/* ---------------------------------------------------- */


exports.UserPostIcons = UserPostIcons;

var UserPageOptionsH5 = _styledComponents["default"].h5.withConfig({
  displayName: "userProfileStyling__UserPageOptionsH5",
  componentId: "sc-15hi236-5"
})(["color:", ";font-weight:600;"], function (props) {
  return props.theme.secondaryColor;
});

exports.UserPageOptionsH5 = UserPageOptionsH5;

var UserPageOptionsH5Selected = _styledComponents["default"].h5.withConfig({
  displayName: "userProfileStyling__UserPageOptionsH5Selected",
  componentId: "sc-15hi236-6"
})(["color:", ";font-weight:600;"], function (props) {
  return props.theme.white;
});

exports.UserPageOptionsH5Selected = UserPageOptionsH5Selected;

var UserPageOptionsUL = _styledComponents["default"].ul.withConfig({
  displayName: "userProfileStyling__UserPageOptionsUL",
  componentId: "sc-15hi236-7"
})(["padding:0;list-style:none;display:inline-flex;text-align:center;"]);

exports.UserPageOptionsUL = UserPageOptionsUL;

var UserPageOptionsLI = _styledComponents["default"].li.withConfig({
  displayName: "userProfileStyling__UserPageOptionsLI",
  componentId: "sc-15hi236-8"
})(["display:table-cell;position:relative;padding:15px 0;"]);

exports.UserPageOptionsLI = UserPageOptionsLI;

var UserPageOptionsLink = _styledComponents["default"].a.withConfig({
  displayName: "userProfileStyling__UserPageOptionsLink",
  componentId: "sc-15hi236-9"
})(["color:", ";text-transform:uppercase;text-decoration:none;letter-spacing:0.15em;display:inline-block;padding:0.5rem 1rem;position:relative;&:after{background:none repeat scroll 0 0 transparent;bottom:0;content:\"\";display:block;height:2px;left:50%;position:absolute;background:", ";transition:width 0.3s ease 0s,left 0.3s ease 0s;width:0;}&:hover:after{width:100%;left:0;}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.white;
});
/* editUserProfile.js */


exports.UserPageOptionsLink = UserPageOptionsLink;

var EditUserProfileOptionsFont = _styledComponents["default"].h4.withConfig({
  displayName: "userProfileStyling__EditUserProfileOptionsFont",
  componentId: "sc-15hi236-10"
})(["color:", ";font-weight:600;"], function (props) {
  return props.theme.secondaryColor;
});

exports.EditUserProfileOptionsFont = EditUserProfileOptionsFont;