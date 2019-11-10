"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentCaptionFont = exports.CommentCreatorFont = exports.CommentsUserIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _mainStyling = require("./mainStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CommentsUserIcon = _styledComponents["default"].img.withConfig({
  displayName: "commentStyling__CommentsUserIcon",
  componentId: "d2ntyw-0"
})(["border-radius:50%;height:2.5vw;width:2.5vw;overflow:hidden;display:flex;justify-content:center;align-items:center;@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{height:12vw;width:12vw;}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{height:5.5vw;width:5.5vw;}@media ", "{height:4vw;width:4vw;}@media ", "{height:2.5vw;width:2.5vw;}"], _mainStyling.souseMediaQueries.mobileS.portrait, _mainStyling.souseMediaQueries.mobileS.landscape, _mainStyling.souseMediaQueries.mobileM.portrait, _mainStyling.souseMediaQueries.mobileM.landscape, _mainStyling.souseMediaQueries.mobileL.portrait, _mainStyling.souseMediaQueries.mobileL.landscape, _mainStyling.souseMediaQueries.tablet.portrait, _mainStyling.souseMediaQueries.tablet.landscape, _mainStyling.souseMediaQueries.laptop.portrait, _mainStyling.souseMediaQueries.laptop.landscape, _mainStyling.souseMediaQueries.laptopL.landscape, _mainStyling.souseMediaQueries.desktop.landscape);

exports.CommentsUserIcon = CommentsUserIcon;
var CommentCreatorFont = (0, _styledComponents["default"])(_reactRouterDom.Link).withConfig({
  displayName: "commentStyling__CommentCreatorFont",
  componentId: "d2ntyw-1"
})(["font-size:1.2em;text-decoration:none;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;color:", ";}"], function (props) {
  return props.theme.secondaryColor;
});
exports.CommentCreatorFont = CommentCreatorFont;

var CommentCaptionFont = _styledComponents["default"].h6.withConfig({
  displayName: "commentStyling__CommentCaptionFont",
  componentId: "d2ntyw-2"
})(["font-size:1em;"]);

exports.CommentCaptionFont = CommentCaptionFont;