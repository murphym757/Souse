"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentCaptionFont = exports.CommentCreatorFont = exports.CommentsUserIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _mediaQueries = require("./mediaQueries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CommentsUserIcon = _styledComponents["default"].img.withConfig({
  displayName: "commentStyling__CommentsUserIcon",
  componentId: "d2ntyw-0"
})(["border-radius:50%;border:0.25em solid ", ";position:relative;height:2.5vw;width:2.5vw;overflow:hidden;display:flex;justify-content:center;align-items:center;@media ", "{height:14vw;width:14vw;}@media ", "{height:7vw;width:7vw;}@media ", "{height:14vw;width:14vw;}@media ", "{height:7vw;width:7vw;}@media ", "{height:12vw;width:12vw;}@media ", "{height:8vw;width:8vw;}@media ", "{height:12vw;width:12vw;}@media ", "{height:8vw;width:8vw;}@media ", "{height:10vw;width:10vw;}@media ", "{height:8vw;width:8vw;}@media ", "{height:8vw;width:8vw;}@media ", "{height:5.5vw;width:5.5vw;}@media ", "{height:4vw;width:4vw;}@media ", "{height:2.5vw;width:2.5vw;}"], function (props) {
  return props.theme.secondaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);

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