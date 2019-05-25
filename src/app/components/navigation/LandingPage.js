import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LandingPage extends Component {
    render() {
        const {isAuthenticated, user} = this.props.auth;
        const souseUserData = this.props.souseUserData;
        const loggedinUser = user.username;
        return (
            <div class="container">
                <h2>LandingPage</h2>
                {isAuthenticated 
                    ?   <div>
                            <h4>Logged In</h4>
                        </div> 
                    :   <div>
                            <h4>Not Logged In</h4>
                        </div> 
                }
                <div class="usersPosts">
                        {Object.keys(souseUserData)
                            .map((object, i) => (
                                <div>
                                    <Link to={`/${souseUserData[i].username}`}>{souseUserData[i].username}</Link>
                                </div>
                        ))}
                </div>
            </div>
          );
      }
}

LandingPage.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(LandingPage)