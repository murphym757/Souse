"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoonIcon = exports.SunIcon = exports.SouseImageSwitchComboShow = exports.SouseImageSwitchComboHide = exports.SouseVapeChip = exports.SouseViceChip = exports.SouseFPChip = exports.SouseIMChip = exports.SouseDefaultChip = exports.SouseStyleSelectorIcon = exports.InvertColorsIcon = exports.DeleteIcon = exports.EditUserProfileOptionsFont = exports.SouseSearchUserIcon = exports.UserPageOptionsLink = exports.UserPageOptionsLI = exports.UserPageOptionsUL = exports.UserPageOptionsH5Selected = exports.UserPageOptionsH5 = exports.UserPostIcons = exports.UserBio = exports.InstagramIcon = exports.FacebookIcon = exports.TwitterIcon = exports.SouseUserPageIcon = exports.UserDataUserPage = exports.UsernameUserPage = void 0;

var _Twitter = require("styled-icons/feather/Twitter");

var _Facebook = require("styled-icons/feather/Facebook");

var _Instagram = require("styled-icons/feather/Instagram");

var _Delete = require("styled-icons/feather/Delete");

var _InvertColors = require("styled-icons/material/InvertColors");

var _Sun = require("styled-icons/fa-regular/Sun");

var _Moon = require("styled-icons/fa-regular/Moon");

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
})([".souseUserPageImage{height:15vw;width:15vw;overflow:hidden;display:flex;justify-content:center;align-items:center;}@media ", "{.souseUserPageImage{height:100vw;width:100vw;}}@media ", "{.souseUserPageImage{height:36vw;width:36vw;}}@media ", "{.souseUserPageImage{height:100vw;width:100vw;}}@media ", "{.souseUserPageImage{height:36vw;width:36vw;}}@media ", "{.souseUserPageImage{height:100vw;width:100vw;}}@media ", "{.souseUserPageImage{height:47vw;width:47vw;}}@media ", "{.souseUserPageImage{height:40vw;width:40vw;}}@media ", "{.souseUserPageImage{height:40vw;width:40vw;}}@media ", "{.souseUserPageImage{width:40vw;height:40vw;}}@media ", "{.souseUserPageImage{height:15vw;width:15vw;}}@media ", "{.souseUserPageImage{height:15vw;width:15vw;}}@media ", "{.souseUserPageImage{height:15vw;width:15vw;}}"], _mainStyling.souseMediaQueries.mobileS.portrait, _mainStyling.souseMediaQueries.mobileS.landscape, _mainStyling.souseMediaQueries.mobileM.portrait, _mainStyling.souseMediaQueries.mobileM.landscape, _mainStyling.souseMediaQueries.mobileL.portrait, _mainStyling.souseMediaQueries.mobileL.landscape, _mainStyling.souseMediaQueries.tablet.portrait, _mainStyling.souseMediaQueries.tablet.landscape, _mainStyling.souseMediaQueries.laptop.portrait, _mainStyling.souseMediaQueries.laptop.landscape, _mainStyling.souseMediaQueries.laptopL.landscape, _mainStyling.souseMediaQueries.desktop.landscape);
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
var DeleteIcon = (0, _styledComponents["default"])(_Delete.Delete).withConfig({
  displayName: "userProfileStyling__DeleteIcon",
  componentId: "sc-15hi236-15"
})(["&{height:6em;width:6em;stroke:", ";stroke-width:1;fill:", ";}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.secondaryColor;
});
exports.DeleteIcon = DeleteIcon;
var InvertColorsIcon = (0, _styledComponents["default"])(_InvertColors.InvertColors).withConfig({
  displayName: "userProfileStyling__InvertColorsIcon",
  componentId: "sc-15hi236-16"
})(["&{height:6em;width:6em;stroke:", ";stroke-width:1;fill:", ";}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.secondaryColor;
});
exports.InvertColorsIcon = InvertColorsIcon;

