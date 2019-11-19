//Souse Media Queries
/* ---------------------------------------------------- */
const breakpoint = {
    mobileS: {
        portrait: {
            minWidth: '20em', //320px
            maxWidth: '35.5em' //568px
        },
        landscape: {
            minWidth: '20em', //320px
            maxWidth: '35.5em' //568px
        }
    },
    mobileM: {
        portrait: {
            minWidth: '23.4375em', //375px
            maxWidth: '50.75em' //812px
        },
        landscape: {
            minWidth: '23.4375em', //375px
            maxWidth: '50.75em' //812px
        }
    },
    mobileL: {
        portrait: {
            minWidth: '25.688em', //411px
            maxWidth: '51.438em' //823px
        },
        landscape: {
            minWidth: '25.688em', //411px
            maxWidth: '51.438em' //823px
        }
    },
    mobileLMax: {
        portrait: {
            minWidth: '25.875em', //414px
            maxWidth: '56em' //896px
        },
        landscape: {
            minWidth: '25.875em', //414px
            maxWidth: '56em' //896px
        }
    },
    tablet: {
        portrait: {
            minWidth: '48em', //768px
            maxWidth: '50.6875em' //811px
        },
        landscape: {
            minWidth: '51.5em', //824px
            maxWidth: '64em' //1024px
        }
    },
    laptop: {
        portrait: { // IPad Pro
            minWidth: '50.8125em', //813px
            maxWidth: '64em' //1024px
        },
        landscape: {
            minWidth: '64.0625em', //1025px
            maxWidth: '89.9375em' //1439px
        }

    },
    laptopL: {
        landscape: {
            minWidth: '90em', //1440px
            maxWidth: '134.9375em' //2159px
        }
    },
    desktop: {
        landscape: {
            minWidth: '135em' //2160px
        }
    }
}

export const souseMediaQueries = {
    mobileS: {
        portrait: `(min-width: ${breakpoint.mobileS.portrait.minWidth}) and (max-width: ${breakpoint.mobileS.portrait.maxWidth}) and (orientation: portrait)`,
        landscape: `(min-width: ${breakpoint.mobileS.landscape.minWidth}) and (max-width: ${breakpoint.mobileS.landscape.maxWidth}) and (orientation: landscape)`,
    },
    mobileM: {
        portrait: `(min-width: ${breakpoint.mobileM.portrait.minWidth}) and (max-width: ${breakpoint.mobileM.portrait.maxWidth}) and (orientation: portrait)`,
        landscape: `(min-width: ${breakpoint.mobileM.landscape.minWidth}) and (max-width: ${breakpoint.mobileM.landscape.maxWidth}) and (orientation: landscape)`
    },
    mobileL: {
        portrait: `(min-device-width: ${breakpoint.mobileL.portrait.minWidth}) and (max-device-width: ${breakpoint.mobileL.portrait.maxWidth}) and (orientation: portrait)`,
        landscape: `(min-device-width: ${breakpoint.mobileL.landscape.minWidth}) and (max-device-width: ${breakpoint.mobileL.landscape.maxWidth}) and (orientation: landscape)`
    },
    mobileLMax: {
        portrait: `(min-device-width: ${breakpoint.mobileLMax.portrait.minWidth}) and (max-device-width: ${breakpoint.mobileLMax.portrait.maxWidth}) and (orientation: portrait)`,
        landscape: `(min-device-width: ${breakpoint.mobileLMax.landscape.minWidth}) and (max-device-width: ${breakpoint.mobileLMax.landscape.maxWidth}) and (orientation: landscape)`
    },
    tablet: {
        portrait: `(min-width: ${breakpoint.tablet.portrait.minWidth}) and (max-width: ${breakpoint.tablet.portrait.maxWidth}) and (orientation: portrait)`,
        landscape: `(min-width: ${breakpoint.tablet.landscape.minWidth}) and (max-width: ${breakpoint.tablet.landscape.maxWidth}) and (orientation: landscape)`
    },
    laptop: {
        portrait: `(min-width: ${breakpoint.laptop.portrait.minWidth}) and (max-width: ${breakpoint.laptop.portrait.maxWidth}) and (orientation: portrait)`, // IPad Pro
        landscape: `(min-width: ${breakpoint.laptop.landscape.minWidth}) and (max-width: ${breakpoint.laptop.landscape.maxWidth}) and (orientation: landscape)`
    },
    laptopL: {
        landscape: `(min-width:${breakpoint.laptopL.landscape.minWidth}) and (max-width: ${breakpoint.laptopL.landscape.maxWidth}) and (orientation: landscape)`
    },
    desktop: {
        landscape: `(min-width: ${breakpoint.desktop.landscape.minWidth}) and (orientation: landscape)`
    }
};
/* ---------------------------------------------------- */