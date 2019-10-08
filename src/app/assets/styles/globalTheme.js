// Souse Default Color Scheme
const primaryColorAlt = 'rgb(221, 174, 170)';
const secondaryColor = 'rgb(196, 87, 88)';
const primaryColor = 'rgb(228, 209, 209)';
const white = 'rgb(255, 255, 255)';
const black = 'rgb(0, 0, 0)';

// Souse Inter Miami Color Scheme
const primaryIMColorAlt = 'rgb(99, 98, 99)';
const secondaryIMColor = 'rgb(35, 31, 32)';
const primaryIMColor = 'rgb(247, 181, 205)';
const whiteIM = 'rgb(255, 255, 255)';

// Souse Florida Panthers Color Scheme
const primaryFPColorAlt = 'rgb(165, 176, 194)';
const secondaryFPColor = 'rgb(44, 65, 96)';
const primaryFPColor = 'rgb(188, 153, 86)';
const blackFP = 'rgb(0, 0, 0)';
const whiteFP = 'rgb(255, 255, 255)';

// Souse Vice Color Scheme
const primaryViceColorAlt = 'rgb(128, 189, 214)';
const secondaryViceColor = 'rgb(215, 128, 181)';
const primaryViceColor = 'rgb(255, 255, 255)';
const whiteVice = 'rgb(255, 255, 255)';
const blackVice = 'rgb(0, 0, 0)';

// Souse Vaporwave Color Scheme
const primaryVapeColorAlt = 'rgb(167, 209, 197)';
const secondaryVapeColor = 'rgb(100, 195, 167)';
const primaryVapeColor = 'rgb(254, 129, 157)';
const whiteVape = 'rgb(255, 255, 255)';
const greyVape = 'rgb(226, 226, 226)';

export const souseDefaultTheme = {
    primaryColorAlt: primaryColorAlt,
    secondaryColor: secondaryColor,
    primaryColor: primaryColor,
    white: white,
    black: black,
    '$card-bg': primaryColor,
}

export const souseIMTheme = {
    primaryColorAlt: primaryIMColorAlt,
    secondaryColor: secondaryIMColor,
    primaryColor: primaryIMColor,
    white: whiteIM,
    black: secondaryIMColor,
    '$card-bg': primaryIMColor
}

export const souseFPTheme = {
    primaryColorAlt: primaryFPColorAlt,
    secondaryColor: secondaryFPColor,
    primaryColor: primaryFPColor,
    black: blackFP,
    white: whiteFP,
    '$card-bg': primaryFPColor
}

export const souseViceTheme = {
    primaryColorAlt: primaryViceColorAlt,
    secondaryColor: secondaryViceColor,
    primaryColor: primaryViceColor,
    white: whiteVice,
    black: blackVice,
    '$card-bg': primaryViceColor
}

export const souseVapeTheme = {
    primaryColorAlt: primaryVapeColorAlt,
    secondaryColor: secondaryVapeColor,
    primaryColor: primaryVapeColor,
    white: whiteVape,
    black: greyVape,
    '$card-bg': primaryVapeColor
}
