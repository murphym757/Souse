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
        const userLocation = "Miami";
        const userBio = "Hi my name is my name. duh! :)";
        
        this.state = {
            postCreatorId: souseUserId,
            postCreatorUsername: souseUserUsername,
            postCreatorFirstName: souseUserFirstName,
            postCreatorLastName: souseUserLastName,
            postCreatorPassword: souseUserPassword,
            postCreatorSignUpDate: souseUserSignUpDate,
            postTotalDisplay: '1',
            postCreatorImage: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg",
            postCreatorTwitter: twitterUsername,
            postCreatorTwitterURL: twitterUsernameURL,
            postCreatorFacebook: facebookUsername,
            postCreatorFacebookURL: facebookUsernameURL,
            postCreatorInstagram: instagramUsername,
            postCreatorInstagramURL: instagramUsernameURL,
            postCreatorLocation: userLocation,
            postCreatorBio: userBio
        };
    }
    postFinder() {
        const souseUserData = this.props.souseUserData;
        const filteredUsernameData = Object.keys(souseUserData).filter((i) => {
                return souseUserData[i].username === "" + this.state.postCreatorUsername + ""
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
        const postCreatorId = this.state.postCreatorId;
        const postCreatorUsername = this.state.postCreatorUsername;
        const postCreatorFirstName = this.state.postCreatorFirstName;
        const postCreatorLastName = this.state.postCreatorLastName;
        const postCreatorPassword = this.state.postCreatorPassword;
        const postCreatorSignUpDate = this.state.postCreatorSignUpDate;
        const postCreatorImage = this.state.postCreatorImage;
        const postCreatorTwitter = this.state.postCreatorTwitter;
        const postCreatorFacebook = this.state.postCreatorFacebook;
        const postCreatorInstagram = this.state.postCreatorInstagram;
        const postCreatorLocation = this.state.postCreatorLocation;
        const postCreatorBio = this.state.postCreatorBio;
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
                                    src = {postCreatorImage}
                                    alt="souseUserIcon"
                                    width="85px" 
                                    height="85px"/>
                            </div>
                        </div>
                        <div class="profilePageUserData d-flex justify-content-center"> {/* User Data Section */}
                            <div class="container-fluid">
                                <div class="row col-12 userNameRow">
                                    <h2 class="d-flex justify-content-center">{this.state.postCreatorUsername}</h2>
                                    <Link to={
                                        {
                                            pathname: "/u/edit/" + loggedInUserId,
                                            state: {
                                                postCreatorId: postCreatorId,
                                                postCreatorUsername: postCreatorUsername,
                                                postCreatorFirstName: postCreatorFirstName,
                                                postCreatorLastName: postCreatorLastName,
                                                postCreatorPassword: postCreatorPassword,
                                                postCreatorSignUpDate: postCreatorSignUpDate,
                                                postCreatorImage: postCreatorImage,
                                                postCreatorTwitter: postCreatorTwitter,
                                                postCreatorFacebook: postCreatorFacebook,
                                                postCreatorInstagram: postCreatorInstagram,
                                                postCreatorLocation: postCreatorLocation,
                                                postCreatorBio: postCreatorBio
                                            }
                                        }
                                    }>
                                        <button type="submit" class="waves-effect waves-light btn-large"><p class="lead buttonFont">Edit Profile</p></button>
                                    </Link>
                                </div>
                                <div class="row col-12 userNumericDataRow">
                                    {this.state.postTotalDisplay === postsTotal
                                        ?   <h6 class="col d-flex justify-content-center">{postsTotal} post</h6>
                                        :   <h6 class="col d-flex justify-content-center">{postsTotal} posts</h6>
                                    }
                                </div>
                                <div class="row userAltContactRow">
                                    <div class="container-fluid">
                                        <div class="row">
                                            {this.state.postCreatorTwitter === null
                                                ? <div></div>
                                                : <h6 class="col-12 d-flex justify-content-center">
                                                    <a href={this.state.postCreatorTwitterURL} target="_blank">
                                                        <TwitterIcon /> {this.state.postCreatorTwitter}</a>
                                                </h6>
                                            }
                                            {this.state.postCreatorFacebook === null
                                                ? <div></div>
                                                : <h6 class="col-12 d-flex justify-content-center">
                                                    <a href={this.state.postCreatorFacebookURL} target="_blank">
                                                        <FacebookIcon /> {this.state.postCreatorFacebook}</a>
                                                </h6>
                                            }
                                            {this.state.postCreatorInstagram === null
                                                ? <div></div>
                                                : <h6 class="col-12 d-flex justify-content-center">
                                                    <a href={this.state.postCreatorInstagramURL} target="_blank">
                                                        <InstagramIcon /> {this.state.postCreatorInstagram}</a>
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