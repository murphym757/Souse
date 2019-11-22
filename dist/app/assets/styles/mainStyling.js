"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SouseForm = exports.SouseButton = exports.ErrorFont = exports.ConnectionOptionsLink = exports.CreateIconLink = exports.LinkFontH6 = exports.SouseLink = exports.CreateIcon = exports.SouseLoadingIcon3 = exports.SouseLoadingIcon2 = exports.SouseLoadingIcon = exports.SouseStyledLink = exports.SouseCenterContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _mediaQueries = require("./mediaQueries");

var _postsStyling = require("./postsStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SouseCenterContainer = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__SouseCenterContainer",
  componentId: "sc-1816ehk-0"
})(["-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;margin-right:auto;margin-left:auto;margin-top:auto;margin-bottom:auto;padding:0px !important;"]);

exports.SouseCenterContainer = SouseCenterContainer;
var SouseStyledLink = (0, _styledComponents["default"])(_reactRouterDom.Link).withConfig({
  displayName: "mainStyling__SouseStyledLink",
  componentId: "sc-1816ehk-1"
})(["text-decoration:none;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;}"]);
exports.SouseStyledLink = SouseStyledLink;

var SouseLoadingIcon = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__SouseLoadingIcon",
  componentId: "sc-1816ehk-2"
})(["color:", ";"], function (props) {
  return props.theme.secondaryColor;
});

exports.SouseLoadingIcon = SouseLoadingIcon;

var SouseLoadingIcon2 = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__SouseLoadingIcon2",
  componentId: "sc-1816ehk-3"
})(["color:", ";"], function (props) {
  return props.theme.white;
});

exports.SouseLoadingIcon2 = SouseLoadingIcon2;

var SouseLoadingIcon3 = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__SouseLoadingIcon3",
  componentId: "sc-1816ehk-4"
})(["color:", ";"], function (props) {
  return props.theme.secondaryColor;
});

exports.SouseLoadingIcon3 = SouseLoadingIcon3;

var CreateIcon = _styledComponents["default"].i.withConfig({
  displayName: "mainStyling__CreateIcon",
  componentId: "sc-1816ehk-5"
})(["color:", ";"], function (props) {
  return props.theme.primaryColor;
});

exports.CreateIcon = CreateIcon;

var SouseLink = _styledComponents["default"].a.withConfig({
  displayName: "mainStyling__SouseLink",
  componentId: "sc-1816ehk-6"
})(["color:", ";text-decoration:none;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;color:", ";}"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
});

exports.SouseLink = SouseLink;

var LinkFontH6 = _styledComponents["default"].h6.withConfig({
  displayName: "mainStyling__LinkFontH6",
  componentId: "sc-1816ehk-7"
})(["color:", ";text-decoration:none;&:focus{color:", ";}&:link{color:", ";}&:visited{color:", ";}&:hover{color:", ";}&:active{color:", ";}"], function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
});

exports.LinkFontH6 = LinkFontH6;

var CreateIconLink = _styledComponents["default"].a.withConfig({
  displayName: "mainStyling__CreateIconLink",
  componentId: "sc-1816ehk-8"
})(["background-color:", " !important;", "{color:", ";}"], function (props) {
  return props.theme.secondaryColor;
}, CreateIcon, function (props) {
  return props.theme.primaryColor;
});

exports.CreateIconLink = CreateIconLink;

var ConnectionOptionsLink = _styledComponents["default"].h6.withConfig({
  displayName: "mainStyling__ConnectionOptionsLink",
  componentId: "sc-1816ehk-9"
})(["font-weight:600;cursor:pointer;color:", ";text-decoration:none;&:focus{color:", ";}&:link{color:", ";}&:visited{color:", ";}&:hover{color:", ";}&:active{color:", ";}"], function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
});

exports.ConnectionOptionsLink = ConnectionOptionsLink;

var ErrorFont = _styledComponents["default"].h6.withConfig({
  displayName: "mainStyling__ErrorFont",
  componentId: "sc-1816ehk-10"
})(["color:", ";"], function (props) {
  return props.theme.white;
}); //Souse Button

/* ---------------------------------------------------- */


exports.ErrorFont = ErrorFont;

var SouseButton = _styledComponents["default"].button.withConfig({
  displayName: "mainStyling__SouseButton",
  componentId: "sc-1816ehk-11"
})(["background-color:", " !important;&:hover{background-color:", " !important;}.buttonFont{text-transform:uppercase;font-size:0.696em;color:", " !important;}"], function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.primaryColorAlt;
}, function (props) {
  return props.theme.primaryColor;
});
/* ---------------------------------------------------- */
//Souse Form

/* ---------------------------------------------------- */


exports.SouseButton = SouseButton;

var SouseForm = _styledComponents["default"].form.withConfig({
  displayName: "mainStyling__SouseForm",
  componentId: "sc-1816ehk-12"
})([".input-field>label{color:", " !important;}.input-field input:focus+label{color:", " !important;}.form-control{color:", " !important;}.materialize-textarea{background-color:", " !important;}.row .input-field input:focus{border-bottom:1px solid ", " !important;box-shadow:0 1px 0 0 ", " !important;color:", " !important;}input:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default),input[type=date]:not(.browser-default),input[type=datetime]:not(.browser-default),input[type=datetime-local]:not(.browser-default),input[type=tel]:not(.browser-default),input[type=number]:not(.browser-default),input[type=search]:not(.browser-default),textarea.materialize-textarea{border-bottom:1px solid ", ";&:focus:not([readonly]){border-bottom:1px solid ", ";box-shadow:0 1px 0 0 ", ";color:", ";}&:focus:not([readonly])+label{color:", ";}}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-animation:autofill 0s forwards;animation:autofill 0s forwards;}@keyframes autofill{100%{background:transparent;color:inherit;}}@-webkit-keyframes autofill{100%{background:transparent;color:inherit;}}"], function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.secondaryColor;
});
/* ---------------------------------------------------- */


exports.SouseForm = SouseForm;