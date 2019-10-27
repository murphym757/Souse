import { Twitter } from 'styled-icons/feather/Twitter';
import { Facebook } from 'styled-icons/feather/Facebook';
import { Instagram } from 'styled-icons/feather/Instagram';
import { Delete } from 'styled-icons/feather/Delete';
import { InvertColors } from 'styled-icons/material/InvertColors';
import { Sun } from 'styled-icons/fa-regular/Sun';
import { Moon } from 'styled-icons/fa-regular/Moon';
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
export const DeleteIcon = styled(Delete) `
    & {
        height: 6em;
        width: 6em;
        stroke: ${props => props.theme.white};
        stroke-width: 1;
        fill: ${props => props.theme.secondaryColor};
    }
`;

export const InvertColorsIcon = styled(InvertColors) `
    & {
        height: 6em;
        width: 6em;
        stroke: ${props => props.theme.white};
        stroke-width: 1;
        fill: ${props => props.theme.secondaryColor};
    }
`;

export const SouseStyleSelectorIcon = styled.div `
    .souseStyleImage {
        height: 12vw;
        width: 12vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .souseStyleImageRise {
            -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            @-webkit-keyframes slide-top {
                0% {
                    -webkit-transform: translateY(0);
                            transform: translateY(0);
                }
                100% {
                    -webkit-transform: translateY(-100px);
                            transform: translateY(-100px);
                }
            }
            @keyframes slide-top {
                0% {
                    -webkit-transform: translateY(0);
                            transform: translateY(0);
                }
                100% {
                    -webkit-transform: translateY(-100px);
                            transform: translateY(-100px);
                }
            }
        }
        .souseStyleImageClose {
            -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
            animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
            @-webkit-keyframes slide-top {
                0% {
                -webkit-transform: translateY(0);
                        transform: translateY(0);
                }
                100% {
                -webkit-transform: translateY(-100px);
                        transform: translateY(-100px);
                }
            }
            @keyframes slide-top {
                0% {
                -webkit-transform: translateY(0);
                        transform: translateY(0);
                }
                100% {
                -webkit-transform: translateY(-100px);
                        transform: translateY(-100px);
                }
            }
        }
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
        .souseStyleImage {
            height: 20vw;
            width: 20vw;
        }
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        .souseStyleImage {
            height: 20vw;
            width: 20vw;
        }
    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
        .souseStyleImage {
            height: 20vw;
            width: 20vw;
        }
    }
    @media ${souseMediaQueries.mobileM.landscape} {
        .souseStyleImage {
            height: 20vw;
            width: 20vw;
        }
    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
        .souseStyleImage {
            height: 20vw;
            width: 20vw;
        }
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        .souseStyleImage {
            height: 20vw;
            width: 20vw;
        }
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        .souseStyleImage {
            height: 20vw;
            width: 20vw;
        }
    }
    @media ${souseMediaQueries.tablet.landscape} {
        .souseStyleImage {
            height: 9vw;
            width: 9vw;
        }
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        .souseStyleImage {
            width: 13vw;
            height: 13vw;
        }
    }
    @media ${souseMediaQueries.laptop.landscape} {
        .souseStyleImage {
            height: 9vw;
            width: 9vw;
        }
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
        .souseStyleImage {
            height: 9vw;
            width: 9vw;
        }
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        .souseStyleImage {
            height: 9vw;
            width: 9vw;
        }
    } 
`
/* ----------------------------------------- */

// Theme Selector Chips
/* ---------------------------------------------------- */
export const SouseDefaultChip = styled.div `
    background: rgb(228, 209, 209) !important;
    border: rgb(196, 87, 88) solid;

    .chipFont {
        color: rgb(196, 87, 88) !important;
        font-weight: 600;
    }
`;
export const SouseIMChip = styled.div `
    background: rgb(247, 181, 205) !important;
    border: rgb(255, 255, 255) solid;

    .chipFont {
        color: rgb(35, 31, 32) !important;
        font-weight: 600;
    }
`;
export const SouseFPChip = styled.div `
    background: rgb(44, 65, 96) !important; 
    border: rgb(255, 255, 255) solid;

    .chipFont {
        color: rgb(188, 153, 86) !important;
        font-weight: 600;
    }
`;
export const SouseViceChip = styled.div `
    background: rgb(255, 255, 255) !important;   
    border: rgb(65,182,230) solid;

    .chipFont {
        color: rgb(100, 195, 167) !important;
        font-weight: 600;
    }
`;
export const SouseVapeChip = styled.div `
    background: rgb(226, 226, 226) !important; 
    border: rgb(255, 181, 198) solid;

    .chipFont {
        color: rgb(255, 181, 198) !important;
        font-weight: 600;
    }
`;
/* ---------------------------------------------------- */
export const SouseImageSwitchComboHide = styled.div `
    position: absolute;
    top: 5.5vw;
    z-index: -1;
`;
export const SouseImageSwitchComboShow = styled.div `
    position: absolute;
    top: 5.5vw;
    z-index: 2;
    .switchFadeIn {
        -webkit-animation: fade-in 3.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 4.5s both;
                animation: fade-in 3.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 4.5s both;
        @-webkit-keyframes fade-in {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes fade-in {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
`;

export const SunIcon = styled(Sun) `
    & {
        height: 2em;
        width: 2em;
        stroke: ${props => props.theme.white};
        stroke-width: 1;
        fill: ${props => props.theme.secondaryColor};
    }
`;

export const MoonIcon = styled(Moon) `
    & {
        height: 2em;
        width: 2em;
        stroke: ${props => props.theme.white};
        stroke-width: 1;
        fill: ${props => props.theme.secondaryColor};
    }
`;