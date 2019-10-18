"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditUserProfileOptionsFont = exports.SouseSearchUserIcon = exports.UserPageOptionsLink = exports.UserPageOptionsLI = exports.UserPageOptionsUL = exports.UserPageOptionsH5Selected = exports.UserPageOptionsH5 = exports.UserPostIcons = exports.UserBio = exports.InstagramIcon = exports.FacebookIcon = exports.TwitterIcon = exports.SouseUserPageIcon = exports.UserDataUserPage = exports.UsernameUserPage = void 0;

var _Twitter = require("styled-icons/feather/Twitter");

var _Facebook = require("styled-icons/feather/Facebook");

var _Instagram = require("styled-icons/feather/Instagram");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mainStyling = require("./mainStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Username and General Info

/* ---------------------------------------------------- */
var UsernameUserPage = _styledComponents["default"].h2.withConfig({
  displayName: "userProfileStyling__UsernameUserPage",
  componentId: "sc-15hi236-0"
})(["color:", ";font-weight:600;"], function (props) {
  return props.theme.secondaryColor;
});

exports.UsernameUserPage = UsernameUserPage;

var UserDataUserPage = _styledComponents["default"].h5.withConfig({
  displayName: "userProfileStyling__UserDataUserPage",
  componentId: "sc-15hi236-1"
})(["color:", ";"], function (props) {
  return props.theme.secondaryColor;
});
/* ---------------------------------------------------- */
// User Image

/* ---------------------------------------------------- */


exports.UserDataUserPage = UserDataUserPage;

var SouseUserPageIcon = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseUserPageIcon",
  componentId: "sc-15hi236-2"
})([".souseUserPageImage{height:15vw;width:15vw;overflow:hidden;display:flex;justify-content:center;align-items:center;}.userHomePageImageBorder{padding:0rem;border:0.3rem solid ", ";}@media ", "{.souseUserPageImage{height:100vw;width:100vw;}}@media ", "{.souseUserPageImage{height:36vw;width:36vw;}}@media ", "{.souseUserPageImage{height:100vw;width:100vw;}}@media ", "{.souseUserPageImage{height:36vw;width:36vw;}}@media ", "{.souseUserPageImage{height:100vw;width:100vw;}}@media ", "{.souseUserPageImage{height:47vw;width:47vw;}}@media ", "{.souseUserPageImage{height:40vw;width:40vw;}}@media ", "{.souseUserPageImage{height:40vw;width:40vw;}}@media ", "{.souseUserPageImage{width:40vw;height:40vw;}}@media ", "{.souseUserPageImage{height:15vw;width:15vw;}}@media ", "{.souseUserPageImage{height:15vw;width:15vw;}}@media ", "{.souseUserPageImage{height:15vw;width:15vw;}}"], function (props) {
  return props.theme.secondaryColor;
}, _mainStyling.souseMediaQueries.mobileS.portrait, _mainStyling.souseMediaQueries.mobileS.landscape, _mainStyling.souseMediaQueries.mobileM.portrait, _mainStyling.souseMediaQueries.mobileM.landscape, _mainStyling.souseMediaQueries.mobileL.portrait, _mainStyling.souseMediaQueries.mobileL.landscape, _mainStyling.souseMediaQueries.tablet.portrait, _mainStyling.souseMediaQueries.tablet.landscape, _mainStyling.souseMediaQueries.laptop.portrait, _mainStyling.souseMediaQueries.laptop.landscape, _mainStyling.souseMediaQueries.laptopL.landscape, _mainStyling.souseMediaQueries.desktop.landscape);
/* ---------------------------------------------------- */
// Bio Section

/* ---------------------------------------------------- */


exports.SouseUserPageIcon = SouseUserPageIcon;
var TwitterIcon = (0, _styledComponents["default"])(_Twitter.Twitter).withConfig({
  displayName: "userProfileStyling__TwitterIcon",
  componentId: "sc-15hi236-3"
})(["&{height:2em;width:2em;stroke:", ";stroke-width:1;fill:", ";}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.secondaryColor;
});
exports.TwitterIcon = TwitterIcon;
var FacebookIcon = (0, _styledComponents["default"])(_Facebook.Facebook).withConfig({
  displayName: "userProfileStyling__FacebookIcon",
  componentId: "sc-15hi236-4"
})(["&{height:2em;width:2em;stroke:", ";stroke-width:1;fill:", ";}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.secondaryColor;
});
exports.FacebookIcon = FacebookIcon;
var InstagramIcon = (0, _styledComponents["default"])(_Instagram.Instagram).withConfig({
  displayName: "userProfileStyling__InstagramIcon",
  componentId: "sc-15hi236-5"
})(["&{height:2em;width:2em;stroke:", ";stroke-width:1;fill:", ";}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.secondaryColor;
});
exports.InstagramIcon = InstagramIcon;

