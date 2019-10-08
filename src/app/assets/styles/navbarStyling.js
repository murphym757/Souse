import styled from 'styled-components';
import { User } from 'styled-icons/feather/User';
import { LogOut } from 'styled-icons/feather/LogOut';

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
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
        & li > a {
        color: $secondaryColor;
    }
`;

export const SouseNav = styled.nav `
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
`;