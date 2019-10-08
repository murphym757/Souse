import { Twitter } from 'styled-icons/feather/Twitter';
import { Facebook } from 'styled-icons/feather/Facebook';
import { Instagram } from 'styled-icons/feather/Instagram';
import styled from 'styled-components';


// User Image
/* ---------------------------------------------------- */
export const SouseUserPageIcon = styled.div `
    .souseUserPageImage {
        border-radius: 50%;
        height: 12vw;
        width: 12vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .userHomePageImageBorder {
        padding: 0rem;
        border: 0.3rem solid ${props => props.theme.secondaryColor};
    }            
`;
/* ---------------------------------------------------- */

// Bio Section
/* ---------------------------------------------------- */
export const TwitterIcon = styled(Twitter) `
    color: ${props => props.theme.secondaryColor};
    height: 1.1em;
    width: 1.5em;
`;
export const FacebookIcon = styled(Facebook) `
    color: ${props => props.theme.secondaryColor};
    height: 1.1em;
    width: 1.5em;
`;
export const InstagramIcon = styled(Instagram) `
    color: ${props => props.theme.secondaryColor};
    height: 1.1em;
    width: 1.5em;
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

/* editUserProfile.js */

export const EditUserProfileOptionsFont = styled.h4 `
    color: ${props => props.theme.secondaryColor};
    font-weight: 600;

`;