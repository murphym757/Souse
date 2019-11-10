"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.souseMediaQueries = exports.SouseForm = exports.SouseButton = exports.ConnectionOptionsLink = exports.CreateIconLink = exports.LinkFontH6 = exports.SouseLink = exports.CreateIcon = exports.SouseLoadingIcon3 = exports.SouseLoadingIcon2 = exports.SouseLoadingIcon = exports.SouseStyledLink = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SouseStyledLink = (0, _styledComponents["default"])(_reactRouterDom.Link).withConfig({
  displayName: "mainStyling__SouseStyledLink",
  componentId: "sc-1816ehk-0"
})(["text-decoration:none;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;}"]);
exports.SouseStyledLink = SouseStyledLink;

var SouseLoadingIcon = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__SouseLoadingIcon",
  componentId: "sc-1816ehk-1"
})(["color:", ";"], function (props) {
  return props.theme.secondaryColor;
});

exports.SouseLoadingIcon = SouseLoadingIcon;

var SouseLoadingIcon2 = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__SouseLoadingIcon2",
  componentId: "sc-1816ehk-2"
})(["color:", ";"], function (props) {
  return props.theme.white;
});

exports.SouseLoadingIcon2 = SouseLoadingIcon2;

var SouseLoadingIcon3 = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__SouseLoadingIcon3",
  componentId: "sc-1816ehk-3"
})(["color:", ";"], function (props) {
  return props.theme.secondaryColor;
});

exports.SouseLoadingIcon3 = SouseLoadingIcon3;

var CreateIcon = _styledComponents["default"].i.withConfig({
  displayName: "mainStyling__CreateIcon",
  componentId: "sc-1816ehk-4"
})(["color:", ";"], function (props) {
  return props.theme.primaryColor;
});

exports.CreateIcon = CreateIcon;

var SouseLink = _styledComponents["default"].a.withConfig({
  displayName: "mainStyling__SouseLink",
  componentId: "sc-1816ehk-5"
})(["color:", ";text-decoration:none;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;color:", ";}"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.secondaryColor;
});

exports.SouseLink = SouseLink;

var LinkFontH6 = _styledComponents["default"].h6.withConfig({
  displayName: "mainStyling__LinkFontH6",
  componentId: "sc-1816ehk-6"
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
  componentId: "sc-1816ehk-7"
})(["background-color:", " !important;", "{color:", ";}"], function (props) {
  return props.theme.secondaryColor;
}, CreateIcon, function (props) {
  return props.theme.primaryColor;
});

exports.CreateIconLink = CreateIconLink;

var ConnectionOptionsLink = _styledComponents["default"].h6.withConfig({
  displayName: "mainStyling__ConnectionOptionsLink",
  componentId: "sc-1816ehk-8"
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
}); //Souse Button

/* ---------------------------------------------------- */


exports.ConnectionOptionsLink = ConnectionOptionsLink;

var SouseButton = _styledComponents["default"].button.withConfig({
  displayName: "mainStyling__SouseButton",
  componentId: "sc-1816ehk-9"
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
  componentId: "sc-1816ehk-10"
})([".input-field input:focus+label{color:", " !important;}.form-control{color:", " !important;}.materialize-textarea{background-color:", " !important;}.row .input-field input:focus{border-bottom:1px solid ", " !important;box-shadow:0 1px 0 0 ", " !important;color:", " !important;}input:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default),input[type=date]:not(.browser-default),input[type=datetime]:not(.browser-default),input[type=datetime-local]:not(.browser-default),input[type=tel]:not(.browser-default),input[type=number]:not(.browser-default),input[type=search]:not(.browser-default),textarea.materialize-textarea{&:focus:not([readonly]){border-bottom:1px solid ", ";box-shadow:0 1px 0 0 ", ";color:", ";}&:focus:not([readonly])+label{color:", ";}}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-animation:autofill 0s forwards;animation:autofill 0s forwards;}@keyframes autofill{100%{background:transparent;color:inherit;}}@-webkit-keyframes autofill{100%{background:transparent;color:inherit;}}"], function (props) {
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
});
/* ---------------------------------------------------- */
//Souse Media Queries

/* ---------------------------------------------------- */


