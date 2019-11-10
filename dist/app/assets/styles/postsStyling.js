"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CaptionPreScrollableLoggedIn = exports.CaptionPreScrollable = exports.SouseDiv = exports.PostLocation = exports.PostCreatorName = exports.CommentsLinkFont = exports.SouseLabel = exports.PostPageIcon = exports.PostPageImage = exports.PreScrollable = exports.EditIcon = exports.CloseIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Close = require("styled-icons/material/Close");

var _Edit = require("styled-icons/feather/Edit");

var _mainStyling = require("./mainStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CloseIcon = (0, _styledComponents["default"])(_Close.Close).withConfig({
  displayName: "postsStyling__CloseIcon",
  componentId: "d9cwgo-0"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.CloseIcon = CloseIcon;
var EditIcon = (0, _styledComponents["default"])(_Edit.Edit).withConfig({
  displayName: "postsStyling__EditIcon",
  componentId: "d9cwgo-1"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.EditIcon = EditIcon;

var PreScrollable = _styledComponents["default"].div.withConfig({
  displayName: "postsStyling__PreScrollable",
  componentId: "d9cwgo-2"
})(["max-height:31.25em;overflow-y:auto;overflow-x:hidden !important;"]); // Post Image

/* ---------------------------------------------------- */


exports.PreScrollable = PreScrollable;

var PostPageImage = _styledComponents["default"].img.withConfig({
  displayName: "postsStyling__PostPageImage",
  componentId: "d9cwgo-3"
})(["object-fit:cover;width:28vw;height:28vw;@media ", "{height:100vw;width:100vw;}@media ", "{height:34vw;width:34vw;}@media ", "{height:100vw;width:100vw;}@media ", "{height:30vw;width:30vw;}@media ", "{height:100vw;width:100vw;}@media ", "{height:34vw;width:34vw;}@media ", "{height:100vw;width:100vw;}@media ", "{height:30vw;width:30vw;}@media ", "{width:100vw;height:100vw;}@media ", "{height:40vw;width:40vw;}@media ", "{height:26vw;width:26vw;}@media ", "{height:21vw;width:21vw;}"], _mainStyling.souseMediaQueries.mobileS.portrait, _mainStyling.souseMediaQueries.mobileS.landscape, _mainStyling.souseMediaQueries.mobileM.portrait, _mainStyling.souseMediaQueries.mobileM.landscape, _mainStyling.souseMediaQueries.mobileL.portrait, _mainStyling.souseMediaQueries.mobileL.landscape, _mainStyling.souseMediaQueries.tablet.portrait, _mainStyling.souseMediaQueries.tablet.landscape, _mainStyling.souseMediaQueries.laptop.portrait, _mainStyling.souseMediaQueries.laptop.landscape, _mainStyling.souseMediaQueries.laptopL.landscape, _mainStyling.souseMediaQueries.desktop.landscape);
/* ---------------------------------------------------- */
// User Image (Post Page)

/* ---------------------------------------------------- */


exports.PostPageImage = PostPageImage;

var PostPageIcon = _styledComponents["default"].img.withConfig({
  displayName: "postsStyling__PostPageIcon",
  componentId: "d9cwgo-4"
})(["border-radius:50%;width:3vw;height:3vw;overflow:hidden;display:flex;justify-content:center;align-items:center;@media ", "{height:16vw;width:16vw;}@media ", "{width:8vw;height:8vw;", "{max-height:6.875em;}}@media ", "{height:16vw;width:16vw;}@media ", "{height:8vw;width:8vw;", "{max-height:9.375em;}}@media ", "{height:16vw;width:16vw;", "{max-height:14.0625em;}}@media ", "{height:8vw;width:8vw;", "{max-height:9.375em;}}@media ", "{width:16vw;height:16vw;}@media ", "{height:8vw;width:8vw;}@media ", "{width:7vw;height:7vw;}@media ", "{height:6vw;width:6vw;}@media ", "{height:4vw;width:4vw;}@media ", "{height:3vw;width:3vw;}"], _mainStyling.souseMediaQueries.mobileS.portrait, _mainStyling.souseMediaQueries.mobileS.landscape, PreScrollable, _mainStyling.souseMediaQueries.mobileM.portrait, _mainStyling.souseMediaQueries.mobileM.landscape, PreScrollable, _mainStyling.souseMediaQueries.mobileL.portrait, PreScrollable, _mainStyling.souseMediaQueries.mobileL.landscape, PreScrollable, _mainStyling.souseMediaQueries.tablet.portrait, _mainStyling.souseMediaQueries.tablet.landscape, _mainStyling.souseMediaQueries.laptop.portrait, _mainStyling.souseMediaQueries.laptop.landscape, _mainStyling.souseMediaQueries.laptopL.landscape, _mainStyling.souseMediaQueries.desktop.landscape);
/* ---------------------------------------------------- */
// Edit Post

/* ---------------------------------------------------- */


exports.PostPageIcon = PostPageIcon;

var SouseLabel = _styledComponents["default"].label.withConfig({
  displayName: "postsStyling__SouseLabel",
  componentId: "d9cwgo-5"
})(["color:", ";font-weight:600;"], function (props) {
  return props.theme.secondaryColor;
});
/* ---------------------------------------------------- */


exports.SouseLabel = SouseLabel;

var CommentsLinkFont = _styledComponents["default"].h6.withConfig({
  displayName: "postsStyling__CommentsLinkFont",
  componentId: "d9cwgo-6"
})(["font-weight:800;cursor:pointer;"]);

exports.CommentsLinkFont = CommentsLinkFont;

var PostCreatorName = _styledComponents["default"].h5.withConfig({
  displayName: "postsStyling__PostCreatorName",
  componentId: "d9cwgo-7"
})(["font-weight:800;"]);

exports.PostCreatorName = PostCreatorName;

var PostLocation = _styledComponents["default"].h6.withConfig({
  displayName: "postsStyling__PostLocation",
  componentId: "d9cwgo-8"
})(["font-weight:300;font-size:1em;"]);

exports.PostLocation = PostLocation;

var SouseDiv = _styledComponents["default"].div.withConfig({
  displayName: "postsStyling__SouseDiv",
  componentId: "d9cwgo-9"
})(["@media ", "{width:100%;}@media ", "{width:50%;}@media ", "{width:100%;}@media ", "{width:50%;}@media ", "{width:100%;}@media ", "{width:50%;}@media ", "{width:100%;}@media ", "{width:50%;}@media ", "{width:100%;}@media ", "{width:50%;}@media ", "{width:50%;}@media ", "{width:50%;}"], _mainStyling.souseMediaQueries.mobileS.portrait, _mainStyling.souseMediaQueries.mobileS.landscape, _mainStyling.souseMediaQueries.mobileM.portrait, _mainStyling.souseMediaQueries.mobileM.landscape, _mainStyling.souseMediaQueries.mobileL.portrait, _mainStyling.souseMediaQueries.mobileL.landscape, _mainStyling.souseMediaQueries.tablet.portrait, _mainStyling.souseMediaQueries.tablet.landscape, _mainStyling.souseMediaQueries.laptop.portrait, _mainStyling.souseMediaQueries.laptop.landscape, _mainStyling.souseMediaQueries.laptopL.landscape, _mainStyling.souseMediaQueries.desktop.landscape);

exports.SouseDiv = SouseDiv;

var CaptionPreScrollable = _styledComponents["default"].div.withConfig({
  displayName: "postsStyling__CaptionPreScrollable",
  componentId: "d9cwgo-10"
})(["max-height:31.25em;overflow-y:auto;overflow-x:hidden !important;@media ", "{}@media ", "{max-height:12vw;}@media ", "{}@media ", "{max-height:11vw;}@media ", "{max-height:51vw;width:100%;}@media ", "{max-height:12vw;}@media ", "{}@media ", "{max-height:12vw;}"], _mainStyling.souseMediaQueries.mobileS.portrait, _mainStyling.souseMediaQueries.mobileS.landscape, _mainStyling.souseMediaQueries.mobileM.portrait, _mainStyling.souseMediaQueries.mobileM.landscape, _mainStyling.souseMediaQueries.mobileL.portrait, _mainStyling.souseMediaQueries.mobileL.landscape, _mainStyling.souseMediaQueries.tablet.portrait, _mainStyling.souseMediaQueries.tablet.landscape);

exports.CaptionPreScrollable = CaptionPreScrollable;

var CaptionPreScrollableLoggedIn = _styledComponents["default"].div.withConfig({
  displayName: "postsStyling__CaptionPreScrollableLoggedIn",
  componentId: "d9cwgo-11"
})(["max-height:31.25em;overflow-y:auto;overflow-x:hidden !important;@media ", "{}@media ", "{max-height:6.875em;}@media ", "{}@media ", "{max-height:8.375em;}@media ", "{max-height:3em;width:100%;}@media ", "{max-height:3.5em}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}"], _mainStyling.souseMediaQueries.mobileS.portrait, _mainStyling.souseMediaQueries.mobileS.landscape, _mainStyling.souseMediaQueries.mobileM.portrait, _mainStyling.souseMediaQueries.mobileM.landscape, _mainStyling.souseMediaQueries.mobileL.portrait, _mainStyling.souseMediaQueries.mobileL.landscape, _mainStyling.souseMediaQueries.tablet.portrait, _mainStyling.souseMediaQueries.tablet.landscape, _mainStyling.souseMediaQueries.laptop.portrait, _mainStyling.souseMediaQueries.laptop.landscape, _mainStyling.souseMediaQueries.laptopL.landscape, _mainStyling.souseMediaQueries.desktop.landscape);

exports.CaptionPreScrollableLoggedIn = CaptionPreScrollableLoggedIn;