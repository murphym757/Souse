import React, { Component } from 'react';

export default class RouteNotFound extends Component {
    render() {
        const Page404 = ({ location }) => (
        <div>
          <h2>No match found for <code>{location.pathname}</code></h2>
        </div>
      );
        return (
            <div class="container">
                <h2>404</h2>
            </div>
          );
      }
}