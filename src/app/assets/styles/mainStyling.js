import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { souseMediaQueries } from './mediaQueries';
import { SousePostMain } from './postsStyling';

export const SouseCenterContainer = styled.div `
    /* col-12 */
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;

     /* mx-auto */
    margin-right: auto;
    margin-left: auto;

     /* my-auto */
    margin-top: auto;
    margin-bottom: auto;

     /* p-0 */
    padding: 0px !important;
`;

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

export const ErrorFont = styled.h6 `
    color: ${props => props.theme.white};
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
    .input-field>label {
        color: ${props => props.theme.secondaryColor} !important;
    }
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
        border-bottom: 1px solid ${props => props.theme.secondaryColor};

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