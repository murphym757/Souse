"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CaptionPreScrollableLoggedIn = exports.CaptionPreScrollable = exports.SouseDiv = exports.PostLocation = exports.PostCreatorName = exports.CommentsLinkFont = exports.SouseLabel = exports.PostPageIcon = exports.PostPageImage = exports.PreScrollable = exports.KeyboardBackspaceIcon = exports.SearchIcon = exports.PencilIcon = exports.EditIcon = exports.CloseIcon = exports.SousePostMain = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Close = require("styled-icons/material/Close");

var _Edit = require("styled-icons/feather/Edit");

var _Pencil = require("styled-icons/boxicons-regular/Pencil");

var _Search = require("styled-icons/material/Search");

var _KeyboardBackspace = require("styled-icons/material/KeyboardBackspace");

var _mediaQueries = require("./mediaQueries");

var _mainStyling = require("../styles/mainStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SousePostMain = _styledComponents["default"].div.withConfig({
  displayName: "postsStyling__SousePostMain",
  componentId: "d9cwgo-0"
})([""]);

exports.SousePostMain = SousePostMain;
var CloseIcon = (0, _styledComponents["default"])(_Close.Close).withConfig({
  displayName: "postsStyling__CloseIcon",
  componentId: "d9cwgo-1"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.CloseIcon = CloseIcon;
var EditIcon = (0, _styledComponents["default"])(_Edit.Edit).withConfig({
  displayName: "postsStyling__EditIcon",
  componentId: "d9cwgo-2"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.EditIcon = EditIcon;
var PencilIcon = (0, _styledComponents["default"])(_Pencil.Pencil).withConfig({
  displayName: "postsStyling__PencilIcon",
  componentId: "d9cwgo-3"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.PencilIcon = PencilIcon;
var SearchIcon = (0, _styledComponents["default"])(_Search.Search).withConfig({
  displayName: "postsStyling__SearchIcon",
  componentId: "d9cwgo-4"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.SearchIcon = SearchIcon;
var KeyboardBackspaceIcon = (0, _styledComponents["default"])(_KeyboardBackspace.KeyboardBackspace).withConfig({
  displayName: "postsStyling__KeyboardBackspaceIcon",
  componentId: "d9cwgo-5"
})(["color:", ";height:1.1em;width:1.5em;"], function (props) {
  return props.theme.secondaryColor;
});
exports.KeyboardBackspaceIcon = KeyboardBackspaceIcon;

var PreScrollable = _styledComponents["default"].div.withConfig({
  displayName: "postsStyling__PreScrollable",
  componentId: "d9cwgo-6"
})(["max-height:31.25em;overflow-y:auto;overflow-x:hidden !important;@media ", "{}@media ", "{}@media ", "{max-height:80vw !important;}@media ", "{}@media ", "{max-height:47vw !important;}@media ", "{max-height:30vw !important;}@media ", "{max-height:80vw !important;}@media ", "{max-height:23vw !important;}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}@media ", "{}"], _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape); // Post Image

/* ---------------------------------------------------- */


exports.PreScrollable = PreScrollable;

var PostPageImage = _styledComponents["default"].img.withConfig({
  displayName: "postsStyling__PostPageImage",
  componentId: "d9cwgo-7"
})(["object-fit:cover;width:28vw;height:28vw;@media ", "{height:100vw;width:100vw;}@media ", "{height:34vw;width:34vw;}@media ", "{height:100vw;width:100vw;}@media ", "{height:30vw;width:30vw;}@media ", "{height:100vw;width:100vw;}@media ", "{height:34vw;width:34vw;}@media ", "{height:100vw;width:100vw;}@media ", "{height:34vw;width:34vw;}@media ", "{height:100vw;width:100vw;}@media ", "{height:30vw;width:30vw;}@media ", "{width:100vw;height:100vw;}@media ", "{height:40vw;width:40vw;}@media ", "{height:26vw;width:26vw;}@media ", "{height:21vw;width:21vw;}"], _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);
/* ---------------------------------------------------- */
// User Image (Post Page)

/* ---------------------------------------------------- */


exports.PostPageImage = PostPageImage;

var PostPageIcon = _styledComponents["default"].img.withConfig({
  displayName: "postsStyling__PostPageIcon",
  componentId: "d9cwgo-8"
})(["border-radius:50%;border:0.25em solid ", ";position:relative;width:3vw;height:3vw;overflow:hidden;display:flex;justify-content:center;align-items:center;@media ", "{height:16vw;width:16vw;}@media ", "{width:8vw;height:8vw;", "{max-height:6.875em;}}@media ", "{height:16vw;width:16vw;}@media ", "{height:8vw;width:8vw;", "{max-height:9.375em;}}@media ", "{height:16vw;width:16vw;", "{max-height:14.0625em;}}@media ", "{height:8vw;width:8vw;", "{max-height:9.375em;}}@media ", "{height:16vw;width:16vw;", "{max-height:14.0625em;}}@media ", "{height:8vw;width:8vw;", "{max-height:9.375em;}}@media ", "{width:16vw;height:16vw;}@media ", "{height:8vw;width:8vw;}@media ", "{width:7vw;height:7vw;}@media ", "{height:6vw;width:6vw;}@media ", "{height:4vw;width:4vw;}@media ", "{height:3vw;width:3vw;}"], function (props) {
  return props.theme.secondaryColor;
}, _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, PreScrollable, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, PreScrollable, _mediaQueries.souseMediaQueries.mobileL.portrait, PreScrollable, _mediaQueries.souseMediaQueries.mobileL.landscape, PreScrollable, _mediaQueries.souseMediaQueries.mobileLMax.portrait, PreScrollable, _mediaQueries.souseMediaQueries.mobileLMax.landscape, PreScrollable, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);
/* ---------------------------------------------------- */
// Edit Post

/* ---------------------------------------------------- */


exports.PostPageIcon = PostPageIcon;

var SouseLabel = _styledComponents["default"].label.withConfig({
  displayName: "postsStyling__SouseLabel",
  componentId: "d9cwgo-9"
})(["color:", ";font-weight:600;"], function (props) {
  return props.theme.secondaryColor;
});
/* ---------------------------------------------------- */


exports.SouseLabel = SouseLabel;

var CommentsLinkFont = _styledComponents["default"].h6.withConfig({
  displayName: "postsStyling__CommentsLinkFont",
  componentId: "d9cwgo-10"
})(["font-weight:800;cursor:pointer;"]);

exports.CommentsLinkFont = CommentsLinkFont;

var PostCreatorName = _styledComponents["default"].h5.withConfig({
  displayName: "postsStyling__PostCreatorName",
  componentId: "d9cwgo-11"
})(["font-weight:800;"]);

exports.PostCreatorName = PostCreatorName;

var PostLocation = _styledComponents["default"].h6.withConfig({
  displayName: "postsStyling__PostLocation",
  componentId: "d9cwgo-12"
})(["font-weight:300;font-size:1em;"]);

exports.PostLocation = PostLocation;

var SouseDiv = _styledComponents["default"].div.withConfig({
  displayName: "postsStyling__SouseDiv",
  componentId: "d9cwgo-13"
})(["@media ", "{width:100%;}@media ", "{width:50%;}@media ", "{width:100%;}@media ", "{width:50%;}@media ", "{width:100%;}@media ", "{width:50%;}@media ", "{width:100%;}@media ", "{width:50%;}@media ", "{width:100%;}@media ", "{width:50%;}@media ", "{width:100%;}@media ", "{width:50%;}@media ", "{width:50%;}@media ", "{width:50%;}"], _mediaQueries.souseMediaQueries.mobileS.portrait, _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait, _mediaQueries.souseMediaQueries.laptop.landscape, _mediaQueries.souseMediaQueries.laptopL.landscape, _mediaQueries.souseMediaQueries.desktop.landscape);

exports.SouseDiv = SouseDiv;

var CaptionPreScrollable = _styledComponents["default"].div.withConfig({
  displayName: "postsStyling__CaptionPreScrollable",
  componentId: "d9cwgo-14"
})(["max-height:31.25em;overflow-y:auto;overflow-x:hidden !important;@media ", "{max-height:12vw;}@media ", "{max-height:16vw;width:100%;}@media ", "{max-height:11vw;}@media ", "{max-height:51vw;width:100%;}@media ", "{max-height:12vw !important;}@media ", "{max-height:51vw;width:100%;}@media ", "{max-height:12vw;}@media ", "{max-height:6vw;}@media ", "{max-height:12vw;}@media ", "{max-height:8vw;}"], _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait);

exports.CaptionPreScrollable = CaptionPreScrollable;

var CaptionPreScrollableLoggedIn = _styledComponents["default"].div.withConfig({
  displayName: "postsStyling__CaptionPreScrollableLoggedIn",
  componentId: "d9cwgo-15"
})(["max-height:31.25em;overflow-y:auto;overflow-x:hidden !important;@media ", "{max-height:12vw;}@media ", "{max-height:16vw;width:100%;}@media ", "{max-height:11vw;}@media ", "{max-height:51vw;width:100%;}@media ", "{max-height:12vw !important;}@media ", "{max-height:51vw;width:100%;}@media ", "{max-height:12vw;}@media ", "{max-height:6vw;}@media ", "{max-height:12vw;}@media ", "{max-height:8vw;}"], _mediaQueries.souseMediaQueries.mobileS.landscape, _mediaQueries.souseMediaQueries.mobileM.portrait, _mediaQueries.souseMediaQueries.mobileM.landscape, _mediaQueries.souseMediaQueries.mobileL.portrait, _mediaQueries.souseMediaQueries.mobileL.landscape, _mediaQueries.souseMediaQueries.mobileLMax.portrait, _mediaQueries.souseMediaQueries.mobileLMax.landscape, _mediaQueries.souseMediaQueries.tablet.portrait, _mediaQueries.souseMediaQueries.tablet.landscape, _mediaQueries.souseMediaQueries.laptop.portrait);

exports.CaptionPreScrollableLoggedIn = CaptionPreScrollableLoggedIn;