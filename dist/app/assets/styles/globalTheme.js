"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.souseVapeThemeDark = exports.souseVapeTheme = exports.souseViceThemeDark = exports.souseViceTheme = exports.souseFPThemeDark = exports.souseFPTheme = exports.souseIMThemeDark = exports.souseIMTheme = exports.souseDefaultThemeDark = exports.souseDefaultTheme = void 0;
// Souse Default Color Scheme
var primaryColorAlt = 'rgb(221, 174, 170)';
var secondaryColor = 'rgb(196, 87, 88)';
var primaryColor = 'rgb(228, 209, 209)';
var white = 'rgb(255, 255, 255)';
var black = 'rgb(0, 0, 0)';
var primaryColorDark = 'rgb(84, 0, 0)'; // Souse Inter Miami Color Scheme

var primaryIMColorAlt = 'rgb(99, 98, 99)';
var primaryIMColorAltDark = 'rgb(209, 157, 177)';
var secondaryIMColor = 'rgb(35, 31, 32)';
var primaryIMColor = 'rgb(247, 181, 205)';
var whiteIM = 'rgb(255, 255, 255)'; // Souse Florida Panthers Color Scheme

var primaryFPColorAlt = 'rgb(68, 104, 156)';
var primaryFPColorAltDark = 'rgb(204, 171, 108)';
var secondaryFPColor = 'rgb(44, 65, 96)';
var primaryFPColor = 'rgb(188, 153, 86)';
var blackFP = 'rgb(0, 0, 0)';
var whiteFP = 'rgb(255, 255, 255)'; // Souse Vice Color Scheme

var primaryViceColorAlt = 'rgb(65,182,230)';
var secondaryViceColor = 'rgb(215, 128, 181)';
var primaryViceColor = 'rgb(255, 255, 255)';
var whiteVice = 'rgb(255, 255, 255)';
var blackVice = 'rgb(0, 0, 0)'; // Souse Vaporwave Color Scheme

var primaryVapeColorAlt = 'rgb(167, 209, 197)';
var secondaryVapeColor = 'rgb(100, 195, 167)';
var secondaryVapeColorDark = 'rgb(55, 105, 90)';
var primaryVapeColor = 'rgb(255, 181, 198)';
var whiteVape = 'rgb(255, 255, 255)';
var greyVape = 'rgb(226, 226, 226)';
var souseDefaultTheme = {
  primaryColorAlt: primaryColorAlt,
  secondaryColor: secondaryColor,
  primaryColor: primaryColor,
  white: white,
  black: black,
  '$card-bg': primaryColor
};
exports.souseDefaultTheme = souseDefaultTheme;
var souseDefaultThemeDark = {
  primaryColorAlt: primaryColorAlt,
  secondaryColor: primaryColor,
  primaryColor: primaryColorDark,
  white: primaryColor,
  black: white,
  '$card-bg': primaryColor
};
exports.souseDefaultThemeDark = souseDefaultThemeDark;
var souseIMTheme = {
  primaryColorAlt: primaryIMColorAlt,
  secondaryColor: secondaryIMColor,
  primaryColor: primaryIMColor,
  white: whiteIM,
  black: secondaryIMColor,
  '$card-bg': primaryIMColor
};
exports.souseIMTheme = souseIMTheme;
var souseIMThemeDark = {
  primaryColorAlt: primaryIMColorAltDark,
  secondaryColor: primaryIMColor,
  primaryColor: secondaryIMColor,
  white: whiteIM,
  black: whiteIM,
  '$card-bg': primaryIMColor
};
exports.souseIMThemeDark = souseIMThemeDark;
var souseFPTheme = {
  primaryColorAlt: primaryFPColorAlt,
  secondaryColor: secondaryFPColor,
  primaryColor: primaryFPColor,
  black: blackFP,
  white: whiteFP,
  '$card-bg': primaryFPColor
};
exports.souseFPTheme = souseFPTheme;
var souseFPThemeDark = {
  primaryColorAlt: primaryFPColorAltDark,
  secondaryColor: primaryFPColor,
  primaryColor: secondaryFPColor,
  white: whiteFP,
  black: whiteFP,
  '$card-bg': primaryFPColor
};
exports.souseFPThemeDark = souseFPThemeDark;
var souseViceTheme = {
  primaryColorAlt: secondaryViceColor,
  secondaryColor: primaryViceColorAlt,
  primaryColor: primaryViceColor,
  white: secondaryViceColor,
  black: blackVice,
  '$card-bg': primaryViceColor
};
exports.souseViceTheme = souseViceTheme;
var souseViceThemeDark = {
  primaryColorAlt: secondaryViceColor,
  secondaryColor: primaryViceColorAlt,
  primaryColor: blackVice,
  white: secondaryViceColor,
  black: blackVice,
  '$card-bg': primaryViceColor
};
exports.souseViceThemeDark = souseViceThemeDark;
var souseVapeTheme = {
  primaryColorAlt: secondaryVapeColor,
  secondaryColor: primaryVapeColor,
  primaryColor: greyVape,
  white: primaryVapeColorAlt,
  black: greyVape,
  '$card-bg': primaryVapeColor
};
exports.souseVapeTheme = souseVapeTheme;
var souseVapeThemeDark = {
  primaryColorAlt: greyVape,
  secondaryColor: primaryVapeColor,
  primaryColor: secondaryVapeColorDark,
  white: primaryVapeColorAlt,
  black: greyVape,
  '$card-bg': primaryVapeColor
};
exports.souseVapeThemeDark = souseVapeThemeDark;