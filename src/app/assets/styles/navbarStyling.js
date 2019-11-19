import styled from 'styled-components';
import { User } from 'styled-icons/feather/User';
import { LogOut } from 'styled-icons/feather/LogOut';
import { souseMediaQueries } from './mediaQueries';

export const LoggedInUserIcon = styled(User) `
    color: ${props => props.theme.secondaryColor};
    height: 4em;
    width: 2em;
`;

export const LogoutUserIcon = styled(LogOut) `
    color: ${props => props.theme.secondaryColor};
    height: 4em;
    width: 2em;
`;

export const SouseSideNav = styled.ul `
        background-color: ${props => props.theme.primaryColor} !important;
        color: ${props => props.theme.secondaryColor} !important;
            & li > a {
            color: ${props => props.theme.secondaryColor} !important;
        }
`;

export const SouseNav = styled.nav `
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
`;