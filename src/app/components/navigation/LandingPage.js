import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserProfile from '../userProfile/userProfile';

class LandingPage extends Component {
    followFinder() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserId = user.id;
        const souseFollowData = this.props.souseFollowData;
        const souseFollowList = ["" + loggedinUserId + ""],
            souseFollowsList = new Set(souseFollowList),
            souseFilterFollowData = souseFollowData.filter(souseFollowsData => souseFollowsList.has(souseFollowsData.initiatedFollowuserId));
        console.log(souseFilterFollowData);
        return souseFilterFollowData;
}

    followerFinder() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserId = user.id;
        const souseFollowerData = this.props.souseFollowerData;
        const souseFollowerList = ["" + loggedinUserId + ""],
            souseFollowersList = new Set(souseFollowerList),
            souseFilterFollowerData = souseFollowerData.filter(souseFollowersData => souseFollowersList.has(souseFollowersData.receivedFollowUserId));
        console.log(souseFilterFollowerData);
        return souseFilterFollowerData;
    }

    followFinderUsersId() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserId = user.id;
        const souseUserData = this.props.souseUserData;
        const filteredUsernameData = Object.keys(souseUserData).filter( // Finds Username in souseUsersDB and display data from it (Username)
                i => souseUserData[i]._id === "" + postCreatorId + ""
            ),
            postUserNameFinder = Object.keys(souseUserData).map(
                (object, i) => souseUserData[filteredUsernameData].username
            ),
            postUserName = postUserNameFinder.find(
                i => "" + postUserNameFinder[0] + ""
            );
        const followUserId = souseFilterPosts.map(
            
        );
        {Object.keys(this.followerFinder())
            .map((object, i) => (
                <div>
                    <h6>Followers</h6>
                    <h6>{this.followerFinder()[i].followerUserId}</h6>
                </div>
            ))}
    }

    

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const souseUserData = this.props.souseUserData;
        const loggedinUser = user.user;
        const loggedinUserId = user.id;
        return (
            <div class="container-fluid">
                <h2>LandingPage</h2>
                {Object.keys(this.followerFinder())
                    .map((object, i) => (
                        <div>
                            <h6>Followers</h6>
                            <h6>{this.followerFinder()[i].followerUserId}</h6>
                        </div>
                    ))}
                {Object.keys(this.followerFinder())
                    .map((object, i) => (
                        <div>
                            <h6>{this.followerFinder()[i].followerUserId}</h6>
                        </div>
                    ))}
                {isAuthenticated 
                    ?   <div>
                            <h4>{loggedinUserId}</h4>
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