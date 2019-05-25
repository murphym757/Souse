import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../server/actions/authentication';
import M from 'materialize-css';

class Navbar extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  componentDidMount() {
    M.AutoInit();
  }
  
    render() {
      const {isAuthenticated, user} = this.props.auth;
      const loggedinUser = user.username;
      const loggedInLinks = (
        <div>
          <li><a class="sidenav-close logoutClose" onClick={this.onLogout.bind(this)}>Log Out</a></li>
        </div>
      )
      const guestLinks = (
        <div>
          <li><Link class="sidenav-close" to="/signup">Sign Up</Link></li>
          <li><Link class="sidenav-close" to="/login">Login</Link></li>
        </div>
      )
        return (
            <div>
                <nav class="z-depth-0">
                  <div class="nav-wrapper container-fluid">
                    <Link class="brand-logo d-md-none py-3" to="/">
                      <img 
                          class="souseHomeLogo-navbar" 
                          src = "../../src/app/assets/images/souseBigLogo.svg"
                          width="125" 
                          alt="logo" 
                      />
                    </Link>
                    <Link class="brand-logo d-none d-md-block pl-3 py-3 px-4" to="/">
                      <img 
                          class="souseHomeLogo-navbar" 
                          src = "../../src/app/assets/images/souseBigLogo.svg"
                          width="125" 
                          alt="logo" 
                      />
                    </Link>
                    <a href="#" data-target="slide-out" class="sidenav-trigger"><span><i class="fas fa-ellipsis-h"></i></span></a>
                    <ul class="right hide-on-med-and-down"> 
                      {isAuthenticated ? loggedInLinks : guestLinks}
                    </ul>
                  </div>
                </nav>

                <ul class="sidenav" id="slide-out">
                  {isAuthenticated ? loggedInLinks : guestLinks}
                </ul>
            </div>
          );
      }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));