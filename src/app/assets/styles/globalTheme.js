// Souse Default Color Scheme
const primaryColorAlt = 'rgb(221, 174, 170)';
const secondaryColor = 'rgb(196, 87, 88)';
const primaryColor = 'rgb(228, 209, 209)';
const white = 'rgb(255, 255, 255)';
const black = 'rgb(0, 0, 0)';
const primaryColorDark = 'rgb(84, 0, 0)';

// Souse Inter Miami Color Scheme
const primaryIMColorAlt = 'rgb(99, 98, 99)';
const primaryIMColorAltDark = 'rgb(209, 157, 177)';
const secondaryIMColor = 'rgb(35, 31, 32)';
const primaryIMColor = 'rgb(247, 181, 205)';
const whiteIM = 'rgb(255, 255, 255)';

// Souse Florida Panthers Color Scheme
const primaryFPColorAlt = 'rgb(68, 104, 156)';
const primaryFPColorAltDark = 'rgb(204, 171, 108)';
const secondaryFPColor = 'rgb(44, 65, 96)';
const primaryFPColor = 'rgb(188, 153, 86)';
const blackFP = 'rgb(0, 0, 0)';
const whiteFP = 'rgb(255, 255, 255)';

// Souse Vice Color Scheme
const primaryViceColorAlt = 'rgb(65,182,230)';
const secondaryViceColor = 'rgb(215, 128, 181)';
const primaryViceColor = 'rgb(255, 255, 255)';
const whiteVice = 'rgb(255, 255, 255)';
const blackVice = 'rgb(0, 0, 0)';

// Souse Vaporwave Color Scheme
const primaryVapeColorAlt = 'rgb(155, 204, 190)';
const secondaryVapeColor = 'rgb(100, 195, 167)';
const secondaryVapeColorDark = 'rgb(55, 105, 90)';
const primaryVapeColor = 'rgb(255, 181, 198)';
const whiteVape = 'rgb(255, 255, 255)';
const greyVape = 'rgb(255, 236, 236)';

export const souseDefaultTheme = {
    primaryColorAlt: primaryColorAlt,
    secondaryColor: secondaryColor,
    primaryColor: primaryColor,
    white: white,
    black: black,
    '$card-bg': primaryColor
}

export const souseDefaultThemeDark = {
    primaryColorAlt: primaryColorAlt,
    secondaryColor: primaryColor,
    primaryColor: primaryColorDark,
    white: primaryColor,
    black: white,
    '$card-bg': primaryColor
}

export const souseIMTheme = {
    primaryColorAlt: primaryIMColorAlt,
    secondaryColor: secondaryIMColor,
    primaryColor: primaryIMColor,
    white: whiteIM,
    black: secondaryIMColor,
    '$card-bg': primaryIMColor
}

export const souseIMThemeDark = {
    primaryColorAlt: primaryIMColorAltDark,
    secondaryColor: primaryIMColor,
    primaryColor: secondaryIMColor,
    white: whiteIM,
    black: whiteIM,
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

export const souseFPThemeDark = {
    primaryColorAlt: primaryFPColorAltDark,
    secondaryColor: primaryFPColor,
    primaryColor: secondaryFPColor,
    white: whiteFP,
    black: whiteFP,
    '$card-bg': primaryFPColor
}

export const souseViceTheme = {
    primaryColorAlt: secondaryViceColor,
    secondaryColor: primaryViceColorAlt,
    primaryColor: primaryViceColor,
    white: secondaryViceColor,
    black: blackVice,
    '$card-bg': primaryViceColor
}

export const souseViceThemeDark = {
    primaryColorAlt: secondaryViceColor,
    secondaryColor: primaryViceColorAlt,
    primaryColor: blackVice,
    white: secondaryViceColor,
    black: blackVice,
    '$card-bg': primaryViceColor
}

export const souseVapeTheme = {
    primaryColorAlt: secondaryVapeColor,
    secondaryColor: primaryVapeColor,
    primaryColor: greyVape,
    white: primaryVapeColorAlt,
    black: greyVape,
    '$card-bg': primaryVapeColor
}

export const souseVapeThemeDark = {
    primaryColorAlt: greyVape,
    secondaryColor: primaryVapeColor,
    primaryColor: secondaryVapeColorDark,
    white: primaryVapeColorAlt,
    black: greyVape,
    '$card-bg': primaryVapeColor
}