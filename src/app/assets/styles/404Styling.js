import styled from 'styled-components';
import { souseMediaQueries } from './mainStyling';

export const ErrorFont = styled.h1 `
    position: absolute;
    top: 50%; 
    right: 50%;
    transform: translate(50%,-50%);
    text-transform: uppercase;
    letter-spacing: 15px;
    font-size: 12em;
    font-weight: 700;
    color: ${props => props.theme.primaryColor};
    -webkit-text-stroke: 2px ${props => props.theme.secondaryColor};
    text-shadow: 
        1px 1px 1px ${props => props.theme.secondaryColor},
        2px 1px 1px ${props => props.theme.secondaryColor},
        3px 2px 1px ${props => props.theme.secondaryColor},
        4px 2px 1px ${props => props.theme.secondaryColor},
        5px 3px 1px ${props => props.theme.secondaryColor},
        6px 3px 1px ${props => props.theme.secondaryColor},
        7px 4px 1px ${props => props.theme.secondaryColor},
        8px 4px 1px ${props => props.theme.secondaryColor},
        9px 5px 1px ${props => props.theme.secondaryColor},
        10px 5px 1px ${props => props.theme.secondaryColor},
        11px 6px 1px ${props => props.theme.secondaryColor},
        12px 6px 1px ${props => props.theme.secondaryColor},
        13px 7px 1px ${props => props.theme.secondaryColor},
        14px 7px 1px ${props => props.theme.secondaryColor},
        15px 8px 1px ${props => props.theme.secondaryColor},
        16px 8px 1px ${props => props.theme.secondaryColor},
        17px 9px 1px ${props => props.theme.secondaryColor},
        18px 9px 1px ${props => props.theme.secondaryColor},
        19px 10px 1px ${props => props.theme.secondaryColor},
        20px 10px 1px ${props => props.theme.secondaryColor};
`;