import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { souseMediaQueries } from './mainStyling';

export const CommentsUserIcon = styled.img `
    border-radius: 50%;
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

    }
    @media ${souseMediaQueries.mobileS.landscape} {

    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
        
    }
    @media ${souseMediaQueries.mobileM.landscape} {
       
    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
        height: 12vw;
        width: 12vw;
    }
    @media ${souseMediaQueries.mobileL.landscape} {

    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
       
    }
    @media ${souseMediaQueries.tablet.landscape} {

    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        
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