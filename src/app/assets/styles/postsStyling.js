import styled from 'styled-components';
import { Close } from 'styled-icons/material/Close';
import { Edit } from 'styled-icons/feather/Edit';
import { souseMediaQueries } from './mainStyling';

export const CloseIcon = styled(Close) `
    color: ${props => props.theme.secondaryColor};
    height: 1.1em;
    width: 1.5em;
`;

export const EditIcon = styled(Edit) `
    color: ${props => props.theme.secondaryColor};
    height: 1.1em;
    width: 1.5em;
`;

export const PreScrollable = styled.div `
    max-height: 31.25em; /* 500px */
    overflow-y: auto;
    overflow-x: hidden !important;
`;

// Post Image
/* ---------------------------------------------------- */
export const PostPageImage = styled.img `
        object-fit: cover;
        width: 28vw;
        height: 28vw;
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
        height: 100vw;
        width: 100vw;
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        height: 34vw;
        width: 34vw;
    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
        height: 100vw;
        width: 100vw;
    }
    @media ${souseMediaQueries.mobileM.landscape} {
        height: 30vw;
        width: 30vw;
    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
        height: 100vw;
        width: 100vw;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        height: 34vw;
        width: 34vw;
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        height: 100vw;
        width: 100vw;
    }
    @media ${souseMediaQueries.tablet.landscape} {
        height: 30vw;
        width: 30vw;
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        width: 100vw;
        height: 100vw;
    }
    @media ${souseMediaQueries.laptop.landscape} {
        height: 40vw;
        width: 40vw;
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
        height: 26vw;
        width: 26vw;
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        height: 21vw;
        width: 21vw;
    } 
    /* ----------------------------------------- */
`;
/* ---------------------------------------------------- */

// User Image (Post Page)
/* ---------------------------------------------------- */
export const PostPageIcon = styled.img `
    border-radius: 50%;
    width: 3vw;
    height: 3vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
        height: 16vw;
        width: 16vw;
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        width: 8vw;
        height: 8vw;
        ${PreScrollable} {
            max-height: 6.875em;
        }
    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
        height: 16vw;
        width: 16vw;
    }
    @media ${souseMediaQueries.mobileM.landscape} {
        height: 8vw;
        width: 8vw;
        ${PreScrollable} {
            max-height: 9.375em;
        }
    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
        height: 16vw;
        width: 16vw;
        ${PreScrollable} {
            max-height: 14.0625em;
        }
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        height: 8vw;
        width: 8vw;
        ${PreScrollable} {
            max-height: 9.375em;
        }
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        width: 16vw;
        height: 16vw;

    }
    @media ${souseMediaQueries.tablet.landscape} {
        height: 8vw;
        width: 8vw;
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        width: 7vw;
        height: 7vw;
    }
    @media ${souseMediaQueries.laptop.landscape} {
        height: 6vw;
        width: 6vw;
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
        height: 4vw;
        width: 4vw;
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        height: 3vw;
        width: 3vw;
    } 
    /* ----------------------------------------- */
`;
/* ---------------------------------------------------- */

// Edit Post
/* ---------------------------------------------------- */
export const SouseLabel = styled.label `
    color: ${props => props.theme.secondaryColor};
    font-weight: 600;

`;
/* ---------------------------------------------------- */

export const CommentsLinkFont = styled.h6 `
    font-weight: 800;
    cursor: pointer;
`;

export const PostCreatorName = styled.h5 `
    font-weight: 800;
`;

export const PostLocation = styled.h6 `
    font-weight: 300;
    font-size: 1em;

`;

export const SouseDiv = styled.div `
 /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
        width: 100%;
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        width: 50%;
    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
        width: 100%;
    }
    @media ${souseMediaQueries.mobileM.landscape} {
        width: 50%;
    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
        width: 100%;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        width: 50%;
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        width: 100%;
    }
    @media ${souseMediaQueries.tablet.landscape} {
        width: 50%;
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        width: 100%;
    }
    @media ${souseMediaQueries.laptop.landscape} {
        width: 50%;
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
        width: 50%;
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        width: 50%;
    }
`;

export const CaptionPreScrollable = styled.div `
    max-height: 31.25em; /* 500px */
    overflow-y: auto;
    overflow-x: hidden !important;
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
        
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        max-height: 12vw;
    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
    
    }
    @media ${souseMediaQueries.mobileM.landscape} {
            max-height: 11vw;

    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
            max-height: 51vw;
            width: 100%;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
            max-height: 12vw;
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        

    }
    @media ${souseMediaQueries.tablet.landscape} {
            max-height: 12vw;
    } 
`;

export const CaptionPreScrollableLoggedIn = styled.div `
    max-height: 31.25em; /* 500px */
    overflow-y: auto;
    overflow-x: hidden !important;
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
        
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        max-height: 6.875em;
    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
    
    }
    @media ${souseMediaQueries.mobileM.landscape} {
            max-height: 8.375em;
    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
            max-height: 3em;
            width: 100%;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
            max-height: 3.5em
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
        
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
        
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        
    } 
`;