var SouseStyleSelectorIcon = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseStyleSelectorIcon",
  componentId: "sc-15hi236-17"
})([".souseStyleImage{height:12vw;width:12vw;overflow:hidden;display:flex;justify-content:center;align-items:center;}.souseStyleImageRise{-webkit-animation:slide-top 0.5s cubic-bezier(0.250,0.460,0.450,0.940) both;animation:slide-top 0.5s cubic-bezier(0.250,0.460,0.450,0.940) both;@-webkit-keyframes slide-top{0%{-webkit-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px);}}@keyframes slide-top{0%{-webkit-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px);}}}.souseStyleImageClose{-webkit-animation:slide-top 0.5s cubic-bezier(0.250,0.460,0.450,0.940) reverse both;animation:slide-top 0.5s cubic-bezier(0.250,0.460,0.450,0.940) reverse both;@-webkit-keyframes slide-top{0%{-webkit-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px);}}@keyframes slide-top{0%{-webkit-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px);}}}@media ", "{.souseStyleImage{height:20vw;width:20vw;}}@media ", "{.souseStyleImage{height:20vw;width:20vw;}}@media ", "{.souseStyleImage{height:20vw;width:20vw;}}@media ", "{.souseStyleImage{height:20vw;width:20vw;}}@media ", "{.souseStyleImage{height:20vw;width:20vw;}}@media ", "{.souseStyleImage{height:20vw;width:20vw;}}@media ", "{.souseStyleImage{height:20vw;width:20vw;}}@media ", "{.souseStyleImage{height:9vw;width:9vw;}}@media ", "{.souseStyleImage{width:13vw;height:13vw;}}@media ", "{.souseStyleImage{height:9vw;width:9vw;}}@media ", "{.souseStyleImage{height:9vw;width:9vw;}}@media ", "{.souseStyleImage{height:9vw;width:9vw;}}"], _mainStyling.souseMediaQueries.mobileS.portrait, _mainStyling.souseMediaQueries.mobileS.landscape, _mainStyling.souseMediaQueries.mobileM.portrait, _mainStyling.souseMediaQueries.mobileM.landscape, _mainStyling.souseMediaQueries.mobileL.portrait, _mainStyling.souseMediaQueries.mobileL.landscape, _mainStyling.souseMediaQueries.tablet.portrait, _mainStyling.souseMediaQueries.tablet.landscape, _mainStyling.souseMediaQueries.laptop.portrait, _mainStyling.souseMediaQueries.laptop.landscape, _mainStyling.souseMediaQueries.laptopL.landscape, _mainStyling.souseMediaQueries.desktop.landscape);
/* ----------------------------------------- */
// Theme Selector Chips

/* ---------------------------------------------------- */


exports.SouseStyleSelectorIcon = SouseStyleSelectorIcon;

var SouseDefaultChip = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseDefaultChip",
  componentId: "sc-15hi236-18"
})(["background:rgb(228,209,209) !important;border:rgb(196,87,88) solid;.chipFont{color:rgb(196,87,88) !important;font-weight:600;}"]);

exports.SouseDefaultChip = SouseDefaultChip;

var SouseIMChip = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseIMChip",
  componentId: "sc-15hi236-19"
})(["background:rgb(247,181,205) !important;border:rgb(255,255,255) solid;.chipFont{color:rgb(35,31,32) !important;font-weight:600;}"]);

exports.SouseIMChip = SouseIMChip;

var SouseFPChip = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseFPChip",
  componentId: "sc-15hi236-20"
})(["background:rgb(44,65,96) !important;border:rgb(255,255,255) solid;.chipFont{color:rgb(188,153,86) !important;font-weight:600;}"]);

exports.SouseFPChip = SouseFPChip;

var SouseViceChip = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseViceChip",
  componentId: "sc-15hi236-21"
})(["background:rgb(255,255,255) !important;border:rgb(65,182,230) solid;.chipFont{color:rgb(100,195,167) !important;font-weight:600;}"]);

exports.SouseViceChip = SouseViceChip;

var SouseVapeChip = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseVapeChip",
  componentId: "sc-15hi236-22"
})(["background:rgb(226,226,226) !important;border:rgb(255,181,198) solid;.chipFont{color:rgb(255,181,198) !important;font-weight:600;}"]);
/* ---------------------------------------------------- */


exports.SouseVapeChip = SouseVapeChip;

var SouseImageSwitchComboHide = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseImageSwitchComboHide",
  componentId: "sc-15hi236-23"
})(["position:absolute;top:5.5vw;z-index:-1;"]);

exports.SouseImageSwitchComboHide = SouseImageSwitchComboHide;

var SouseImageSwitchComboShow = _styledComponents["default"].div.withConfig({
  displayName: "userProfileStyling__SouseImageSwitchComboShow",
  componentId: "sc-15hi236-24"
})(["position:absolute;top:5.5vw;z-index:2;.switchFadeIn{-webkit-animation:fade-in 3.2s cubic-bezier(0.390,0.575,0.565,1.000) 4.5s both;animation:fade-in 3.2s cubic-bezier(0.390,0.575,0.565,1.000) 4.5s both;@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}}"]);

exports.SouseImageSwitchComboShow = SouseImageSwitchComboShow;
var SunIcon = (0, _styledComponents["default"])(_Sun.Sun).withConfig({
  displayName: "userProfileStyling__SunIcon",
  componentId: "sc-15hi236-25"
})(["&{height:2em;width:2em;stroke:", ";stroke-width:1;fill:", ";}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.secondaryColor;
});
exports.SunIcon = SunIcon;
var MoonIcon = (0, _styledComponents["default"])(_Moon.Moon).withConfig({
  displayName: "userProfileStyling__MoonIcon",
  componentId: "sc-15hi236-26"
})(["&{height:2em;width:2em;stroke:", ";stroke-width:1;fill:", ";}"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.secondaryColor;
});
exports.MoonIcon = MoonIcon;