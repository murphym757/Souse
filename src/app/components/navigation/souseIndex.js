import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import PostCreate from '../posts/postForm';
import SouseSearch from './souseSearch';
import Switch from "react-switch";
import {
    SouseSpinner,
    SouseButton,
    CreateIconLink,
    CreateIcon,
    SouseForm
} from '../../assets/styles/mainStyling';

import {
    PencilIcon,
    SearchIcon
} from '../../assets/styles/postsStyling';

import M from 'materialize-css';
class SouseIndex extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserTheme = user.userTheme;
        const loggedinUser = user.id;
        const loggedinUsername = user.username;
        const souseUserData = this.props.souseUserData;
        this.state = {
            checked: false,
            userSearch: "",
            souseUsers: souseUserData,
            filteredUsers: [],
            switchColor: "",
            switchHandleColor: "",
            currentTheme: "souseDefaultTheme", //loggedinUserTheme
            postCreatorId: loggedinUser,
            postCaption: '',
            postLocation: '',
            postUnixTimestamp: new Date().valueOf(),
            postImageURL: '',
            username: loggedinUsername,
            imageUploadOption: true,
            isLoading: false,
            fullPostUploadLoader: true,
            selectedFileType: null,
            uploadButtonClicked: false
        };
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.onChangepostCaption = this.onChangepostCaption.bind(this);
        this.onChangepostLocation = this.onChangepostLocation.bind(this);
        this.handleSelectedImage = this.handleSelectedImage.bind(this);
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitWithUploadedImage = this.onSubmitWithUploadedImage.bind(this);
    }

    handleThemeChange(checked) {
        this.setState({ checked });
    }

    filterList = (usersFilter) => {
        let filteredUsers = this.state.souseUsers;
        filteredUsers = filteredUsers.filter(
            (i) => {
                let searchedUsername = i.username.toLowerCase()
                    return searchedUsername.indexOf(
                        usersFilter.toLowerCase()) !== -1
                });
                this.setState({
                    filteredUsers
                });
  }

    componentWillMount() {
        const souseUsers = this.state.souseUsers;
         this.setState({
             souseUsers,
             filteredUsers: souseUsers
         })
    }

    componentDidMount(){
        M.AutoInit();
        { /* Theme Finder */}
        const {isAuthenticated, user} = this.props.auth;
        const userThemeOG = user.userTheme;
        let theme1 = "souseDefaultTheme";
        let theme2 = "souseIMTheme";
        let theme3 = "souseFPTheme";
        let theme4 = "souseViceTheme";
        let theme5 = "souseVapeTheme";
        if (isAuthenticated) {
            let currentTheme = userThemeOG;
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

    onChangepostCaption = (e) => {
        this.setState({
            postCaption: e.target.value
        });
    }

    onChangepostLocation = (e) => {
        this.setState({
            postLocation: e.target.value
        });
    }

    fullPostUpload = (e) => {
        e.preventDefault();
        this.setState({
            imageUploadOption: false,
        });
    }

    handleSelectedImage = (e) => { // Indentifies image change
        const {
            isAuthenticated,
            user
        } = this.props.auth;
        const loggedinUserId = user.id;
        const loggedInUsername = user.username;
        const postCreatedDate = this.state.postUnixTimestamp;
        const selectedFile = e.target.files[0];
        e.preventDefault();
        //jpeg|jpg|png|gif
        // JPEG to JPG
        if (selectedFile.type == "image/jpeg") {
            this.setState({
                selectedFileType: selectedFile,
                uploadButtonClicked: true,
                postCreatorId: loggedinUserId,
                postImageURL: "https://souse.s3.amazonaws.com/users/" + loggedinUserId + '/posts/' + postCreatedDate + '/' + loggedinUserId + ".jpg"
            });
        } else if (selectedFile.type !== "image/jpeg") {
            this.setState({
                selectedFileType: selectedFile,
                uploadButtonClicked: true,
                postCreatorId: loggedinUserId,
                postImageURL: "https://souse.s3.amazonaws.com/users/" + loggedinUserId + '/posts/' + postCreatedDate + '/' + loggedinUserId + "." + selectedFile.type.slice(6).toLowerCase()
            });
        }
        console.log(selectedFile.type + " and " + loggedinUserId);
    }

    onImageUpload = (e) => { // Submits image change
        const {
            isAuthenticated,
            user
        } = this.props.auth;
        const loggedInUsername = user.username;
        const postCreatedDate = this.state.postUnixTimestamp;
        const apiRoute = "/souseAPI";
        const uploadRoute = "/u/upload";
        const uploadData = new FormData();
        uploadData.append("image", this.state.selectedFileType, this.state.selectedFileType.name);

        axios.post(apiRoute + uploadRoute + "/" + loggedInUsername + "/" + postCreatedDate, uploadData, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${uploadData._boundary}`,
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const postCreator = this.state.postCreatorId;
        const postData = {
            postCreator: this.state.postCreatorId,
            postCaption: this.state.postCaption,
            postLocation: this.state.postLocation,
            postUnixTimestamp: this.state.postUnixTimestamp,
            postImageURL: this.state.postImageURL

        };
        const apiRoute = "/souseAPI";
        const createRoute = "/p/add";

        axios.post(apiRoute + createRoute + "/" + postCreator, postData);
        this.setState({
            postCreatorId: '',
            postCaption: '',
            postLocation: '',
            postUnixTimestamp: '',
            postImageURL: ''
        });
        this.setState({
            isLoading: true
        });
    }


    onSubmitWithUploadedImage = (e) => { // Submits all changes
        e.preventDefault();
        this.onImageUpload(e);
        this.onSubmit(e);
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
            window.location.reload(true);
        }, 10000)
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const souseUserData = this.props.souseUserData;
        const usernameUserPage = this.props.userPageCreatorUsername;
        const loggedInUsername = this.props.loggedInUsername;
        const souseFormState = this.state.souseFormState;
        const switchColor = this.state.switchColor;
        const switchHandleColor = this.state.switchHandleColor;
        const isLoading = this.state.isLoading;
        
        return (
            <div class="col-12 m-0 p-0">
                <div class="collapse" id="postCreateCollapse">
                    <div class="postCreateCollapse">
                        <div class="container">
                            {isAuthenticated 
                                ?   <div>
                                        {usernameUserPage === loggedInUsername
                                            ?   <div class="row d-flex justify-content-center">  
                                                    {isLoading == true
                                                        ?   <div class="d-block justify-content-center">
                                                                <SouseSpinner />
                                                            </div>
                                                        : <div class="col-12 m-0 p-0">
                                                            <div class="col-12 m-0 p-0">
                                                                {this.state.checked 
                                                                    ?   <SouseSearch 
                                                                            souseSearchedUsers={this.state.filteredUsers} 
                                                                            match={this.props.match} 
                                                                            onChange={this.filterList}/> 
                                                                    :   <div class="container">
                                                                            <SouseForm onSubmit={this.onSubmitWithUploadedImage}>
                                                                                {this.state.imageUploadOption 
                                                                                    ?   <div>
                                                                                            <div class="input-field">
                                                                                                <textarea 
                                                                                                    id="souseCaptionPost" 
                                                                                                    class="materialize-textarea"
                                                                                                    name="postCaption"
                                                                                                    id="souseCaptionPost"
                                                                                                    maxLength={1000}  
                                                                                                    rows="1"
                                                                                                    value={this.state.postCaption}
                                                                                                    onChange={this.onChangepostCaption}>
                                                                                                </textarea>
                                                                                                <label for="souseCaptionPost">Caption ({this.state.postCaption.length}/1000)</label>
                                                                                            </div>
                                                                                            <div class="input-field">
                                                                                                <textarea 
                                                                                                    id="souseLocationPost" 
                                                                                                    class="materialize-textarea"
                                                                                                    name="postLocation"
                                                                                                    id="souseLocationPost"  
                                                                                                    rows="1"
                                                                                                    value={this.state.postLocation}
                                                                                                    onChange={this.onChangepostLocation}>
                                                                                                </textarea>
                                                                                                <label for="souseLocationPost">Location</label>
                                                                                            </div>
                                                                                            <div class="mx-auto" onClick={this.fullPostUpload}>
                                                                                                <a class="souseLinkFont">
                                                                                                    <h6>Upload Image Here <i class="fas fa-camera fa-lg"></i></h6>
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                    
                                                                                : <div>
                                                                                        <div class="input-field">
                                                                                            <textarea 
                                                                                                id="souseCaptionPost" 
                                                                                                class="materialize-textarea"
                                                                                                name="postCaption"
                                                                                                id="souseCaptionPost"  
                                                                                                rows="1"
                                                                                                maxLength={1000}
                                                                                                value={this.state.postCaption}
                                                                                                onChange={this.onChangepostCaption}>
                                                                                            </textarea>
                                                                                            <label for="souseCaptionPost">Caption ({this.state.postCaption.length}/1000)</label>
                                                                                        </div>
                                                                                        <div class="input-field">
                                                                                            <textarea 
                                                                                                id="souseLocationPost" 
                                                                                                class="materialize-textarea"
                                                                                                name="postLocation"
                                                                                                id="souseLocationPost"  
                                                                                                rows="1"
                                                                                                value={this.state.postLocation}
                                                                                                onChange={this.onChangepostLocation}>
                                                                                            </textarea>
                                                                                            <label for="souseLocationPost">Location</label>
                                                                                        </div>
                                                                                        <div class="file-field input-field">
                                                                                            <SouseButton className="btn-large">
                                                                                                <p class="lead buttonFont">Upload</p>
                                                                                                    <input 
                                                                                                        type="file" 
                                                                                                        id="image"
                                                                                                        onChange={this.handleSelectedImage}
                                                                                                    />
                                                                                            </SouseButton>
                                                                                            <div class="file-path-wrapper">
                                                                                                <input class="file-path validate" type="text" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                } 
                                                                                {this.state.uploadButtonClicked == false
                                                                                    ?   <div></div>
                                                                                    :   <div class="form-group">
                                                                                            <SouseButton type="submit" className="waves-effect waves-light btn-large">
                                                                                                <p class="lead buttonFont">Share</p>
                                                                                            </SouseButton>
                                                                                        </div>
                                                                                }
                                                                                </SouseForm>
                                                                        </div>
                                                                }
                                                                    
                                                            </div>
                                                            <div class="d-flex justify-content-center">
                                                                <label>
                                                                        <h6 class="d-flex justify-content-start"><PencilIcon/></h6>
                                                                    <Switch
                                                                        checked={this.state.checked}
                                                                        onChange={this.handleThemeChange}
                                                                        onColor={switchColor}
                                                                        onHandleColor={switchHandleColor}
                                                                        handleDiameter={30}
                                                                        uncheckedIcon={false}
                                                                        checkedIcon={false}
                                                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                                        height={20}
                                                                        width={48}
                                                                        className="react-switch"
                                                                        id="material-switch"
                                                                    />
                                                                        <h6 class="d-flex justify-content-end"><SearchIcon/></h6>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            :   <div class="row">
                                                    <div class="col-12 m-0 p-0">
                                                        <SouseSearch 
                                                            souseSearchedUsers={this.state.filteredUsers} 
                                                            match={this.props.match} 
                                                            onChange={this.filterList}/>
                                                    </div>
                                                </div>
                                        } 
                                    </div>      
                                :   <div class="row">
                                        <div class="col-12 m-0 p-0">
                                                <SouseSearch 
                                                    souseSearchedUsers={this.state.filteredUsers} 
                                                    match={this.props.match} 
                                                    onChange={this.filterList}/>
                                            </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                <div class="fixed-action-btn pb-2"> {/* Form Display Button */}
                    <CreateIconLink className="btn-floating btn-large addPostButton">
                        <CreateIcon className="fas fa-plus fa-xs"
                            data-toggle="collapse" 
                            href="#postCreateCollapse" 
                            role="button" 
                            aria-expanded="false" 
                            aria-controls="postCreateCollapse"></CreateIcon>
                    </CreateIconLink>
                </div>
                </div>
            </div>
          );
      }
}
SouseIndex.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(SouseIndex)