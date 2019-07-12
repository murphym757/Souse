import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './server/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './server/setAuthToken';
import { setCurrentUser, logoutUser } from './server/actions/authentication';
import MainSource from './app/components/main.js';

import 'materialize-css/dist/css/materialize.min.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrapGrid from '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import bootstrapJs from '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './app/assets/styles/styles.scss';
import fontStyles from './app/assets/styles/fonts.scss';

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}

render(
    <Provider store = {store}>
        <MainSource />
    </Provider>, 
    document.getElementById("app")
    );