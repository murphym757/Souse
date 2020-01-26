import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../server/actions/authentication';
import SouseFooter from './souseFooter';
import {
  SouseSideNav,
  SouseNav, 
  LoggedInUserIcon,
  LogoutUserIcon
} from '../../assets/styles/navbarStyling';
import {
  souseDefaultLogo,
  souseIMLogo,
  souseFPLogo,
  souseViceLogo,
  souseVapeLogo
} from '../../assets/images/souseLogos';
import M from 'materialize-css';

class Navbar extends Component {
  constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const loggedinUsername = user.username;
        const loggedinUserTheme = user.userTheme;
        this.state = {
            navbarImage: "",
            currentTheme: "souseDefaultTheme"
        };
        
    }
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
    window.location.reload();
  }

  componentDidMount() {
    M.Autocomplete.init(this.autocomplete);
    { /* Theme Finder */}
    const {isAuthenticated, user} = this.props.auth;
    const userThemeOG = user.userTheme;
    let theme1 = "souseDefaultTheme";
    let theme2 = "souseIMTheme";
    let theme3 = "souseFPTheme";
    let theme4 = "souseViceTheme";
    let theme5 = "souseVapeTheme";
    let theme1Image = souseDefaultLogo;
    let theme2Image = souseIMLogo;
    let theme3Image = souseFPLogo;
    let theme4Image = souseViceLogo;
    let theme5Image = souseVapeLogo;
    if (isAuthenticated) {
        let currentTheme = userThemeOG;
        if (currentTheme == theme1) {
            this.setState({navbarImage: theme1Image});
        } else if (currentTheme == theme2) {
            this.setState({navbarImage: theme2Image});
        } else if (currentTheme == theme3) {
            this.setState({navbarImage: theme3Image});
        } else if (currentTheme == theme4) {
            this.setState({navbarImage: theme4Image});
        } else if (currentTheme == theme5) {
            this.setState({navbarImage: theme5Image});
        } else if (currentTheme == undefined) {
            this.setState({navbarImage: theme1Image});
        } 
    } else {
        this.setState({navbarImage: theme1Image});
    }
  }
  
    render() {
      const {isAuthenticated, user} = this.props.auth;
      const loggedinUser = user.username;
      const loggedinUserImage = user.userImage;
      const loggedInLinks = (
        <div>
          <li><Link class="sidenav-close" to={`/${loggedinUser}`} onClick={() => window.location.refresh()}><LoggedInUserIcon /></Link></li>
          <li><a class="sidenav-close logoutClose" onClick={this.onLogout.bind(this)}><LogoutUserIcon /></a></li>
        </div>
      )
      const guestLinks = (
        <div>
          <li><Link class="sidenav-close" to="/signup">Sign Up</Link></li>
          <li><Link class="sidenav-close" to="/login">Login</Link></li>
        </div>
      )
      const navbarImage = this.state.navbarImage;
        return (
            <div>
              <div class="navbar-fixed">
                <SouseNav className="z-depth-0">
                  <div class="nav-wrapper container">
                    <div class="container">
                      <Link class="brand-logo left d-md-none py-3 pl-4" to="/">
                        <img 
                            class="souseHomeLogo-navbar" 
                            src={navbarImage}
                            width="125" 
                            alt="logo" 
                        />
                      </Link>
                    </div>
                    <Link class="brand-logo left d-none d-md-block pl-3 py-3 px-4" to="/">
                      <img 
                          class="souseHomeLogo-navbar" 
                          src={navbarImage}
                          width="125" 
                          alt="logo" 
                      />
                    </Link>
                    <ul class="right"> 
                      {isAuthenticated ? loggedInLinks : guestLinks}
                    </ul>
                  </div>
                </SouseNav>
              </div>
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