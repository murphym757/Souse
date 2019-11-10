import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SouseIndex from '../navigation/souseIndex';
import EditUserProfile from '../userProfile/editUserProfile';
import styled from 'styled-components';
import {
    UsernameUserPage,
    UserLocationUserPage,
    UserDataUserPage,
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
    UserBio,
    SouseUserPageIcon,
    UserPostIcons,
    UserPageOptionsUL,
    UserPageOptionsLI,
    UserPageOptionsLink,
    UserPageOptionsH5,
    UserPageOptionsH5Selected
} from '../../assets/styles/userProfileStyling';
import {
    SouseButton,
    SouseLink
} from '../../assets/styles/mainStyling';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUsername = user.username;
        const loggedInUserId = user.id;
        const loggedInUserImage = user.userImage;
        const souseUserId = this.props.obj._id;
        const souseUserFirstName = this.props.obj.firstName; 
        const souseUserLastName = this.props.obj.lastName;
        const souseUserEmail = this.props.obj.email;
        const souseUserPassword = this.props.obj.password;
        const souseUserSignUpDate = this.props.obj.signUpDate;
        const souseUserImage = this.props.obj.userImage;
        const souseUserTheme = this.props.obj.userTheme;
        const souseUserTwitter = this.props.obj.userTwitter;
        const souseUserFacebook = this.props.obj.userFacebook;
        const souseUserInstagram = this.props.obj.userInstagram;
        const souseUserLocation = this.props.obj.userLocation;
        const souseUserBio = this.props.obj.userBio;
        const usernameFinder = window.location.pathname;
        const usernameFound = usernameFinder.slice(1);
        const twitterUsername = souseUserTwitter;
        const twitterUsernameURL = "https://mobile.twitter.com/" + twitterUsername + "";
        const facebookUsername = souseUserFacebook;
        const facebookUsernameURL = "https://www.facebook.com/" + facebookUsername + "/";
        const instagramUsername = souseUserInstagram;
        const instagramUsernameURL = "https://www.instagram.com/" + instagramUsername + "/";        
        
        this.state = {
            loggedInUserId: loggedInUserId,
            loggedInUsername: loggedInUsername,
            loggedInUserImage: loggedInUserImage,
            creatorId: souseUserId,
            creatorUsername: usernameFound,
            creatorFirstName: souseUserFirstName,
            creatorLastName: souseUserLastName,
            creatorEmail: souseUserEmail,
            creatorPassword: souseUserPassword,
            creatorSignUpDate: souseUserSignUpDate,
            creatorUnixTimestamp: new Date(souseUserSignUpDate).valueOf(),
            totalDisplayPosts: '1',
            totalDisplayFollowers: '1',
            totalDisplayFollows: '1',
            userPageDisplay: '1',
            creatorImage: souseUserImage,
            creatorTheme: souseUserTheme,
            creatorTwitter: twitterUsername,
            creatorTwitterURL: twitterUsernameURL,
            creatorFacebook: facebookUsername,
            creatorFacebookURL: facebookUsernameURL,
            creatorInstagram: instagramUsername,
            creatorInstagramURL: instagramUsernameURL,
            creatorLocation: souseUserLocation,
            creatorBio: souseUserBio,
            followerUserId: "", // This is the user who received the follow
            initiatedFollowinguserId: "", // This is the user who pressed "Follow"
            followingUserId: "", // This is the user who pressed "Follow"
            receivedFollowUserId: "" // This is the user who received the follow
        };
        this.onSetFollow = this.onSetFollow.bind(this);
        this.onSetFollower = this.onSetFollower.bind(this);
        this.onSetDeleteFollow = this.onSetDeleteFollow.bind(this);
        this.onSetDeleteFollower = this.onSetDeleteFollower.bind(this);
    }

    postFinder() {
        const souseUserData = this.props.souseUserData;
        const filteredUsernameData = Object.keys(souseUserData).filter(
                i => souseUserData[i].username === "" + this.state.creatorUsername + ""
            ),
            userIdFinder = Object.keys(souseUserData).map(
                (object, i) => souseUserData[filteredUsernameData]._id
            ),
            userId = userIdFinder.find(
                i => "" + userIdFinder[0] + ""
            );
        const sousePostData = this.props.sousePostData;
        const souseUserList = ["" + userId + ""],
            sousePostsList = new Set(souseUserList),
            souseFilterData = sousePostData.filter(sousePostData => sousePostsList.has(sousePostData.postCreator));
        return souseFilterData;
    }

    followFinder() {
        const userId = this.state.creatorId;
        const souseFollowData = this.props.souseFollowData;
        const souseFollowList = ["" + userId + ""],
            souseFollowsList = new Set(souseFollowList),
            souseFilterFollowData = souseFollowData.filter(souseFollowsData => souseFollowsList.has(souseFollowsData.initiatedFollowuserId));
        return souseFilterFollowData;
}

    followerFinder() {
        const userId = this.state.creatorId;
        const souseFollowerData = this.props.souseFollowerData;
        const souseFollowerList = ["" + userId + ""],
            souseFollowersList = new Set(souseFollowerList),
            souseFilterFollowerData = souseFollowerData.filter(souseFollowersData => souseFollowersList.has(souseFollowersData.receivedFollowUserId));
        return souseFilterFollowerData;
    }

    onSetFollow = (e) => {
        e.preventDefault();
        const loggedInUserId = this.state.loggedInUserId;
        const creatorId = this.state.creatorId;
        const creatorImage = this.state.creatorImage;
        const creatorUsername = this.state.creatorUsername;
        const followData = {
            followUserId: creatorId, // This is the user who received the follow
            followUserImage: creatorImage, // This is the user who received the follow
            followUsername: creatorUsername, // This is the user who received the follow
            initiatedFollowuserId: loggedInUserId // This is the user who pressed "Follow"
        };
        const apiRoute = "/souseAPI";
        const createRoute = "/follows/add";

        axios.post(apiRoute + createRoute, followData)
            .then(res => console.log(res.data));

        this.setState({
            followUserId: '',
            followUserImage: '',
            followUsername: '',
            initiatedFollowuserId: ''
        });
    }
    onSetFollower = (e) => {    
        e.preventDefault();
        const loggedInUserId = this.state.loggedInUserId;
        const creatorId = this.state.creatorId;
        const loggedInUserImage = this.state.loggedInUserImage;
        const loggedInUsername = this.state.loggedInUsername;
        const followerData = {
            followerUserId: loggedInUserId, // This is the user who pressed "Follow"
            followerUserImage: loggedInUserImage, // This is the user who pressed "Follow"
            followerUsername: loggedInUsername, // This is the user who pressed "Follow"
            receivedFollowUserId: creatorId // This is the user who received the follow
        };
        const apiRoute = "/souseAPI";
        const createRoute = "/followers/add";

        axios.post(apiRoute + createRoute, followerData)
            .then(res => console.log(res.data));

        this.setState({
            followerUserId: '',
            followerUserImage: '',
            followerUsername: '',
            receivedFollowUserId: ''
        });
        window.location.reload();
    }

    onSetDeleteFollower = (e) => {
        const followerId = "" + this.followerFinder()[0]._id + "";
        const apiRoute = "/souseAPI";
        const deleteRoute = "/followers/delete";
        axios.get(apiRoute + deleteRoute + "/" + followerId)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        window.location.reload();
    }
     
    onSetDeleteFollow = (e) => {
        const userId = this.state.loggedInUserId;
        const souseFollowData = this.props.souseFollowData;
        const souseFollowList = ["" + userId + ""],
            souseFollowsList = new Set(souseFollowList),
            souseFilterFollowData = souseFollowData.filter(souseFollowsData => souseFollowsList.has(souseFollowsData.initiatedFollowuserId));
        const followId = "" + souseFilterFollowData[0]._id + "";
        const apiRoute = "/souseAPI";
        const deleteRoute = "/follows/delete";
        axios.get(apiRoute + deleteRoute + "/" + followId)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        window.location.reload();
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUsername = user.username;
        const loggedInUserId = user.id;
        const loggedInUserImage = user.userImage;
        const loggedInUserFirstname = user.email;
        const souseUserData = this.props.souseUserData;
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
        const creatorTheme = this.state.creatorTheme;
        const creatorTwitter = this.state.creatorTwitter;
        const creatorFacebook = this.state.creatorFacebook;
        const creatorInstagram = this.state.creatorInstagram;
        const creatorLocation = this.state.creatorLocation;
        const creatorBio = this.state.creatorBio;
        const userPageDisplay = this.state.userPageDisplay;
        const postsTotal = "" + this.postFinder().length + "";
        const followersTotal = "" + this.followerFinder().length + "";
        const followsTotal = "" + this.followFinder().length + "";
        return (
            <div>
                {creatorImage === "" && loggedInUserId == creatorId
                    ?   <Redirect to={
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
                                    creatorTheme: creatorTheme,
                                    creatorTwitter: creatorTwitter,
                                    creatorFacebook: creatorFacebook,
                                    creatorInstagram: creatorInstagram,
                                    creatorLocation: creatorLocation,
                                    creatorBio: creatorBio
                                }
                            }
                        }>
                        </Redirect>
                    :   <div class="mx-auto d-block pt-5">
                            <div class="d-none d-xl-block container-fluid pt-5"> {/* For larger Sceens */}
                                <div class="row userHeaderSection d-flex justify-content-center">
                                    <div class="container pt-5">
                                        <div class="col-12">
                                            <div class="row"> {/* Top content row */}
                                                <div class="col-6 d-flex justify-content-end pr-5"> {/* User Image */}
                                                    <SouseUserPageIcon>
                                                        <img className="souseUserPageImage"
                                                            src={creatorImage}
                                                            alt="souseUserIcon"
                                                            width="85px" 
                                                            height="85px"/>
                                                    </SouseUserPageIcon>   
                                                </div>
                                                <div class="col-6 pl-5"> {/* General User Content */}
                                                    <div class="row userNameRow">
                                                        <UsernameUserPage className="col-12">
                                                            {creatorUsername}
                                                        </UsernameUserPage>
                                                        <UserLocationUserPage className="col-12">
                                                            {creatorLocation}
                                                        </UserLocationUserPage>
                                                    </div>
                                                    <div class="row userButtonsRow">
                                                        <div>
                                                            <div class="col-12">
                                                            <UserDataUserPage></UserDataUserPage>
                                                                {this.state.totalDisplayPosts === postsTotal
                                                                    ?   <UserDataUserPage onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '1'})}}><b>{postsTotal}</b> Post</UserDataUserPage>
                                                                    :   <UserDataUserPage onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '1'})}}><b>{postsTotal}</b> Posts</UserDataUserPage>
                                                                }
                                                            </div>
                                                            <div class="col-12">
                                                                {this.state.totalDisplayFollowers === followersTotal
                                                                    ?   <UserDataUserPage onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '3'})}}><b>{followersTotal}</b> Follower</UserDataUserPage>
                                                                    :   <UserDataUserPage onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '3'})}}><b>{followersTotal}</b> Followers</UserDataUserPage>
                                                                }
                                                            </div>
                                                            <div class="col-12">
                                                                {this.state.totalDisplayFollows === followsTotal
                                                                    ?   <UserDataUserPage onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '4'})}}><b>{followsTotal}</b> Follow</UserDataUserPage>
                                                                    :   <UserDataUserPage onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '4'})}}><b>{followsTotal}</b> Follows</UserDataUserPage> 
                                                                }
                                                            </div>
                                                        </div>
                                                        {isAuthenticated 
                                                            ?   <div>
                                                                    {creatorId !== loggedInUserId
                                                                        ?   <div>
                                                                                {Array.isArray(this.followerFinder()) && this.followerFinder()[0]
                                                                                    ?   <div>
                                                                                                {this.followerFinder()[0].followerUserId == loggedInUserId
                                                                                                    ?   <div>
                                                                                                            <SouseButton type="submit" className="waves-effect waves-light btn-large" onClick={(e) => {this.onSetDeleteFollow(e); this.onSetDeleteFollower(e)}}><p class="lead buttonFont">Unfollow</p></SouseButton>
                                                                                                        </div>
                                                                                                    :   <div></div>
                                                                                                } 
                                                                                        </div>
                                                                                    :   <div>
                                                                                            <SouseButton type="submit" className="waves-effect waves-light btn-large" onClick={(e) => {this.onSetFollow(e); this.onSetFollower(e)}}><p class="lead buttonFont">Follow</p></SouseButton>
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
                                                                                        creatorTheme: creatorTheme,
                                                                                        creatorTwitter: creatorTwitter,
                                                                                        creatorFacebook: creatorFacebook,
                                                                                        creatorInstagram: creatorInstagram,
                                                                                        creatorLocation: creatorLocation,
                                                                                        creatorBio: creatorBio
                                                                                    }
                                                                                }
                                                                            }>
                                                                                <SouseButton type="submit" className="waves-effect waves-light btn-large"><p class="lead buttonFont">Edit Profile</p></SouseButton>
                                                                            </Link>
                                                                    }
                                                                </div>
                                                            :   <div>
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row m-0"> {/* Middle content row */}
                                                <UserPageOptionsUL className="userProfileUserInfoUL col-12 d-flex justify-content-center">
                                                    {userPageDisplay == '2'
                                                        ?   <div>
                                                                <UserPageOptionsLI className="userProfileUserInfoLI">
                                                                    <UserPageOptionsLink className="userProfileUserInfoLink">
                                                                        <div class="col-12"> {/* Bio Link */}
                                                                            <UserPageOptionsH5Selected className="d-block justify-content-center bioOption selected" onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '2'})}}>Bio</UserPageOptionsH5Selected>
                                                                        </div>
                                                                    </UserPageOptionsLink>
                                                                </UserPageOptionsLI>
                                                            </div>
                                                        :   <div>
                                                                <UserPageOptionsLI className="userProfileUserInfoLI">
                                                                    <UserPageOptionsLink className="userProfileUserInfoLink">
                                                                        <div class="col-12"> {/* Bio Link */}
                                                                            <UserPageOptionsH5 className="d-block justify-content-center bioOption" onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '2'})}}>Bio</UserPageOptionsH5>
                                                                        </div>
                                                                    </UserPageOptionsLink>
                                                                </UserPageOptionsLI>
                                                            </div>
                                                    }
                                                        {/* 
                                                        {userPageDisplay == '5'}
                                                        <UserPageOptionsLI className="userProfileUserInfoLI likesOption">
                                                            <UserPageOptionsLink className="userProfileUserInfoLink">
                                                                <div class="col-12"> // Likes/Favorites Link
                                                                    <UserPageOptions className="d-block justify-content-center"></UserPageOptions>
                                                                </div>
                                                            </UserPageOptionsLink>
                                                        </UserPageOptionsLI>
                                                        */}
                                                    {userPageDisplay == '1'
                                                        ?   <div>
                                                                <UserPageOptionsLI className="userProfileUserInfoLI">
                                                                    <UserPageOptionsLink className="userProfileUserInfoLink">
                                                                        <div class="col-12"> {/* Posts Link */}
                                                                            <UserPageOptionsH5Selected className="d-block justify-content-center postsOption selected" onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '1'})}}>Posts</UserPageOptionsH5Selected>
                                                                        </div>
                                                                    </UserPageOptionsLink>
                                                                </UserPageOptionsLI>
                                                            </div>
                                                        :   <div>
                                                                <UserPageOptionsLI className="userProfileUserInfoLI">
                                                                    <UserPageOptionsLink className="userProfileUserInfoLink">
                                                                        <div class="col-12"> {/* Posts Link */}
                                                                            <UserPageOptionsH5 className="d-block justify-content-center postsOption" onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '1'})}}>Posts</UserPageOptionsH5>
                                                                        </div>
                                                                    </UserPageOptionsLink>
                                                                </UserPageOptionsLI>
                                                            </div>
                                                    }
                                                </UserPageOptionsUL>
                                                <div class="col-12">
                                                    <SouseIndex 
                                                        userPageCreatorUsername={creatorUsername}
                                                        loggedInUsername={loggedInUsername}
                                                        souseUserData={souseUserData}/ >
                                                </div>
                                            </div>
                                            <div class="row d-flex justify-content-center"> {/* Bottom content row */}
                                                {userPageDisplay == '1'
                                                ?   <div class="row d-flex justify-content-center"> {/* Loads Posts by default */}
                                                        {Object.keys(this.postFinder()).map((object, i) => {
                                                            return <div class="col-3" obj={object} key={i}>
                                                                <div class="pb-5">
                                                                    <Link to={`/p/${this.postFinder()[i]._id}`}>
                                                                        <div class="souseImageFormat d-flex justify-content-center">
                                                                            <UserPostIcons className="souseUserPostsUserHomePage" 
                                                                                src={this.postFinder()[i].sousePosts.postImageURL}
                                                                                alt="souseUserPosts"
                                                                                width="250px" 
                                                                                height="250px"/>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        })}
                                                    </div>
                                                :   <div> 
                                                        {userPageDisplay == '2'
                                                            ?   <div class="container-fluid">   {/* Loads Bio*/}
                                                                    <div class="row">
                                                                        <div class="col">
                                                                            {this.state.creatorTwitter === ""
                                                                                ?   <div></div>
                                                                                :   <div class="col-12">
                                                                                        <div class="row d-block mx-auto">
                                                                                            <h5 class="d-flex justify-content-center m-0">
                                                                                            <SouseLink href={this.state.creatorTwitterURL} target="_blank">
                                                                                                <TwitterIcon /> {this.state.creatorTwitter}</SouseLink>
                                                                                            </h5>
                                                                                        </div>
                                                                                    </div>
                                                                            }
                                                                            {this.state.creatorFacebook === ""
                                                                                ?   <div></div>
                                                                                :   <div class="col-12">
                                                                                        <div class="row d-block mx-auto">
                                                                                            <h5 class="d-flex justify-content-center m-0">
                                                                                            <SouseLink href={this.state.creatorFacebookURL} target="_blank">
                                                                                                <FacebookIcon /> {this.state.creatorFacebook}</SouseLink>
                                                                                            </h5>
                                                                                        </div>
                                                                                    </div>
                                                                            }
                                                                            {this.state.creatorInstagram === ""
                                                                                ?   <div></div>
                                                                                :   <div class="col-12">
                                                                                        <div class="row d-block mx-auto">
                                                                                            <h5 class="d-flex justify-content-center m-0">
                                                                                            <SouseLink href={this.state.creatorInstagramURL} target="_blank">
                                                                                                <InstagramIcon /> {this.state.creatorInstagram}</SouseLink>
                                                                                            </h5>
                                                                                        </div>
                                                                                    </div>
                                                                            }  
                                                                        </div>
                                                                        {creatorBio === ""
                                                                            ?   <div></div>
                                                                            :   <div class="col">
                                                                                <UserBio>{creatorBio}</UserBio>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            :   <div></div>

                                                        }
                                                        {userPageDisplay == '3'
                                                            ?   <div>   {/* Load Followers */}
                                                                    {Object.keys(this.followerFinder())
                                                                        .map((object, i) => (
                                                                            <div class="col-3">
                                                                                <Link to={`/${this.followerFinder()[i].followerUsername}`} onClick={() => window.location.refresh()}>
                                                                                    <div class="container-fluid d-flex justify-content-center">
                                                                                        <img class="souseUserIconUserHomePage followIcons"
                                                                                            src={this.followerFinder()[i].followerUserImage}
                                                                                            alt="souseUserIcon"
                                                                                            width="85px"
                                                                                            height="85px" />
                                                                                    </div>
                                                                                    <div class="row">
                                                                                        <h6 class="col-12">{this.followerFinder()[i].followerUsername}</h6>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        ))}
                                                                </div>
                                                            :   <div></div>

                                                        }
                                                        {userPageDisplay == '4'
                                                            ?   <div class="row">   {/* loads Follows */}
                                                                    {Object.keys(this.followFinder())
                                                                        .map((object, i) => (
                                                                            <div class="col-3">
                                                                                <Link to={`/${this.followFinder()[i].followUsername}`} onClick={() => window.location.refresh()}>
                                                                                    <div class="container-fluid d-flex justify-content-center">
                                                                                        <img class="souseUserIconUserHomePage followIcons"
                                                                                            src={this.followFinder()[i].followUserImage}
                                                                                            alt="souseUserIcon"
                                                                                            width="85px"
                                                                                            height="85px" />
                                                                                    </div>
                                                                                    <div class="row">
                                                                                        <h6 class="col-12">{this.followFinder()[i].followUsername}</h6>
                                                                                    </div>
                                                                                </Link>
                                                                            </div>
                                                                        ))}
                                                                </div>
                                                            :   <div></div>

                                                        }
                                                        { /* 
                                                        {userPageDisplay == '5'
                                                            ?   <div class="row"> // loads Likes/Favorites
                                                                </div>
                                                            :   <div></div>
                                                        }
                                                    */}
                                                    </div>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-xl-none container-fluid"> {/* For smaller Sceens */}
                                <div class="row d-flex p-1 bd-highlight">
                                    <div class="col-xs-4 col-sm-4 p-0">
                                        <SouseUserPageIcon>
                                            <img className="souseUserPageImage" 
                                                src={creatorImage}
                                                alt="sousePostImage"
                                                width="1080px" 
                                                height="1080px"/>
                                        </SouseUserPageIcon>
                                    </div>
                                    <div class="col-xs-8 col-sm-8">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="row">
                                                        <h5 class="col-12">{creatorUsername}</h5>
                                                        <h6 class="col-12">{creatorLocation}</h6>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-6">
                                                            {isAuthenticated 
                                                                ?   <div>
                                                                        {creatorId !== loggedInUserId
                                                                            ?   <div>
                                                                                    {Array.isArray(this.followerFinder()) && this.followerFinder()[0]
                                                                                        ?   <div>
                                                                                                    {this.followerFinder()[0].followerUserId == loggedInUserId
                                                                                                        ?   <div>
                                                                                                                <SouseButton type="submit" className="waves-effect waves-light btn-large" onClick={(e) => {this.onSetDeleteFollow(e); this.onSetDeleteFollower(e)}}><p class="lead buttonFont">Unfollow</p></SouseButton>
                                                                                                            </div>
                                                                                                        :   <div></div>
                                                                                                    } 
                                                                                            </div>
                                                                                        :   <div>
                                                                                                <SouseButton type="submit" className="waves-effect waves-light btn-large" onClick={(e) => {this.onSetFollow(e); this.onSetFollower(e)}}><p class="lead buttonFont">Follow</p></SouseButton>
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
                                                                                    <SouseButton type="submit" className="waves-effect waves-light btn-large"><p class="lead buttonFont">Edit Profile</p></SouseButton>
                                                                                </Link>
                                                                        }
                                                                    </div>
                                                                :   <div>
                                                                    </div>
                                                            }
                                                        </div>
                                                        <div class="userButtonsRow col-6">
                                                            <div class="float-right">
                                                                <div class="col-12">
                                                                    {this.state.totalDisplayPosts === postsTotal
                                                                        ?   <h6 onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '1'})}}><b>{postsTotal}</b> Post</h6>
                                                                        :   <h6 onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '1'})}}><b>{postsTotal}</b> Posts</h6>
                                                                    }
                                                                </div>
                                                                <div class="col-12">
                                                                    {this.state.totalDisplayFollowers === followersTotal
                                                                        ?   <h6 onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '3'})}}><b>{followersTotal}</b> Follower</h6>
                                                                        :   <h6 onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '3'})}}><b>{followersTotal}</b> Followers</h6>

                                                                    }
                                                                </div>
                                                                <div class="col-12">
                                                                    {this.state.totalDisplayFollows === followsTotal
                                                                        ?   <h6 onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '4'})}}><b>{followsTotal}</b> Follow</h6>
                                                                        :   <h6 onClick={this.listClicked = (e) => {this.setState({userPageDisplay: '4'})}}><b>{followsTotal}</b> Follows</h6>  
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
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

export default connect(mapStateToProps)(withRouter (UserProfile))