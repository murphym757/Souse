import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserPage from '../userProfile/usersPage';
import { SouseButton } from '../../assets/styles/mainStyling';
import { SouseUserPageIconLanding } from '../../assets/styles/userProfileStyling';
import SignUpForm from '../registration/signUpForm';
import LoginForm from '../registration/loginForm';
import {
    SouseSpinner,
    ConnectionOptionsLink
} from '../../assets/styles/mainStyling';
import {
    SouseColumnLanding
} from '../../assets/styles/userProfileStyling';
import {
    IphoneContainer,
    IphoneOuterImage,
    FormContainer
} from '../../assets/styles/registrationStyling';
import {
    souseiPhoneXSMaxGif
} from '../../assets/images/souseLogos';
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionOption: "1",
            isLoading: true
        };
        
    }

    userFinder() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserId = user.id;
        const souseUserData = this.props.souseUserData;
        const souseUserList = ["" + loggedinUserId + ""],
            souseUsersList = new Set(souseUserList),
            souseFilterUserData = souseUserData.filter(souseUsersData => souseUsersList.has(souseUsersData._id));
        return souseFilterUserData;
    }

    postFinder() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserId = user.id;
        const sousePostData = this.props.sousePostData;
        const sousePostList = ["" + loggedinUserId + ""],
            sousePostsList = new Set(sousePostList),
            souseFilterPostData = sousePostData.filter(sousePostsData => sousePostsList.has(sousePostsData.postCreator));
        return souseFilterPostData;
    }

    followFinder() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserId = user.id;
        const souseFollowData = this.props.souseFollowData;
        const souseFollowList = ["" + loggedinUserId + ""],
            souseFollowsList = new Set(souseFollowList),
            souseFilterFollowData = souseFollowData.filter(souseFollowsData => souseFollowsList.has(souseFollowsData.initiatedFollowuserId));
        return souseFilterFollowData;
}

    followerFinder() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserId = user.id;
        const souseFollowerData = this.props.souseFollowerData;
        const souseFollowerList = ["" + loggedinUserId + ""],
            souseFollowersList = new Set(souseFollowerList),
            souseFilterFollowerData = souseFollowerData.filter(souseFollowersData => souseFollowersList.has(souseFollowersData.receivedFollowUserId));
        return souseFilterFollowerData;
    }

    pageLoader() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 1500)
    }

    postCountConverter() {
        let postsTotal = "" + this.postFinder().length + "";
            if (postsTotal >= 1000000) {
                postsTotal = ((postsTotal/1000000).toFixed(1)) + "M"
            } else if (postsTotal >= 1000) {
                postsTotal = ((postsTotal/1000).toFixed(1)) + "K"
            } else if (postsTotal <= 999) {
                postsTotal = postsTotal
            } 
            return postsTotal;
    }

    followerCountConverter() {
        let followersTotal = "" + this.followerFinder().length + "";
            if (followersTotal >= 1000000) {
                followersTotal = ((followersTotal/1000000).toFixed(1)) + "M"
            } else if (followersTotal >= 1000) {
                followersTotal = ((followersTotal/1000).toFixed(1)) + "K"
            } else if (followersTotal <= 999) {
                followersTotal = followersTotal 
            } 
            return followersTotal;
    }

    followCountConverter() {
        let followsTotal = "" + this.followFinder().length + "";
            if (followsTotal >= 1000000) {
                followsTotal = ((followsTotal / 1000000).toFixed(1)) + "M"
            } else if (followsTotal >= 1000) {
                followsTotal = ((followsTotal / 1000).toFixed(1)) + "K"
            } else if (followsTotal <= 999) {
                followsTotal = followsTotal
            } 
            return followsTotal;
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const souseUserData = this.props.souseUserData;
        const loggedinUser = user.username;
        const loggedinUserId = user.id;
        const isLoading = this.state.isLoading;
        const connectionOption = this.state.connectionOption;
        const postsTotal = "" + this.postFinder().length + "";
        const followersTotal = "" + this.followerFinder().length + "";
        const followsTotal = "" + this.followFinder().length + "";
        return (
                <div>
                    {isLoading == true
                        ?   <div class="d-flex justify-content-center">
                                <SouseSpinner />
                            </div>
                        :   <div>
                                {Object.keys(this.userFinder())
                                .map((object, i) => (
                                    <div class="container-fluid">
                                        <div class="row mx-auto my-auto">
                                            <SouseColumnLanding className="mx-auto my-auto">
                                                <div class="row d-flex justify-content-center">   {/* Image Row */}
                                                    <SouseUserPageIconLanding>
                                                        <img className="souseUserPageLandingImage"
                                                            src={this.userFinder()[i].userImage}
                                                            alt="souseUserIcon"
                                                            width="85px" 
                                                            height="85px"/>
                                                    </SouseUserPageIconLanding>
                                                </div>
                                            </SouseColumnLanding>
                                            <SouseColumnLanding className="mx-auto my-auto">
                                                <div class="row d-flex justify-content-center">   {/* Username Row */}
                                                    <h2>{this.userFinder()[i].username}</h2>
                                                </div>
                                                <div class="row d-flex justify-content-center">   {/* Follow/Follower Row */}
                                                    <div class="col-4 d-flex justify-content-center">
                                                        <h5><b>{this.postCountConverter()}</b> Posts</h5>
                                                    </div>
                                                    <div class="col-4 d-flex justify-content-center">
                                                        <h5><b>{this.followerCountConverter()}</b> Followers</h5>
                                                    </div>
                                                    <div class="col-4 d-flex justify-content-center">
                                                        <h5><b>{this.followCountConverter()}</b> Follows</h5>
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
                                                                        souseUserLastName: this.userFinder()[i].lastName,
                                                                        souseUserEmail: this.userFinder()[i].email,
                                                                        souseUserPassword: this.userFinder()[i].password,
                                                                        souseUserSignUpDate: this.userFinder()[i].signUpDate,
                                                                        souseUserImage: this.userFinder()[i].userImage,
                                                                        souseNewUserImageSetup: this.userFinder()[i].newUserImageSetup,
                                                                        souseUserTwitter: this.userFinder()[i].userTwitter,
                                                                        souseUserFacebook: this.userFinder()[i].userFacebook,
                                                                        souseUserInstagram: this.userFinder()[i].userInstagram,
                                                                        souseUserLocation: this.userFinder()[i].userLocation,
                                                                        souseUserBio: this.userFinder()[i].userBio
                                                                    }
                                                                }
                                                            }>
                                                                <div class="row d-flex justify-content-center">   {/* Confirmation Button Row */}
                                                                    <SouseButton type="submit" className="waves-effect waves-light btn-large"><p class="lead buttonFont">Confirm</p></SouseButton>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ))
                                                }
                                            </SouseColumnLanding>
                                        </div>
                                    </div>
                                ))}
                                {isAuthenticated 
                                    ?   <div></div>
                                    :   <div class="container-fluid">
                                            {connectionOption == '1'
                                                ?   <div class="row h-100 m-0 p-0">
                                                        <IphoneContainer className="col-sm-6">
                                                            <IphoneOuterImage 
                                                                class="souseHomeLogo-navbar d-block justify-content-center pt-5" 
                                                                src = {souseiPhoneXSMaxGif}
                                                                width="450" 
                                                                alt="logo" 
                                                            />
                                                        </IphoneContainer>
                                                        <FormContainer className="col-sm-6">
                                                            <div class="my-auto">
                                                                <LoginForm />
                                                            </div>
                                                            <div class="d-none d-xl-block"> {/* For larger Sceens */}
                                                                <div class="col-12">
                                                                    <ConnectionOptionsLink className="pt-2 d-flex justify-content-center" onClick={this.optionClicked = (e) => {this.setState({connectionOption: '2'})}}>Sign Up</ConnectionOptionsLink>
                                                                </div>
                                                            </div>
                                                            <div class="d-xl-none"> {/* For smaller Sceens */}
                                                                <div class="col-12">
                                                                    <ConnectionOptionsLink className="pt-2 d-flex justify-content-center" onClick={this.optionClicked = (e) => {this.setState({connectionOption: '2'})}}>Sign Up</ConnectionOptionsLink>
                                                                </div>
                                                            </div>
                                                        </FormContainer>  
                                                    </div>
                                                :   <div class="row h-100 m-0 p-0">
                                                        <div class="col-sm-12 mx-auto my-auto">
                                                            <div class="container-fluid m-0 p-0">
                                                                <SignUpForm />
                                                                <ConnectionOptionsLink className="pt-2 d-flex justify-content-center" onClick={this.optionClicked = (e) => {this.setState({connectionOption: '1'})}}>Log In</ConnectionOptionsLink>
                                                            </div>
                                                        </div> 
                                                    </div>
                                            }
                                        </div> 
                                }
                            </div>
                    }
                    {this.pageLoader()}
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