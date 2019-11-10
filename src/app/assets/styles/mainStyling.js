import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SouseStyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const SouseLoadingIcon = styled.div `
    color: ${props => props.theme.secondaryColor};
`;

export const SouseLoadingIcon2 = styled.div `
        color: ${props => props.theme.white};
`;

export const SouseLoadingIcon3 = styled.div `
        color: ${props => props.theme.secondaryColor};
`;

export const CreateIcon = styled.i `
        color: ${props => props.theme.primaryColor};
`;

export const SouseLink = styled.a `
        color: ${props => props.theme.primaryColor};
        text-decoration: none;
        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;
            color: ${props => props.theme.secondaryColor};
        }   
`;

export const LinkFontH6 = styled.h6 `
        color: ${props => props.theme.secondaryColor};
        text-decoration: none;
        &:focus {
            color: ${props => props.theme.secondaryColor};
        }   
        &:link {
            color: ${props => props.theme.secondaryColor};
        }
        &:visited {
            color: ${props => props.theme.secondaryColor};
        }
        &:hover {
            color: ${props => props.theme.secondaryColor};
        }
        &:active {
            color: ${props => props.theme.secondaryColor};
        }
`;


export const CreateIconLink = styled.a `
    background-color: ${props => props.theme.secondaryColor} !important;
    ${CreateIcon} {
        color: ${props => props.theme.primaryColor};
    }
`;

export const ConnectionOptionsLink = styled.h6 `
    font-weight: 600;
    cursor: pointer;
    color: ${props => props.theme.secondaryColor};
        text-decoration: none;
        &:focus {
            color: ${props => props.theme.secondaryColor};
        }   
        &:link {
            color: ${props => props.theme.secondaryColor};
        }
        &:visited {
            color: ${props => props.theme.secondaryColor};
        }
        &:hover {
            color: ${props => props.theme.secondaryColor};
        }
        &:active {
            color: ${props => props.theme.secondaryColor};
        }
`;

//Souse Button
/* ---------------------------------------------------- */
export const SouseButton = styled.button `
    background-color: ${props => props.theme.secondaryColor} !important;
    &:hover {
        background-color: ${props => props.theme.primaryColorAlt} !important;
    }

    /* This is a "class" for the elment (p) within the (button) element */
    .buttonFont { 
        text-transform: uppercase;
        font-size: 0.696em; //10px
        color: ${props => props.theme.primaryColor} !important;

    }
`;
/* ---------------------------------------------------- */


//Souse Form
/* ---------------------------------------------------- */
export const SouseForm = styled.form `
    .input-field input:focus+label {
        color: ${props => props.theme.secondaryColor} !important;
    }
    .form-control {
        color: ${props => props.theme.secondaryColor} !important;
    }
    .materialize-textarea {
        background-color: ${props => props.theme.primaryColor} !important;
    }

    /* label underline focus color */

    .row .input-field input:focus {
        border-bottom: 1px solid ${props => props.theme.secondaryColor} !important;
        box-shadow: 0 1px 0 0 ${props => props.theme.secondaryColor} !important;
        color: ${props => props.theme.secondaryColor} !important;
    }

    input:not([type]),
    input[type=text]:not(.browser-default),
    input[type=password]:not(.browser-default),
    input[type=email]:not(.browser-default),
    input[type=url]:not(.browser-default),
    input[type=time]:not(.browser-default),
    input[type=date]:not(.browser-default),
    input[type=datetime]:not(.browser-default),
    input[type=datetime-local]:not(.browser-default),
    input[type=tel]:not(.browser-default),
    input[type=number]:not(.browser-default),
    input[type=search]:not(.browser-default),
    textarea.materialize-textarea {

        // Focused input style
        &:focus:not([readonly]) {
            border-bottom: 1px solid ${props => props.theme.secondaryColor};
            box-shadow: 0 1px 0 0 ${props => props.theme.secondaryColor};
            color: ${props => props.theme.secondaryColor};
        }

        // Focused label style
        &:focus:not([readonly])+label {
            color: ${props => props.theme.secondaryColor};
        }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        -webkit-animation: autofill 0s forwards;
        animation: autofill 0s forwards;
    }
     @keyframes autofill {
            100% {
                background: transparent;
                color: inherit;
            }
        }

        @-webkit-keyframes autofill {
            100% {
                background: transparent;
                color: inherit;
            }
        }
`;
/* ---------------------------------------------------- */

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
        portrait: `(min-width: ${breakpoint.mobileL.portrait.minWidth}) and (max-width: ${breakpoint.mobileL.portrait.maxWidth}) and (orientation: portrait)`,
        landscape: `(min-width: ${breakpoint.mobileL.landscape.minWidth}) and (max-width: ${breakpoint.mobileL.landscape.maxWidth}) and (orientation: landscape)`
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