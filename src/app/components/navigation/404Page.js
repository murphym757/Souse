import React, { Component } from 'react';
import {
  ErrorFont
} from '../../assets/styles/404Styling';

export default class RouteNotFound extends Component {
    render() {
        const Page404 = ({ location }) => (
        <div>
          <h2>No match found for <code>{location.pathname}</code></h2>
        </div>
      );
        return (
            <div class="container">
                <ErrorFont class="d-flex justify-content-center fadeInError">404</ErrorFont>
                {Page404}
            </div>
          );
      }
}