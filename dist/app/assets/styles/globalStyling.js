"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    body {\n        display: table;\n        width: 100%;\n        height: auto;\n        background: no-repeat bottom center scroll;\n        background-blend-mode: multiply;\n        background-position: center center;\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        background-size: cover;\n    }    \n    \n    a {\n        color: ", ";\n        text-decoration: none;\n        &:focus {\n            color: ", ";\n        }   \n        &:link {\n            color: ", ";\n        }\n        &:visited {\n            color: ", ";\n        }\n        &:hover {\n            color: ", ";\n        }\n        &:active {\n            color: ", ";\n        }\n    }\n    \n    nav ul a {\n        &:link {\n            color: ", ";\n        }\n        &:visited {\n            color: ", ";\n        }\n        &:hover {\n            color: ", ";\n        }\n        &:active {\n            color: ", ";\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), function (props) {
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
}, function (props) {
  return props.theme.secondaryColor;
});
exports.GlobalStyle = GlobalStyle;