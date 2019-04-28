import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Footer from './navigation/footer';
import LoginForm from './registration/loginForm';
import SignUpForm from './registration/signUpForm';
import LandingPage from './navigation/LandingPage';
import UserProfile from './userProfile/userProfile';
import RouteNotFound from './navigation/404Page';
import Navbar from './navigation/navbar';
import PostPage from './posts/postsPage';
import PostEdit from './posts/postEditForm';

class MainSource extends Component {
    render() {
      const {isAuthenticated, user} = this.props.auth;
        return (
            <Router>
              <div>
                <Navbar />
                  <div class="container">
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                        <Route exact path="/signup" component={SignUpForm}/>
                        <Route exact path="/login" component={LoginForm}/>
                        <Route exact path="/:username" component={UserProfile}/>
                        <Route exact path="/p/:id" component={PostPage}/>
                        <Route exact path="/p/edit/:id" component={PostEdit}/>
                        <Route component={RouteNotFound} />
                    </Switch>
                    <div class="fixed-bottom">
                      <Footer />
                  </div>
                  </div>
              </div>
            </Router>
        );
    }
}
MainSource.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(MainSource)


  