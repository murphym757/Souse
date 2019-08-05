import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserProfile from '../userProfile/userProfile';

class LandingPage extends Component {
    followFinder() {
        const souseFollowData = this.props.souseFollowData;
        const filteredFollowData = Object.keys(souseFollowData).filter((i) => { // Finds Specific Post
                return souseFollowData[i].initiatedFollowuserId === "" + loggedinUserId + ""
            }),
            followIdFinder = Object.keys(souseFollowData).map((object, i) => {
                return souseFollowData[filteredFollowData]._id
            }),
            followId = followIdFinder.find((i) => {
                return "" + followIdFinder[0] + ""
            });
    }

    followerFinder() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserId = user.id;
        const souseFollowerData = this.props.souseFollowerData;
        const filteredFollowerData = Object.keys(souseFollowerData).filter((i) => { // Finds Specific Post
                return souseFollowerData[i].receivedFollowUserId === "" + loggedinUserId + ""
            }),
            followerIdFinder = Object.keys(souseFollowerData).map((object, i) => {
                return souseFollowerData[filteredFollowerData]._id
            }),
            followerId = followerIdFinder.find((i) => {
                return "" + followerIdFinder[0] + ""
            });
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const souseUserData = this.props.souseUserData;
        const loggedinUser = user.username;
        const loggedinUserId = user.id;
        return (
            <div class="container-fluid">
                <h2>LandingPage</h2>
                {isAuthenticated 
                    ?   <div>
                            <h4>{loggedinUser}</h4>
                        </div> 
                    :   <div>
                            <h4>Not Logged In</h4>
                        </div> 
                }
                <div class="usersPosts">
                        {Object.keys(souseUserData)
                            .map((object, i) => (
                                <div>
                                    <Link to={
                                        {
                                            pathname: `/${souseUserData[i].username}`,
                                            state: {
                                                souseUserId: souseUserData[i]._id,
                                                souseUserUsername: souseUserData[i].username,
                                                souseUserFirstName: souseUserData[i].firstName,
                                                souseUserLastName: souseUserData[i].lastName,
                                                souseUserEmail: souseUserData[i].email,
                                                souseUserPassword: souseUserData[i].password,
                                                souseUserSignUpDate: souseUserData[i].signUpDate,
                                                souseUserImage: souseUserData[i].userImage,
                                                souseUserTwitter: souseUserData[i].userTwitter,
                                                souseUserFacebook: souseUserData[i].userFacebook,
                                                souseUserInstagram: souseUserData[i].userInstagram,
                                                souseUserLocation: souseUserData[i].userLocation,
                                                souseUserBio: souseUserData[i].userBio
                                            }
                                        }
                                    }>
                                        {souseUserData[i].username}
                                    </Link>
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