"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.souseVapeTheme = exports.souseViceTheme = exports.souseFPTheme = exports.souseIMTheme = exports.souseDefaultTheme = void 0;
// Souse Default Color Scheme
var primaryColorAlt = 'rgb(221, 174, 170)';
var secondaryColor = 'rgb(196, 87, 88)';
var primaryColor = 'rgb(228, 209, 209)';
var white = 'rgb(255, 255, 255)';
var black = 'rgb(0, 0, 0)'; // Souse Inter Miami Color Scheme

var primaryIMColorAlt = 'rgb(99, 98, 99)';
var secondaryIMColor = 'rgb(35, 31, 32)';
var primaryIMColor = 'rgb(247, 181, 205)';
var whiteIM = 'rgb(255, 255, 255)'; // Souse Florida Panthers Color Scheme

var primaryFPColorAlt = 'rgb(165, 176, 194)';
var secondaryFPColor = 'rgb(44, 65, 96)';
var primaryFPColor = 'rgb(188, 153, 86)';
var blackFP = 'rgb(0, 0, 0)';
var whiteFP = 'rgb(255, 255, 255)'; // Souse Vice Color Scheme

var primaryViceColorAlt = 'rgb(128, 189, 214)';
var secondaryViceColor = 'rgb(215, 128, 181)';
var primaryViceColor = 'rgb(255, 255, 255)';
var whiteVice = 'rgb(255, 255, 255)';
var blackVice = 'rgb(0, 0, 0)'; // Souse Vaporwave Color Scheme

var primaryVapeColorAlt = 'rgb(167, 209, 197)';
var secondaryVapeColor = 'rgb(100, 195, 167)';
var primaryVapeColor = 'rgb(254, 129, 157)';
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
var souseIMTheme = {
  primaryColorAlt: primaryIMColorAlt,
  secondaryColor: secondaryIMColor,
  primaryColor: primaryIMColor,
  white: whiteIM,
  black: secondaryIMColor,
  '$card-bg': primaryIMColor
};
exports.souseIMTheme = souseIMTheme;
var souseFPTheme = {
  primaryColorAlt: primaryFPColorAlt,
  secondaryColor: secondaryFPColor,
  primaryColor: primaryFPColor,
  black: blackFP,
  white: whiteFP,
  '$card-bg': primaryFPColor
};
exports.souseFPTheme = souseFPTheme;
var souseViceTheme = {
  primaryColorAlt: primaryViceColorAlt,
  secondaryColor: secondaryViceColor,
  primaryColor: primaryViceColor,
  white: whiteVice,
  black: blackVice,
  '$card-bg': primaryViceColor
};
exports.souseViceTheme = souseViceTheme;
var souseVapeTheme = {
  primaryColorAlt: primaryVapeColorAlt,
  secondaryColor: secondaryVapeColor,
  primaryColor: primaryVapeColor,
  white: whiteVape,
  black: greyVape,
  '$card-bg': primaryVapeColor
};
exports.souseVapeTheme = souseVapeTheme;