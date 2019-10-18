import { Twitter } from 'styled-icons/feather/Twitter';
import { Facebook } from 'styled-icons/feather/Facebook';
import { Instagram } from 'styled-icons/feather/Instagram';
import styled from 'styled-components';
import { souseMediaQueries } from './mainStyling';

// Username and General Info
/* ---------------------------------------------------- */
 export const UsernameUserPage = styled.h2 `
    color: ${props => props.theme.secondaryColor};
    font-weight: 600;
`;
 export const UserDataUserPage = styled.h5 `
    color: ${props => props.theme.secondaryColor};
`;
/* ---------------------------------------------------- */

// User Image
/* ---------------------------------------------------- */
export const SouseUserPageIcon = styled.div `
    .souseUserPageImage {
        height: 15vw;
        width: 15vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .userHomePageImageBorder {
        padding: 0rem;
        border: 0.3rem solid ${props => props.theme.secondaryColor};
    } 
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
        .souseUserPageImage {
            height: 100vw;
            width: 100vw;
        }
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        .souseUserPageImage {
            height: 36vw;
            width: 36vw;
        }
    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
        .souseUserPageImage {
            height: 100vw;
            width: 100vw;
        }
    }
    @media ${souseMediaQueries.mobileM.landscape} {
        .souseUserPageImage {
            height: 36vw;
            width: 36vw;
        }
    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
        .souseUserPageImage {
            height: 100vw;
            width: 100vw;
        }
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        .souseUserPageImage {
            height: 47vw;
            width: 47vw;
        }
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        .souseUserPageImage {
            height: 40vw;
            width: 40vw;
        }
    }
    @media ${souseMediaQueries.tablet.landscape} {
        .souseUserPageImage {
            height: 40vw;
            width: 40vw;
        }
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        .souseUserPageImage {
            width: 40vw;
            height: 40vw;
        }
    }
    @media ${souseMediaQueries.laptop.landscape} {
        .souseUserPageImage {
            height: 15vw;
            width: 15vw;
        }
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
        .souseUserPageImage {
            height: 15vw;
            width: 15vw;
        }
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        .souseUserPageImage {
            height: 15vw;
            width: 15vw;
        }
    } 
    /* ----------------------------------------- */
`;
/* ---------------------------------------------------- */

// Bio Section
/* ---------------------------------------------------- */
export const TwitterIcon = styled(Twitter) `
    & {
        height: 2em;
        width: 2em;
        stroke: ${props => props.theme.white};
        stroke-width: 1;
        fill: ${props => props.theme.secondaryColor};
    }
`;
export const FacebookIcon = styled(Facebook) `
    & {
        height: 2em;
        width: 2em;
        stroke: ${props => props.theme.white};
        stroke-width: 1;
        fill: ${props => props.theme.secondaryColor};
    }
`;
export const InstagramIcon = styled(Instagram) `
    & {
        height: 2em;
        width: 2em;
        stroke: ${props => props.theme.white};
        stroke-width: 1;
        fill: ${props => props.theme.secondaryColor};
    }
`;
export const UserBio = styled.h5 `
    &::first-letter {
        font-size: 200%;
    }
`;
/* ---------------------------------------------------- */

// User's Posts
/* ---------------------------------------------------- */
export const UserPostIcons = styled.img `
    .souseUserPostsUserHomePage {
        object-fit: cover;
        width: 15vw;
        height: 15vw;
    }
    &:hover {
        border: 1px solid ${props => props.theme.secondaryColor};
    }
`;
/* ---------------------------------------------------- */

// User's Options
/* ---------------------------------------------------- */
export const UserPageOptionsH5 = styled.h5 `
        color: ${props => props.theme.secondaryColor};
        font-weight: 600;
`;
export const UserPageOptionsH5Selected = styled.h5 `
        color: ${props => props.theme.white};
        font-weight: 600;
`;


export const UserPageOptionsUL = styled.ul `
        padding: 0;
        list-style: none;
        display: inline-flex;
        text-align: center;
    
`;

export const UserPageOptionsLI = styled.li `
        display: table-cell;
        position: relative;
        padding: 15px 0;
`;

export const UserPageOptionsLink = styled.a `
        color: ${props => props.theme.white};
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.15em;
        display: inline-block;
        padding: 0.5rem 1rem;
        position: relative;
        &:after {
            background: none repeat scroll 0 0 transparent;
            bottom: 0;
            content: "";
            display: block;
            height: 2px;
            left: 50%;
            position: absolute;
            background: ${props => props.theme.white};
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
        }
        &:hover:after {
            width: 100%;
            left: 0;
        }  
`;
/* ---------------------------------------------------- */

// Search User Info
/* ---------------------------------------------------- */
export const SouseSearchUserIcon = styled.div `
    .souseUserSearchImage {
        border-radius: 50%;
        height: 4vw;
        width: 4vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .userHomeSearchImageBorder {
        padding: 0rem;
        border: 0.1rem solid ${props => props.theme.secondaryColor};
    }            
`;
/* ---------------------------------------------------- */

/* editUserProfile.js */

export const EditUserProfileOptionsFont = styled.h4 `
    color: ${props => props.theme.secondaryColor};
    font-weight: 600;

`;