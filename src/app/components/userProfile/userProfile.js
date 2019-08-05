import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostIndex from '../posts/postIndex';
import styled from 'styled-components';
import { Twitter } from 'styled-icons/feather/Twitter';
import { Facebook } from 'styled-icons/feather/Facebook';
import { Instagram } from 'styled-icons/feather/Instagram';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUsername = user.username;
        const loggedInUserId = user.id;
        const {
            souseUserId,
            souseUserUsername,
            souseUserFirstName,
            souseUserLastName,
            souseUserEmail,
            souseUserPassword,
            souseUserSignUpDate,
            souseUserImage,
            souseUserTwitter,
            souseUserFacebook,
            souseUserInstagram,
            souseUserLocation,
            souseUserBio
        } = this.props.location.state;
        const usernameFinder = window.location.pathname;
        const usernameFound = usernameFinder.slice(1);
        const twitterUsername = souseUserTwitter;
        const twitterUsernameURL = "https://mobile.twitter.com/" + twitterUsername + "";
        const facebookUsername = souseUserFacebook;
        const facebookUsernameURL = "https://www.facebook.com/" + facebookUsername + "/";
        const instagramUsername = souseUserInstagram;
        const instagramUsernameURL = "https://www.instagram.com/" + instagramUsername + "/";
        const userImage = souseUserImage;
        const userLocation = souseUserLocation;
        const userBio = souseUserBio;
        
        
        this.state = {
            loggedInUserId: loggedInUserId,
            creatorId: souseUserId,
            creatorUsername: souseUserUsername,
            creatorFirstName: souseUserFirstName,
            creatorLastName: souseUserLastName,
            creatorEmail: souseUserEmail,
            creatorPassword: souseUserPassword,
            creatorSignUpDate: souseUserSignUpDate,
            creatorUnixTimestamp: new Date(souseUserSignUpDate).valueOf(),
            totalDisplay: '1',
            creatorImage: userImage,
            creatorTwitter: twitterUsername,
            creatorTwitterURL: twitterUsernameURL,
            creatorFacebook: facebookUsername,
            creatorFacebookURL: facebookUsernameURL,
            creatorInstagram: instagramUsername,
            creatorInstagramURL: instagramUsernameURL,
            creatorLocation: userLocation,
            creatorBio: userBio,
            followerUserId: "", // This is the user who received the follow
            initiatedFollowinguserId: "", // This is the user who pressed "Follow"
            followingUserId: "", // This is the user who pressed "Follow"
            receivedFollowUserId: "" // This is the user who received the follow
        };
        this.onSetFollow = this.onSetFollow.bind(this);
        this.onSetFollower = this.onSetFollower.bind(this);
    }
    postFinder() {
        const souseUserData = this.props.souseUserData;
        const filteredUsernameData = Object.keys(souseUserData).filter((i) => {
                return souseUserData[i].username === "" + this.state.creatorUsername + ""
            }),
            userIdFinder = Object.keys(souseUserData).map((object, i) => {
                return souseUserData[filteredUsernameData]._id
            }),
            userId = userIdFinder.find((i) => {
                return "" + userIdFinder[0] + ""
            });
        const sousePostData = this.props.sousePostData;
        const souseUserList = ["" + userId + ""],
            sousePostsList = new Set(souseUserList),
            souseFilterData = sousePostData.filter(sousePostData => sousePostsList.has(sousePostData.postCreator));
        return souseFilterData;
    }

    onSetFollow = (e) => {
        e.preventDefault();
        const loggedInUserId = this.state.loggedInUserId;
        const creatorId = this.state.creatorId;
        const followData = {
            followUserId: creatorId, // This is the user who received the follow
            initiatedFollowuserId: loggedInUserId, // This is the user who pressed "Follow"
        };
        const apiRoute = "/souseAPI";
        const createRoute = "/follows/add";

        axios.post(apiRoute + createRoute, followData)
            .then(res => console.log(res.data));

        this.setState({
            followUserId: '',
            receivedFollowUserId: ''
        });
    }
    onSetFollower = (e) => {    
        e.preventDefault();
        const loggedInUserId = this.state.loggedInUserId;
        const creatorId = this.state.creatorId;
        const followerData = {
            followerUserId: loggedInUserId, // This is the user who pressed "Follow"
            receivedFollowUserId: creatorId // This is the user who received the follow


        };
        const apiRoute = "/souseAPI";
        const createRoute = "/followers/add";

        axios.post(apiRoute + createRoute, followerData)
            .then(res => console.log(res.data));

        this.setState({
            followerUserId: '',
            initiatedFollowinguserId: ''
        });
        window.location.reload();
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUsername = user.username;
        const loggedInUserId = user.id;
        const loggedInUserFirstname = user.firstName;
        const usernamePage = this.props.match.params.username;
        const creatorId = this.state.creatorId;
        const creatorUsername = this.state.creatorUsername;
        const creatorFirstName = this.state.creatorFirstName;
        const creatorLastName = this.state.creatorLastName;
        const creatorEmail = this.state.creatorEmail;
        const creatorPassword = this.state.creatorPassword;
        const creatorSignUpDate = this.state.creatorSignUpDate;
        const creatorUnixTimestamp = this.state.creatorUnixTimestamp;
        const creatorImage = this.state.creatorImage;
        const creatorTwitter = this.state.creatorTwitter;
        const creatorFacebook = this.state.creatorFacebook;
        const creatorInstagram = this.state.creatorInstagram;
        const creatorLocation = this.state.creatorLocation;
        const creatorBio = this.state.creatorBio;
        const postsTotal = "" + this.postFinder().length + "";
        const followingUserId = "5ca398084064c80a4b0b16a6";
        const TwitterIcon = styled(Twitter)
        `
            color: #c45758;
            height: 1.1em;
            width: 1.5em;
            `;
        const FacebookIcon = styled(Facebook)
        `
            color: #c45758;
            height: 1.1em;
            width: 1.5em;
        `;
        const InstagramIcon = styled(Instagram)
        `
            color: #c45758;
            height: 1.1em;
            width: 1.5em;
        `;
        return (
            <div class="container pt-5"> 
                <div class="row userHeaderSection d-flex justify-content-center">
                    <div class="profilePageUserImage d-flex justify-content-center"> {/* User Image Section */}
                        <div class="souseUserCreatorPage col-6 d-flex">
                            <div class="container-fluid d-flex justify-content-center">
                                <img class="souseUserIconUserHomePage" 
                                    src = {creatorImage}
                                    alt="souseUserIcon"
                                    width="85px" 
                                    height="85px"/>
                            </div>
                        </div>
                        <div class="profilePageUserData col-6 d-flex justify-content-center"> {/* User Data Section */}
                            <div class="container-fluid">
                                <div class="row userNameRow">
                                    <h2 class="d-flex justify-content-center mx-auto">{creatorUsername}</h2>
                                </div>
                                <div class="row userButtonsRow">
                                    {isAuthenticated && creatorId !== loggedInUserId
                                        ?   <div>
                                                {followingUserId == creatorId
                                                    ?   <div>
                                                            <button type="submit" class="waves-effect waves-light btn-large"><p class="lead buttonFont">Unfollow</p></button>
                                                        </div>
                                                    :   <div>
                                                            <button type="submit" class="waves-effect waves-light btn-large" onClick={(e) => {this.onSetFollow(e); this.onSetFollower(e)}}><p class="lead buttonFont">Follow</p></button>
                                                        </div>
                                                }
                                            </div>
                                        :   <Link class="d-block mx-auto" to={
                                                {
                                                    pathname: "/u/edit/" + loggedInUserId,
                                                    state: {
                                                        creatorId: creatorId,
                                                        creatorUsername: creatorUsername,
                                                        creatorFirstName: creatorFirstName,
                                                        creatorLastName: creatorLastName,
                                                        creatorEmail: creatorEmail,
                                                        creatorPassword: creatorPassword,
                                                        creatorSignUpDate: creatorSignUpDate,
                                                        creatorUnixTimestamp: creatorUnixTimestamp,
                                                        creatorImage: creatorImage,
                                                        creatorTwitter: creatorTwitter,
                                                        creatorFacebook: creatorFacebook,
                                                        creatorInstagram: creatorInstagram,
                                                        creatorLocation: creatorLocation,
                                                        creatorBio: creatorBio
                                                    }
                                                }
                                            }>
                                                <button type="submit" class="waves-effect waves-light btn-large"><p class="lead buttonFont">Edit Profile</p></button>
                                            </Link>
                                    }
                                </div>
                                <div class="row userNumericDataRow">
                                    {this.state.totalDisplay === postsTotal
                                        ?   <h6 class="col d-flex justify-content-center">{postsTotal} post</h6>
                                        :   <h6 class="col d-flex justify-content-center">{postsTotal} posts</h6>
                                    }
                                </div>
                                <div class="row userAltContactRow">
                                    <div class="container-fluid">
                                        <div class="row">
                                            {this.state.creatorTwitter === null
                                                ?   <div></div>
                                                :   <div class="col-12">
                                                        <div class="row d-block mx-auto">
                                                            <h5 class="d-flex justify-content-center m-0">
                                                            <a href={this.state.creatorTwitterURL} target="_blank">
                                                                <TwitterIcon /> {this.state.creatorTwitter}</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                            }
                                            {this.state.creatorFacebook === null
                                                ?   <div></div>
                                                :   <div class="col-12">
                                                        <div class="row d-block mx-auto">
                                                            <h5 class="d-flex justify-content-center m-0">
                                                            <a href={this.state.creatorFacebookURL} target="_blank">
                                                                <FacebookIcon /> {this.state.creatorFacebook}</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                            }
                                            {this.state.creatorInstagram === null
                                                ?   <div></div>
                                                :   <div class="col-12">
                                                        <div class="row d-block mx-auto">
                                                            <h5 class="d-flex justify-content-center m-0">
                                                            <a href={this.state.creatorInstagramURL} target="_blank">
                                                                <InstagramIcon /> {this.state.creatorInstagram}</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                            }  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>       
                    </div>
                    <div class="col-12">
                        {isAuthenticated 
                            ? <div>
                                <PostIndex />
                            </div>
                            : <div>
                            </div>
                        }
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="container-fluid">
                        <div class="row pb-2 col d-flex justify-content-center">
                            {Object.keys(this.postFinder()).map((object, i) => {
                                return <div obj={object} key={i}>
                                    <div class="col-12 pb-4">
                                        <Link to={`/p/${this.postFinder()[i]._id}`}>
                                            <div class="img-wrapper">
                                                <div class="img-responsive">
                                                    <div class="souseImageFormat">
                                                        <img class="souseUserPostsUserHomePage" 
                                                        src = {this.postFinder()[i].sousePosts.postImageURL}
                                                        alt="souseUserPosts"
                                                            width="200px" 
                                                            height="200px"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
UserProfile.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(UserProfile)