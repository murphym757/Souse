import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../server/actions/authentication';
import SwitchTheme from "react-switch";
import aws from 'aws-sdk';
import awsConfig from '../../../server/config';
import M from 'materialize-css';
import {
    EditUserProfileOptionsFont
} from '../../assets/styles/userProfileStyling';

class DeleteUserProfile extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserTheme = user.userTheme;
        const souseLoggedInUserID = this.props.souseLoggedInUserID;
        this.state = {   
            userId: souseLoggedInUserID,
            deleteUser: false,
            deleteUserConfirm: false,
            switchColor: "",
            switchHandleColor: ""
        };
        this.deleteUser = this.deleteUser.bind(this);
        this.deleteImageUpload = this.deleteImageUpload.bind(this);
        this.deleteUserPosts = this.deleteUserPosts.bind(this);
        this.deleteUserComments = this.deleteUserComments.bind(this);
        this.deleteUserFollowers = this.deleteUserFollowers.bind(this);
        this.deleteUserFollows = this.deleteUserFollows.bind(this);
        this.handleChangeDelete = this.handleChangeDelete.bind(this);
        this.handleChangeDeleteConfirm = this.handleChangeDeleteConfirm.bind(this);
    }

    componentDidMount(){
        M.AutoInit();
        const {isAuthenticated, user} = this.props.auth; 
        let theme1 = "souseDefaultTheme";
        let theme2 = "souseIMTheme";
        let theme3 = "souseFPTheme";
        let theme4 = "souseViceTheme";
        let theme5 = "souseVapeTheme";
        if (isAuthenticated) {
            let currentTheme = user.userTheme;
            if (currentTheme == theme1) {
                this.setState({
                    switchColor: "#ff9496", 
                    switchHandleColor: "#c45758"});
            } else if (currentTheme == theme2) {
                this.setState({
                    switchColor: "#797878",
                    switchHandleColor: "#231f20"});
            } else if (currentTheme == theme3) {
                this.setState({
                    switchColor: "#4b6fa3",
                    switchHandleColor: "#2c4160"
                });
            } else if (currentTheme == theme4) {
                this.setState({
                    switchColor: "#a0ecff",
                    switchHandleColor: "#d780b5"
                });
            } else if (currentTheme == theme5) {
                this.setState({
                    switchColor: "#aaffff",
                    switchHandleColor: "#64c3a7"
                });
            }
        }
    }

    deleteProfile() {
        this.deleteUserPosts();
        this.deleteUserFollowers();
        this.deleteUserFollows();
        this.deleteUserComments();
        this.deleteImageUpload();
        this.deleteUser();
    }

    deleteUserPosts() {
        const userId = this.state.userId;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/u/p/delete";
        axios.get(apiRoute + deleteRoute + "/" + userId)
            .then(console.log('Posts Deleted'))
            .catch(err => console.log(err));
    }

    deleteUserComments() {
        const userId = this.state.userId;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/u/c/delete";
        axios.get(apiRoute + deleteRoute + "/" + userId)
            .then(console.log('Comments Deleted'))
            .catch(err => console.log(err));
    }

    deleteUserFollowers() {
        const userId = this.state.userId;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/u/followers/delete";
        axios.get(apiRoute + deleteRoute + "/" + userId)
            .then(console.log('Followers Deleted'))
            .catch(err => console.log(err));
    }

    deleteUserFollows() {
        const userId = this.state.userId;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/u/follows/delete";
        axios.get(apiRoute + deleteRoute + "/" + userId)
            .then(console.log('Follows Deleted'))
            .catch(err => console.log(err));
    }

    deleteUser() {
        const userId = this.state.userId;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/u/delete";
        axios.get(apiRoute + deleteRoute + "/" + userId)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
    }

    deleteImageUpload() {
        const {isAuthenticated, user} = this.props.auth; 
        const loggedinUserId = user.id;
         let s3bucket = new aws.S3({
             accessKeyId: awsConfig.AWS_ACCESS_KEY_ID,
             secretAccessKey: awsConfig.AWS_SECRET_ACCESS_KEY,
             region: awsConfig.AWS_REGION
         });

         var params = {
             Bucket: awsConfig.AWS_BUCKET_NAME,
             Prefix: 'users/' + "" + loggedinUserId + "/"
         };


         s3bucket.listObjects(params, function (err, data, cb) {
             if (err) return cb(err);

             if (data.Deleted.length == 0) return cb();

             params = {
                 Bucket: awsConfig.AWS_BUCKET_NAME
             };
             params.Delete = {
                 Objects: []
             };

             data.Deleted.forEach(function (content) {
                 params.Delete.Objects.push({
                     Key: content.Key
                 });
             });

             s3bucket.deleteObjects(params, function (err, data, cb) {
                 if (err) return cb(err);
                 if (data.Deleted.length == 1000) emptyBucket(awsConfig.AWS_BUCKET_NAME, cb);
                 else cb();
             });
         });
    }

    handleChangeDelete(deleteUser) {
        this.setState({ deleteUser });
    }

    handleChangeDeleteConfirm(deleteUserConfirm) {
        this.setState({ deleteUserConfirm });
        this.deleteProfile();
        this.props.history.push("/");
        this.props.logoutUser(this.props.history);
        window.location.reload(true);
    }

    render() {
        const switchColor = this.state.switchColor;
        const switchHandleColor = this.state.switchHandleColor;
        return (
            <div class="pt-2 container">
                <div class="collapse" id="optionSelectionCollapse2">
                    <div class="optionSelectionCollapse2">
                        <div class="row pt-5">
                            <div class="col-3">
                                <deleteAccountFont>
                                    <h4 class="deleteAccountFont">Delete Account</h4>
                                </deleteAccountFont>
                            </div>
                            <div class="col-9">
                                <div class="container-fluid">
                                    <label class="row d-flex justify-content-center">
                                        <EditUserProfileOptionsFont className="col-4 d-flex justify-content-end">No</EditUserProfileOptionsFont>
                                        <SwitchTheme
                                            checked={this.state.deleteUser}
                                            onChange={this.handleChangeDelete}
                                            onColor={switchColor}
                                            onHandleColor={switchHandleColor}
                                            handleDiameter={30}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                            height={20}
                                            width={48}
                                            className="react-switch col-4"
                                            id="material-switch"
                                        />
                                    <EditUserProfileOptionsFont className="col-4">Yes</EditUserProfileOptionsFont>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.deleteUser 
                    ?   <div>
                            <div class="row">
                                <div class="col-3">
                                    <deleteAccountFont>
                                        <h4 class="deleteAccountFont">Are you sure?</h4>
                                    </deleteAccountFont>
                                </div>
                                <div class="col-9">
                                    <div class="container-fluid">
                                        <label class="row d-flex justify-content-center">
                                            <EditUserProfileOptionsFont className="col-4 d-flex justify-content-end">No</EditUserProfileOptionsFont>
                                            <SwitchTheme
                                                checked={this.state.deleteUserConfirm}
                                                onChange={this.handleChangeDeleteConfirm}
                                                onColor={switchColor}
                                                onHandleColor={switchHandleColor}
                                                handleDiameter={30}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                height={20}
                                                width={48}
                                                className="react-switch col-4"
                                                id="material-switch"
                                            />
                                            <EditUserProfileOptionsFont className="col-4">Yes</EditUserProfileOptionsFont>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    :   <div></div> 
                }
            </div>
          );
      }
}
DeleteUserProfile.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter (DeleteUserProfile))