import styled from 'styled-components';
import { souseMediaQueries } from './mediaQueries';

export const IphoneContainer = styled.div `
        /* my-auto */
        margin-top: auto !important;
        margin-bottom: auto !important;
        /* mx-auto */
        margin-right: auto !important;
        margin-left: auto !important;
        /* justify-content-start */
        -webkit-box-pack: start !important;
        justify-content: flex-start !important;
        /* d-flex */
        display: flex !important; 

    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
        padding-top: 14vw;
        display: flex !important;
        -webkit-box-pack: center !important;
        justify-content: center !important;
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        display: flex !important;
        -webkit-box-pack: center !important;
        justify-content: center !important;
    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
        padding-top: 4vw;
        display: flex !important;
        -webkit-box-pack: center !important;
        justify-content: center !important;
    }
    @media ${souseMediaQueries.mobileM.landscape} {
        display: flex !important;
        -webkit-box-pack: center !important;
        justify-content: center !important;
    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
        padding-top: 14vw;
        display: flex !important;
        -webkit-box-pack: center !important;
        justify-content: center !important;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        height: 30vw;
        display: flex !important;
        -webkit-box-pack: center !important;
        justify-content: center !important;
    } 
    /* Large Mobile Phones (Max) */
    @media ${souseMediaQueries.mobileLMax.portrait} {
        padding-top: 14vw;
        display: flex !important;
        -webkit-box-pack: center !important;
        justify-content: center !important;
    }
    @media ${souseMediaQueries.mobileLMax.landscape} {
        height: 30vw;
        display: flex !important;
        -webkit-box-pack: center !important;
        justify-content: center !important;
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        /* justify-content-end */
        -webkit-box-pack: end !important;
        justify-content: flex-end !important;
    }
    @media ${souseMediaQueries.tablet.landscape} {
        /* justify-content-end */
        -webkit-box-pack: end !important;
        justify-content: flex-end !important;
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        /* justify-content-end */
        -webkit-box-pack: end !important;
        justify-content: flex-end !important;
    }
    @media ${souseMediaQueries.laptop.landscape} {
        /* justify-content-end */
        -webkit-box-pack: end !important;
        justify-content: flex-end !important;
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
        /* justify-content-end */
        -webkit-box-pack: end !important;
        justify-content: flex-end !important;
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        /* justify-content-end */
        -webkit-box-pack: end !important;
        justify-content: flex-end !important;
    } 
`;

export const IphoneOuterImage = styled.img `
    z-index: 2;
    height: 30em;
    width: 20em;
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait} {
        height: 60vw;
        width: 40vw;
    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait} {
        height: 70vw;
        width: 50vw;
    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
        height: 110vw;
        width: 80vw;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        height: 30vw;
        width: 20vw;
    }
     /* Large Mobile Phones (Max) */
    @media ${souseMediaQueries.mobileLMax.portrait} {
        height: 110vw;
        width: 80vw;
    }
    @media ${souseMediaQueries.mobileLMax.landscape} {
        height: 30vw;
        width: 20vw;
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        height: 60vw;
        width: 50vw;

    }
`;

export const FormContainer = styled.div `
        /* mx-auto */
        margin-right: auto !important;
        margin-left: auto !important;
        /* justify-content-end */
        -webkit-box-pack: center !important;
        justify-content: center !important;
        /* d-block */
        display: block !important; 
    /* Media Queries */
    /* ----------------------------------------- */
    /* Small Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait},
        ${souseMediaQueries.mobileM.portrait},
        ${souseMediaQueries.tablet.portrait},
        ${souseMediaQueries.laptop.portrait} {
        height: 75vw;
    }
    @media ${souseMediaQueries.mobileS.landscape} {
        
    } 
    /* Medium Mobile Phones */
    @media ${souseMediaQueries.mobileM.portrait},
            ${souseMediaQueries.tablet.portrait},
            ${souseMediaQueries.laptop.portrait} {
                height: 55vw;
    }
    @media ${souseMediaQueries.mobileM.landscape} {
        
    } 
    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileL.portrait} {
        height: 90vw;
    }
    @media ${souseMediaQueries.mobileL.landscape} {
        height: 30vw;
    } 
    /* Large Mobile Phones (Max) */
    @media ${souseMediaQueries.mobileLMax.portrait} {
        height: 90vw;
    }
    @media ${souseMediaQueries.mobileLMax.landscape} {
        height: 30vw;
    } 
    /* Tablets */
    @media ${souseMediaQueries.tablet.portrait} {
        margin-top: auto !important;
        margin-bottom: auto !important;
        height: 15vw;
    }
    @media ${souseMediaQueries.tablet.landscape} {
        margin-top: auto !important;
        margin-bottom: auto !important;
    } 
    /* Laptops and Large Tablets */
    @media ${souseMediaQueries.laptop.portrait} {
        margin-top: auto !important;
        margin-bottom: auto !important;
        height: 20vw;
    }
    @media ${souseMediaQueries.laptop.landscape} {
        margin-top: auto !important;
        margin-bottom: auto !important;
    } 
    /* Large Laptops */
    @media ${souseMediaQueries.laptopL.landscape} {
        margin-top: auto !important;
        margin-bottom: auto !important;
    } 
    /* Desktops */
    @media ${souseMediaQueries.desktop.landscape} {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }

    /* Large Mobile Phones */
    @media ${souseMediaQueries.mobileS.portrait},
        ${souseMediaQueries.mobileM.portrait},
        ${souseMediaQueries.mobileL.portrait},
        ${souseMediaQueries.mobileLMax.portrait},
        ${souseMediaQueries.tablet.portrait} {
        padding: 0px !important;
        margin-right: 0px !important;
        margin-left: 0px !important;
    }
    @media ${souseMediaQueries.laptop.portrait} {
        padding: 0px !important;
        margin-right: 0px !important;
        margin-left: 0px !important;
    }
    @media ${souseMediaQueries.mobileL.landscape},
            ${souseMediaQueries.mobileLMax.landscape},
            ${souseMediaQueries.mobileS.landscape} {
        margin-top: auto !important;
        margin-bottom: auto !important;
    }
`;

export const SouseColumn = styled.div `
    /* Col-12 */
    @media ${souseMediaQueries.mobileS.portrait},
        ${souseMediaQueries.mobileM.portrait},
        ${souseMediaQueries.mobileL.portrait},
        ${souseMediaQueries.mobileLMax.portrait},
        ${souseMediaQueries.tablet.portrait},
        ${souseMediaQueries.laptop.portrait} {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
    }
    /* Col-4 */
    @media ${souseMediaQueries.mobileS.landscape},
        ${souseMediaQueries.mobileM.landscape},
        ${souseMediaQueries.mobileL.landscape},
        ${souseMediaQueries.mobileLMax.landscape},
        ${souseMediaQueries.tablet.landscape},
        ${souseMediaQueries.laptop.landscape},
        ${souseMediaQueries.laptopL.landscape},
        ${souseMediaQueries.desktop.landscape} {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
            position: relative;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
    }
`;