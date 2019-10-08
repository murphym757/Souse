import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    body {
        display: table;
        width: 100%;
        height: auto;
        background: no-repeat bottom center scroll;
        background-blend-mode: multiply;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }    
    
    a {
        color: ${props => props.theme.primaryColor};
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
    }
    
    nav ul a {
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
    }
`