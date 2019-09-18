import { Twitter } from 'styled-icons/feather/Twitter';
import { Facebook } from 'styled-icons/feather/Facebook';
import { Instagram } from 'styled-icons/feather/Instagram';
import styled from 'styled-components';

export const TwitterIcon = styled(Twitter) `
    color: ${props => props.theme.secondaryColor};
    height: 1.1em;
    width: 1.5em;
`;
export const FacebookIcon = styled(Facebook) `
    color: ${props => props.theme.white};
    height: 1.1em;
    width: 1.5em;
`;
export const InstagramIcon = styled(Instagram) `
    color: ${props => props.theme.white};
    height: 1.1em;
    width: 1.5em;
`;

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