exports.SouseForm = SouseForm;
var breakpoint = {
  mobileS: {
    portrait: {
      minWidth: '20em',
      //320px
      maxWidth: '35.5em' //568px

    },
    landscape: {
      minWidth: '20em',
      //320px
      maxWidth: '35.5em' //568px

    }
  },
  mobileM: {
    portrait: {
      minWidth: '23.4375em',
      //375px
      maxWidth: '50.75em' //812px

    },
    landscape: {
      minWidth: '23.4375em',
      //375px
      maxWidth: '50.75em' //812px

    }
  },
  mobileL: {
    portrait: {
      minWidth: '25.875em',
      //414px
      maxWidth: '56em' //896px

    },
    landscape: {
      minWidth: '25.875em',
      //414px
      maxWidth: '56em' //896px

    }
  },
  tablet: {
    portrait: {
      minWidth: '48em',
      //768px
      maxWidth: '50.6875em' //811px

    },
    landscape: {
      minWidth: '51.5em',
      //824px
      maxWidth: '64em' //1024px

    }
  },
  laptop: {
    portrait: {
      // IPad Pro
      minWidth: '50.8125em',
      //813px
      maxWidth: '64em' //1024px

    },
    landscape: {
      minWidth: '64.0625em',
      //1025px
      maxWidth: '89.9375em' //1439px

    }
  },
  laptopL: {
    landscape: {
      minWidth: '90em',
      //1440px
      maxWidth: '134.9375em' //2159px

    }
  },
  desktop: {
    landscape: {
      minWidth: '135em' //2160px

    }
  }
};
var souseMediaQueries = {
  mobileS: {
    portrait: "(min-width: ".concat(breakpoint.mobileS.portrait.minWidth, ") and (max-width: ").concat(breakpoint.mobileS.portrait.maxWidth, ") and (orientation: portrait)"),
    landscape: "(min-width: ".concat(breakpoint.mobileS.landscape.minWidth, ") and (max-width: ").concat(breakpoint.mobileS.landscape.maxWidth, ") and (orientation: landscape)")
  },
  mobileM: {
    portrait: "(min-width: ".concat(breakpoint.mobileM.portrait.minWidth, ") and (max-width: ").concat(breakpoint.mobileM.portrait.maxWidth, ") and (orientation: portrait)"),
    landscape: "(min-width: ".concat(breakpoint.mobileM.landscape.minWidth, ") and (max-width: ").concat(breakpoint.mobileM.landscape.maxWidth, ") and (orientation: landscape)")
  },
  mobileL: {
    portrait: "(min-width: ".concat(breakpoint.mobileL.portrait.minWidth, ") and (max-width: ").concat(breakpoint.mobileL.portrait.maxWidth, ") and (orientation: portrait)"),
    landscape: "(min-width: ".concat(breakpoint.mobileL.landscape.minWidth, ") and (max-width: ").concat(breakpoint.mobileL.landscape.maxWidth, ") and (orientation: landscape)")
  },
  tablet: {
    portrait: "(min-width: ".concat(breakpoint.tablet.portrait.minWidth, ") and (max-width: ").concat(breakpoint.tablet.portrait.maxWidth, ") and (orientation: portrait)"),
    landscape: "(min-width: ".concat(breakpoint.tablet.landscape.minWidth, ") and (max-width: ").concat(breakpoint.tablet.landscape.maxWidth, ") and (orientation: landscape)")
  },
  laptop: {
    portrait: "(min-width: ".concat(breakpoint.laptop.portrait.minWidth, ") and (max-width: ").concat(breakpoint.laptop.portrait.maxWidth, ") and (orientation: portrait)"),
    // IPad Pro
    landscape: "(min-width: ".concat(breakpoint.laptop.landscape.minWidth, ") and (max-width: ").concat(breakpoint.laptop.landscape.maxWidth, ") and (orientation: landscape)")
  },
  laptopL: {
    landscape: "(min-width:".concat(breakpoint.laptopL.landscape.minWidth, ") and (max-width: ").concat(breakpoint.laptopL.landscape.maxWidth, ") and (orientation: landscape)")
  },
  desktop: {
    landscape: "(min-width: ".concat(breakpoint.desktop.landscape.minWidth, ") and (orientation: landscape)")
  }
};
/* ---------------------------------------------------- */

exports.souseMediaQueries = souseMediaQueries;