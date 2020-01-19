import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RouteNotFound from '../navigation/404Page';
import {
    SouseButton,
    SouseForm
} from '../../assets/styles/mainStyling';
import {
    DeleteIcon
} from '../../assets/styles/userProfileStyling';
import PostDelete from './postDelete';
import aws from 'aws-sdk';
import awsConfig from '../../../server/config';

class PostEdit extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const { postTimestamp } = this.props.location.state;
        const loggedInUsername = user.username;
        const loggedInUserId = user.id;
        const postIdPathname = window.location.pathname;
        const postIdFound = postIdPathname.slice(8);
        
        this.state = {
            posts: [],
            users: [],
            originalPostId: postIdFound,
            postCaption: '',
            postLocation: '',
            postImageURL: '',
            updateImage: false,
            updatedImage: false,
            isLoading: false,
            selectedFileType: null,
            uploadButtonClicked: false,
            postCreatorId: loggedInUserId,
            postUnixTimestamp: postTimestamp,
            username: loggedInUsername,
            fullPostUploadLoader: false,
            deleteButtonClicked: false,
            userOptionsDisplay: '1'
        };
        this.onChangepostCaption = this.onChangepostCaption.bind(this);
        this.onChangepostLocation = this.onChangepostLocation.bind(this);
        this.onUpdateImage = this.onUpdateImage.bind(this);
        this.handleSelectedImage = this.handleSelectedImage.bind(this);  
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitWithUploadedImage = this.onSubmitWithUploadedImage.bind(this);
        this.deleteImageUpload = this.deleteImageUpload.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    componentDidMount() {
        { /* Edit Post Command */ }
        const apiRoute = "/souseAPI";
        const editRoute = "/p/edit";
        const postId = this.state.originalPostId;
        axios.get(apiRoute + editRoute + "/" + postId)
          .then(res => {
              this.setState({ 
                postCaption: res.data.sousePosts.postCaption,
                postLocation: res.data.sousePosts.postLocation,
                postCreatorId: res.data.postCreator,
                postImageURL: res.data.sousePosts.postImageURL
                });
          })
          .catch(function (error) {
              console.log(error);
          })
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

    onUpdateImage = (e) => {
        this.setState({
            updateImage: true
        });
    }

    handleSelectedImage = (e) => { // Indentifies image change
        const {isAuthenticated, user} = this.props.auth; 
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
    }

    onImageUpload = (e) => { // Submits image change
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUser = user.id;
        const postId = this.state.originalPostId;
        const postCreatorId = this.state.postCreatorId;
        const postUnixTimestamp = this.state.postUnixTimestamp;
        const apiRoute = "/souseAPI";
        const uploadRoute = "/p/upload";
        const uploadData = new FormData();
        uploadData.append("image", this.state.selectedFileType, this.state.selectedFileType.name);

        axios.post(apiRoute + uploadRoute + "/" + postId + "/" + postCreatorId + "/" + postUnixTimestamp, uploadData, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${uploadData._boundary}`,
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    deleteImageUpload() {
        const postId = this.state.originalPostId;
        const postCreatorId = this.state.postCreatorId;
        const postUnixTimestamp = this.state.postUnixTimestamp;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/p/delete/postimage";
        axios.get(apiRoute + deleteRoute + "/" + postId + "/" + postCreatorId + "/" + postUnixTimestamp)
            .then(console.log('Post Image Deleted'))
            .catch(err => console.log(err));
    }

    
    deletePost() {
        const {isAuthenticated, user} = this.props.auth;
        const userName = user.username;
        const postId = this.state.originalPostId;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/p/delete";
        axios.get(apiRoute + deleteRoute + "/" + postId)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        this.deleteImageUpload();
        this.props.history.push("/" + userName);
        window.location.reload();
    }

    onSubmitWithUploadedImage = (e) => { // Submits all changes
        const awsBucketName = awsConfig.AWS_BUCKET_NAME;
        e.preventDefault();
        const promise = new Promise(() => {
            setTimeout(() => {
                this.deleteImageUpload(awsBucketName);
            }, 2000)
        });
        promise.then(
            this.onImageUpload(e),
            this.onSubmit(e),
            window.location.reload(true)
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        const postData = {
            postCreatorId: this.state.postCreatorId,
            postCaption: this.state.postCaption,
            postLocation: this.state.postLocation,
            postUnixTimestamp: this.state.postUnixTimestamp,
            postImageURL: this.state.postImageURL
        };
        const apiRoute = "/souseAPI";
        const updateRoute = "/p/update";
        const postId = this.state.originalPostId;

        axios.post(apiRoute + updateRoute + "/" + postId, postData);
        this.props.history.push("/p/" +  postId);
        window.location.reload();
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUser = "" + user.id + "";
        const postCreatorId = this.state.postCreatorId;
        const postUnixTimestamp = this.state.postUnixTimestamp;
        const updateImage = this.state.updateImage;
        const userOptionsDisplay = this.state.userOptionsDisplay;
        
        return (
            <div>
                {isAuthenticated && postCreatorId == loggedInUser
                    ? <div class="container-fluid">
                            <SouseForm className="pt-5" onSubmit={this.onSubmitWithUploadedImage}>
                                <div class="row container mx-auto">
                                    <div class="col-lg-6">
                                        <div class="input-field pb-5">
                                            <textarea 
                                                class="materialize-textarea editText"
                                                name="postCaption"
                                                id="souseCaptionPost"  
                                                rows="1"
                                                maxLength={1000} 
                                                value={this.state.postCaption}
                                                onChange={this.onChangepostCaption}></textarea>
                                            <label class="active" for="souseCaptionPost">Caption ({this.state.postCaption.length}/1000)</label>
                                        </div>
                                        <div class="input-field">
                                            <input 
                                                type="text"
                                                name="postLocation" 
                                                className="form-control"
                                                id="souseLocationPost"
                                                value={this.state.postLocation}
                                                onChange={this.onChangepostLocation} 
                                            />
                                            <label class="active" for="souseLocationPost">Location</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="row justify-content-center">
                                        {userOptionsDisplay == "1"
                                            ?   <div 
                                                    data-toggle="collapse" 
                                                    href="#postDeleteCollapse2" 
                                                    role="button" 
                                                    aria-expanded="false" 
                                                    aria-controls="postDeleteCollapse2"
                                                    onClick={this.optionClicked = (e) => {this.setState({userOptionsDisplay: '2'})}}
                                                    class="form-group col-6 d-flex justify-content-center mx-auto my-auto">
                                                        <DeleteIcon />
                                                </div>
                                            :   <div 
                                                    data-toggle="collapse" 
                                                    href="#postDeleteCollapse" 
                                                    role="button" 
                                                    aria-expanded="false" 
                                                    aria-controls="postDeleteCollapse"
                                                    onClick={this.optionClicked = (e) => {this.setState({userOptionsDisplay: '1'})}}
                                                    class="form-group col-6 d-flex justify-content-center mx-auto my-auto">
                                                        <DeleteIcon />
                                                </div>
                                        }
                                        </div>
                                        <div class="row">
                                            <div class="row justify-content-center">
                                                <div class="form-group col d-flex justify-content-center">
                                                    {userOptionsDisplay == "1"
                                                        ?   <div class="row justify-content-center col-12">
                                                                <div class="file-field input-field col-12">
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
                                                                    <span 
                                                                        class="helper-text d-flex justify-content-center" 
                                                                        data-error="wrong" data-success="right">
                                                                            {"Currently, Souse cannot upload images with capitalized file extensions (JPEG, PNG, and GIF). Please ensure that your file extensions are lowercase."}
                                                                    </span>
                                                                </div>
                                                                {this.state.uploadButtonClicked == false
                                                                    ?   <SouseButton onClick={this.onSubmit} type="button" className="waves-effect waves-light btn-large"> {/* Update post w/o updating image */}
                                                                            <p class="lead buttonFont">Update Post</p>
                                                                        </SouseButton>
                                                                    :   <SouseButton type="submit" className="waves-effect waves-light btn-large"> {/* Update post and image */}
                                                                            <p class="lead buttonFont">Update Post</p>
                                                                        </SouseButton>
                                                                }

                                                            </div>
                                                        :   <PostDelete 
                                                                postUnixTimestamp={postUnixTimestamp}
                                                                postCreatorId={postCreatorId}/ >
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SouseForm>
                    </div>
                    : <RouteNotFound />
                }
            </div>
            
          );
      }
}

PostEdit.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PostEdit)