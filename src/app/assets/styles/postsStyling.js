import styled from 'styled-components';
import { Close } from 'styled-icons/material/Close';

export const CloseIcon = styled(Close) `
    color: ${props => props.theme.secondaryColor};
    height: 1.1em;
    width: 1.5em;
`;