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
            souseUserSignUpDate
        } = this.props.location.state;
        const usernameFinder = window.location.pathname;
        const usernameFound = usernameFinder.slice(1);
        const twitterUsername = "SeaP305";
        const twitterUsernameURL = "https://mobile.twitter.com/" + twitterUsername + "";
        const facebookUsername = null;
        const facebookUsernameURL = "https://www.facebook.com/" + facebookUsername + "/";
        const instagramUsername = "seapanther_305";
        const instagramUsernameURL = "https://www.instagram.com/" + instagramUsername + "/";
        const userImage = "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg";
        const userLocation = "Miami";
        const userBio = "Hi my name is my name. duh! :)";
        
        
        this.state = {
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
            creatorBio: userBio
        };
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
        const TwitterIcon = styled(Twitter)
        `
            color: blue;
            height: 1.1em;
            width: 1.5em;
            `;
        const FacebookIcon = styled(Facebook)
        `
            color: blue;
            height: 1.1em;
            width: 1.5em;
        `;
        const InstagramIcon = styled(Instagram)
        `
            color: blue;
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
                        <div class="profilePageUserData d-flex justify-content-center"> {/* User Data Section */}
                            <div class="container-fluid">
                                <div class="row col-12 userNameRow">
                                    <h2 class="d-flex justify-content-center">{creatorUsername}</h2>
                                    {isAuthenticated && creatorId == loggedInUserId 
                                        ?   <Link to={
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
                                        :   <div></div>
                                    }
                                </div>
                                <div class="row col-12 userNumericDataRow">
                                    {this.state.totalDisplay === postsTotal
                                        ?   <h6 class="col d-flex justify-content-center">{postsTotal} post</h6>
                                        :   <h6 class="col d-flex justify-content-center">{postsTotal} posts</h6>
                                    }
                                </div>
                                <div class="row userAltContactRow">
                                    <div class="container-fluid">
                                        <div class="row">
                                            {this.state.creatorTwitter === null
                                                ? <div></div>
                                                : <h6 class="col-12 d-flex justify-content-center">
                                                    <a href={this.state.creatorTwitterURL} target="_blank">
                                                        <TwitterIcon /> {this.state.creatorTwitter}</a>
                                                </h6>
                                            }
                                            {this.state.creatorFacebook === null
                                                ? <div></div>
                                                : <h6 class="col-12 d-flex justify-content-center">
                                                    <a href={this.state.creatorFacebookURL} target="_blank">
                                                        <FacebookIcon /> {this.state.creatorFacebook}</a>
                                                </h6>
                                            }
                                            {this.state.creatorInstagram === null
                                                ? <div></div>
                                                : <h6 class="col-12 d-flex justify-content-center">
                                                    <a href={this.state.creatorInstagramURL} target="_blank">
                                                        <InstagramIcon /> {this.state.creatorInstagram}</a>
                                                </h6>
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