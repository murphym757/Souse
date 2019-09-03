import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserPage from '../userProfile/usersPage';

class LandingPage extends Component {
    userFinder() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserId = user.id;
        const souseUserData = this.props.souseUserData;
        const souseUserList = ["" + loggedinUserId + ""],
            souseUsersList = new Set(souseUserList),
            souseFilterUserData = souseUserData.filter(souseUsersData => souseUsersList.has(souseUsersData._id));
        console.log(souseFilterUserData);
        return souseFilterUserData;
    }

    postFinder() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserId = user.id;
        const sousePostData = this.props.sousePostData;
        const sousePostList = ["" + loggedinUserId + ""],
            sousePostsList = new Set(sousePostList),
            souseFilterPostData = sousePostData.filter(sousePostsData => sousePostsList.has(sousePostsData.postCreator));
        console.log(souseFilterPostData);
        return souseFilterPostData;
    }

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

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const souseUserData = this.props.souseUserData;
        const loggedinUser = user.username;
        const loggedinUserId = user.id;
        const postsTotal = "" + this.postFinder().length + "";
        const followersTotal = "" + this.followerFinder().length + "";
        const followsTotal = "" + this.followFinder().length + "";
        return (
            <div class="container-fluid">
                {Object.keys(this.userFinder())
                    .map((object, i) => (
                        <div class="container">
                            <div class="row d-flex justify-content-center">   {/* Image Row */}
                                <img class="souseUserIconUserHomePage" 
                                    src = {this.userFinder()[i].userImage}
                                    alt="souseUserIcon"
                                    width="85px" 
                                    height="85px"/>
                            </div>
                                <div class="row d-flex justify-content-center">   {/* Username Row */}
                                <h2>{this.userFinder()[i].username}</h2>
                            </div>
                            <div class="row d-flex justify-content-center">   {/* Follow/Follower Row */}
                                <div class="col-4">
                                    <h4 class="float-right">{postsTotal} Posts</h4>
                                </div>
                                <div class="col-4">
                                    <h4 class="d-flex justify-content-center">{followersTotal} Followers</h4>
                                </div>
                                <div class="col-4">
                                    <h4 class="float-left">{followsTotal} Follows</h4>
                                </div>
                            </div>
                             {Object.keys(this.userFinder())
                                .map((object, i) => (
                                    <div>
                                        <Link to={
                                            {
                                                pathname: `/${this.userFinder()[i].username}`,
                                                state: {
                                                    souseUserId: this.userFinder()[i]._id,
                                                    souseUserUsername: this.userFinder()[i].username,
                                                    souseUserFirstName: this.userFinder()[i].firstName,
                                                    souseUserLastName: souseUserData[i].lastName,
                                                    souseUserEmail: this.userFinder()[i].email,
                                                    souseUserPassword: this.userFinder()[i].password,
                                                    souseUserSignUpDate: this.userFinder()[i].signUpDate,
                                                    souseUserImage: this.userFinder()[i].userImage,
                                                    souseUserTwitter: this.userFinder()[i].userTwitter,
                                                    souseUserFacebook: this.userFinder()[i].userFacebook,
                                                    souseUserInstagram: this.userFinder()[i].userInstagram,
                                                    souseUserLocation: this.userFinder()[i].userLocation,
                                                    souseUserBio: this.userFinder()[i].userBio
                                                }
                                            }
                                        }>
                                            <div class="row d-flex justify-content-center">   {/* Confirmation Button Row */}
                                                <button type="submit" class="waves-effect waves-light btn-large"><p class="lead buttonFont">Confirm</p></button>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    ))}
                <h2>LandingPage</h2>
                {isAuthenticated 
                    ?   <div class="usersPosts">
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
                    :   <div>
                            <h4>Not Logged In</h4>
                        </div> 
                }
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