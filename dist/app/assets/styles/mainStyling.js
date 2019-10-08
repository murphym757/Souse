"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SouseForm = exports.SouseUploadButton = exports.SouseButton = exports.CreateIconLink = exports.SouseLink = exports.CreateIcon = exports.SouseLoadingIcon3 = exports.SouseLoadingIcon2 = exports.SouseLoadingIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SouseLoadingIcon = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__SouseLoadingIcon",
  componentId: "sc-1816ehk-0"
})(["color:", ";"], function (props) {
  return props.theme.secondaryColor;
});

exports.SouseLoadingIcon = SouseLoadingIcon;

var SouseLoadingIcon2 = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__SouseLoadingIcon2",
  componentId: "sc-1816ehk-1"
})(["color:", ";"], function (props) {
  return props.theme.white;
});

exports.SouseLoadingIcon2 = SouseLoadingIcon2;

var SouseLoadingIcon3 = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__SouseLoadingIcon3",
  componentId: "sc-1816ehk-2"
})(["color:", ";"], function (props) {
  return props.theme.secondaryColor;
});

exports.SouseLoadingIcon3 = SouseLoadingIcon3;

var CreateIcon = _styledComponents["default"].i.withConfig({
  displayName: "mainStyling__CreateIcon",
  componentId: "sc-1816ehk-3"
})(["color:", ";"], function (props) {
  return props.theme.primaryColor;
});

exports.CreateIcon = CreateIcon;

var SouseLink = _styledComponents["default"].a.withConfig({
  displayName: "mainStyling__SouseLink",
  componentId: "sc-1816ehk-4"
})(["color:", ";text-decoration:none;&:focus{color:", ";}&:link{color:", ";}&:visited{color:", ";}&:hover{color:", ";}&:active{color:", ";}"], function (props) {
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
});

exports.SouseLink = SouseLink;

var CreateIconLink = _styledComponents["default"].a.withConfig({
  displayName: "mainStyling__CreateIconLink",
  componentId: "sc-1816ehk-5"
})(["background-color:", " !important;", "{color:", ";}"], function (props) {
  return props.theme.secondaryColor;
}, CreateIcon, function (props) {
  return props.theme.primaryColor;
}); //Souse Button


exports.CreateIconLink = CreateIconLink;

var SouseButton = _styledComponents["default"].button.withConfig({
  displayName: "mainStyling__SouseButton",
  componentId: "sc-1816ehk-6"
})(["background-color:", " !important;&:hover{background-color:", " !important;}.buttonFont{text-transform:uppercase;font-size:0.696em;}"], function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.primaryColorAlt;
}); //Souse Upload Button


exports.SouseButton = SouseButton;

var SouseUploadButton = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__SouseUploadButton",
  componentId: "sc-1816ehk-7"
})(["background-color:", " !important;&:hover{background-color:", " !important;}span{text-transform:uppercase;}.buttonFont{text-transform:uppercase;font-size:0.696em;}"], function (props) {
  return props.theme.secondaryColor;
}, function (props) {
  return props.theme.primaryColorAlt;
}); //Souse Form


exports.SouseUploadButton = SouseUploadButton;

var SouseForm = _styledComponents["default"].form.withConfig({
  displayName: "mainStyling__SouseForm",
  componentId: "sc-1816ehk-8"
})([".input-field input:focus+label{color:", " !important;}.row .input-field input:focus{border-bottom:1px solid ", " !important;box-shadow:0 1px 0 0 ", " !important}input:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default),input[type=date]:not(.browser-default),input[type=datetime]:not(.browser-default),input[type=datetime-local]:not(.browser-default),input[type=tel]:not(.browser-default),input[type=number]:not(.browser-default),input[type=search]:not(.browser-default),textarea.materialize-textarea{&:focus:not([readonly]){border-bottom:1px solid ", ";box-shadow:0 1px 0 0 ", ";}&:focus:not([readonly])+label{color:", ";}}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-animation:autofill 0s forwards;animation:autofill 0s forwards;}@keyframes autofill{100%{background:transparent;color:inherit;}}@-webkit-keyframes autofill{100%{background:transparent;color:inherit;}}"], function (props) {
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

exports.SouseForm = SouseForm;