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

class DeletePost extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserTheme = user.userTheme;
        const souseLoggedInUserID = user.id;
        const postIdPathname = window.location.pathname;
        const postIdFound = postIdPathname.slice(8);

        this.state = {
            originalPostId: postIdFound,
            userId: souseLoggedInUserID,
            deletePostOption: false,
            deletePostConfirm: false,
            switchColor: "",
            switchHandleColor: ""
        };
        this.deletePostImage = this.deletePostImage.bind(this);
        this.deletePost = this.deletePost.bind(this);
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

    deletePostImage() {
        const postId = this.state.originalPostId;
        const postCreatorId = this.props.postCreatorId;
        const postUnixTimestamp = this.props.postUnixTimestamp;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/p/delete/postimage";
        axios.get(apiRoute + deleteRoute + "/" + postId + "/" + postCreatorId + "/" + postUnixTimestamp)
            .then(console.log('Post Image Deleted'))
            .catch(err => console.log(err));
    }

    deletePost() {
        const postId = this.state.originalPostId;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/p/delete";
        axios.get(apiRoute + deleteRoute + "/" + postId)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
    }

    deleteProfile() {
        this.deletePostImage();
        this.deletePost();
    }

    handleChangeDelete(deletePostOption) {
        this.setState({ deletePostOption });
    }

    handleChangeDeleteConfirm(deletePostConfirm) {
        const {isAuthenticated, user} = this.props.auth;
        const userName = user.username;
        this.deleteProfile();
        this.setState({ deletePostConfirm });
        this.props.history.push("/" + userName);
        window.location.reload(true);
    }

    render() {
        const switchColor = this.state.switchColor;
        const switchHandleColor = this.state.switchHandleColor;
        return (
            <div class="pt-5 container">
                <div class="row pt-5">
                    <div class="col-3">
                        <deleteAccountFont>
                            <h4 class="deleteAccountFont">Delete Post</h4>
                        </deleteAccountFont>
                    </div>
                    <div class="col-9">
                        <div class="container-fluid">
                            <label class="row d-flex justify-content-center">
                                <EditUserProfileOptionsFont className="col-4 d-flex justify-content-end">No</EditUserProfileOptionsFont>
                                <SwitchTheme
                                    checked={this.state.deletePostOption}
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
                {this.state.deletePostOption 
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
                                                checked={this.state.deletePostConfirm}
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
DeletePost.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter (DeletePost))