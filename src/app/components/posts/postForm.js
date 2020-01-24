import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    SouseSpinner,
    SouseButton,
    SouseForm
} from '../../assets/styles/mainStyling';

class PostCreate extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const loggedinUsername = user.username;
        const postsTotal = this.props.postsTotal;
        this.state = {
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
        this.onChangepostCaption = this.onChangepostCaption.bind(this);
        this.onChangepostLocation = this.onChangepostLocation.bind(this);
        this.handleSelectedImage = this.handleSelectedImage.bind(this);
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitWithUploadedImage = this.onSubmitWithUploadedImage.bind(this);
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
        const { isAuthenticated, user } = this.props.auth;
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
        const { isAuthenticated, user } = this.props.auth;
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
        const isLoading = this.state.isLoading;
        return (
            <div class="container">
                {isLoading == true
                    ?   <div class="d-flex justify-content-center">
                            <SouseSpinner />
                        </div>
                    :   <SouseForm onSubmit={this.onSubmitWithUploadedImage}>
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
                }
            </div>
          );
      }
}
PostCreate.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PostCreate)