import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Close } from 'styled-icons/material/Close';
import { souseMediaQueries } from './mediaQueries';

export const CommentsUserIcon = styled.img `
    border-radius: 50%;
    border: 0.25em solid ${props => props.theme.secondaryColor};
    position: relative;
    height: 2.5vw;
    width: 2.5vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
        height: 14vw;
        width: 14vw;
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        height: 7vw;
        width: 7vw;
    }
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
        height: 14vw;
        width: 14vw;
    }
    @media ${souseMediaQueries.mobileM.landscape} {
        height: 7vw;
        width: 7vw;
    }
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
        height: 12vw;
        width: 12vw;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        height: 8vw;
        width: 8vw;
    } 
    /* Large Mobile Phones (Max) */
    @media ${souseMediaQueries.mobileLMax.portrait} {
        height: 12vw;
        width: 12vw;
    }
    @media ${souseMediaQueries.mobileLMax.landscape} {
        height: 8vw;
        width: 8vw;
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        height: 10vw;
        width: 10vw;
    }
    @media ${souseMediaQueries.tablet.landscape} {
        height: 8vw;
        width: 8vw;
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        height: 8vw;
        width: 8vw;
    }
    @media ${souseMediaQueries.laptop.landscape} {
        height: 5.5vw;
        width: 5.5vw;
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
        height: 4vw;
        width: 4vw;
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        height: 2.5vw;
        width: 2.5vw;
    } 
    /* ----------------------------------------- */
`;

export const CommentCreatorFont = styled(Link) `
    font-size: 1.2em;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: ${props => props.theme.secondaryColor};
    }
`;

export const CommentCaptionFont = styled.h6 `
    font-size: 1em;
`;

export const CommentDeleteIcon = styled(Close) `
    color: ${props => props.theme.secondaryColor};
    height: 1.1em;
    width: 1.5em;
`;