var UserBio = _styledComponents["default"].h5.withConfig({
  displayName: "userProfileStyling__UserBio",
  componentId: "sc-15hi236-6"
})(["&::first-letter{font-size:200%;}"]);
/* ---------------------------------------------------- */
// User's Posts

/* ---------------------------------------------------- */


exports.UserBio = UserBio;

var UserPostIcons = _styledComponents["default"].img.withConfig({
  displayName: "userProfileStyling__UserPostIcons",
  componentId: "sc-15hi236-7"
})([".souseUserPostsUserHomePage{object-fit:cover;width:15vw;height:15vw;}&:hover{border:1px solid ", ";}"], function (props) {
  return props.theme.secondaryColor;
});
/* ---------------------------------------------------- */
// User's Options

/* ---------------------------------------------------- */


exports.UserPostIcons = UserPostIcons;

var UserPageOptionsH5 = _styledComponents["default"].h5.withConfig({
  displayName: "userProfileStyling__UserPageOptionsH5",
  componentId: "sc-15hi236-8"
})(["color:", ";font-weight:600;"], function (props) {
  return props.theme.secondaryColor;
});

exports.UserPageOptionsH5 = UserPageOptionsH5;

var UserPageOptionsH5Selected = _styledComponents["default"].h5.withConfig({
  displayName: "userProfileStyling__UserPageOptionsH5Selected",
  componentId: "sc-15hi236-9"
})(["color:", ";font-weight:600;"], function (props) {
  return props.theme.white;
});

exports.UserPageOptionsH5Selected = UserPageOptionsH5Selected;

var UserPageOptionsUL = _styledComponents["default"].ul.withConfig({
  displayName: "userProfileStyling__UserPageOptionsUL",
  componentId: "sc-15hi236-10"
})(["padding:0;list-style:none;display:inline-flex;text-align:center;"]);

exports.UserPageOptionsUL = UserPageOptionsUL;

var UserPageOptionsLI = _styledComponents["default"].li.withConfig({
  displayName: "userProfileStyling__UserPageOptionsLI",
  componentId: "sc-15hi236-11"
})(["display:table-cell;position:relative;padding:15px 0;"]);

exports.UserPageOptionsLI = UserPageOptionsLI;

var UserPageOptionsLink = _styledComponents["default"].a.withConfig({
  displayName: "userProfileStyling__UserPageOptionsLink",
  componentId: "sc-15hi236-12"
})(["color:", ";text-transform:uppercase;text-decoration:none;letter-spacing:0.15em;display:inline-block;padding:0.5rem 1rem;position:relative;&:after{background:none repeat scroll 0 0 transparent;bottom:0;content:\"\";display:block;height:2px;left:50%;position:absolute;background:", ";transition:width 0.3s ease 0s,left 0.3s ease 0s;width:0;}&:hover:after{width:100%;left:0;}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.white;
});
/* ---------------------------------------------------- */
// Search User Info

/* ---------------------------------------------------- */


exports.UserPageOptionsLink = UserPageOptionsLink;

var SouseSearchUserIcon = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseSearchUserIcon",
  componentId: "sc-15hi236-13"
})([".souseUserSearchImage{border-radius:50%;height:4vw;width:4vw;overflow:hidden;display:flex;justify-content:center;align-items:center;}.userHomeSearchImageBorder{padding:0rem;border:0.1rem solid ", ";}"], function (props) {
  return props.theme.secondaryColor;
});
/* ---------------------------------------------------- */

/* editUserProfile.js */


exports.SouseSearchUserIcon = SouseSearchUserIcon;

var EditUserProfileOptionsFont = _styledComponents["default"].h4.withConfig({
  displayName: "userProfileStyling__EditUserProfileOptionsFont",
  componentId: "sc-15hi236-14"
})(["color:", ";font-weight:600;"], function (props) {
  return props.theme.secondaryColor;
});

exports.EditUserProfileOptionsFont = EditUserProfileOptionsFont;