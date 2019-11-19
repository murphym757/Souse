import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RouteNotFound from '../navigation/404Page';
import styled from 'styled-components';
import {
    SouseButton,
    SouseForm,
    SouseLoadingIcon,
    SouseLoadingIcon2,
    SouseLoadingIcon3
} from '../../assets/styles/mainStyling';
import {
    SouseLabel
} from '../../assets/styles/postsStyling';
import {
    DeleteIcon
} from '../../assets/styles/userProfileStyling';

import { WaveLoading } from 'styled-spinkit';
import S3 from 'aws-s3';
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
            postCreatorId: '',
            postCaption: '',
            postLocation: '',
            postImageURL: '',
            updateImage: false,
            updatedImage: false,
            isLoading: false,
            postCreatorId: loggedInUserId,
            postUnixTimestamp: postTimestamp,
            postImageFileType: '',
            postImageFileName: '',
            newPostImageFileName: '',
            username: loggedInUsername,
            fullPostUploadLoader: false,
            deleteButtonClicked: false
        };
        this.onChangepostCaption = this.onChangepostCaption.bind(this);
        this.onChangepostLocation = this.onChangepostLocation.bind(this);
        this.onUpdateImage = this.onUpdateImage.bind(this);
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdateImageDelete = this.onUpdateImageDelete.bind(this);
        this.delete = this.delete.bind(this);
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

     onImageUpload = (e) => {
         const config = {
             bucketName: awsConfig.AWS_BUCKET_NAME,
             dirName: "posts/" + "" + this.state.postCreatorId + "",
             region: awsConfig.AWS_REGION,
             accessKeyId: awsConfig.AWS_ACCESS_KEY_ID,
             secretAccessKey: awsConfig.AWS_SECRET_ACCESS_KEY,
             s3Url: awsConfig.AWS_Uploaded_File_URL_LINK /* Required */
         }
         const S3Client = new S3(config);
         const newFileName = "" + this.state.postUnixTimestamp + "";
         S3Client.uploadFile(e.target.files[0], newFileName)
             .then((data) => {
                 console.log(data.location);
                 this.setState({
                     postImageURL: data.location,
                     isLoading: true
                 });
             })
             .catch((err) => {
                 alert(err);
             })
         this.setState({
             postImageFileType: e.target.files[0].type.slice(6),
             newPostImageFileName: this.state.postUnixTimestamp + "." + e.target.files[0].type.slice(6),
             fullPostUploadLoader: true
         });
     }

     onUpdateImageDelete = (e) => {
        const config = {
             bucketName: awsConfig.AWS_BUCKET_NAME,
             dirName: "posts/" + "" + this.state.postCreatorId + "",
             region: awsConfig.AWS_REGION,
             accessKeyId: awsConfig.AWS_ACCESS_KEY_ID,
             secretAccessKey: awsConfig.AWS_SECRET_ACCESS_KEY,
             s3Url: awsConfig.AWS_Uploaded_File_URL_LINK /* Required */
         }

        const S3Client = new S3(config);
        const filename = "1561781587964.jpeg";
        S3Client
            .deleteFile(filename)
            .then(res => console.log(res))
            .catch(err => console.error(err))
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

    delete() {
        const {isAuthenticated, user} = this.props.auth;
        const userName = user.username;
        const postId = this.state.originalPostId;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/p/delete";
        axios.get(apiRoute + deleteRoute + "/" + postId)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        this.props.history.push("/" + userName);
        window.location.reload();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const postData = {
            postCreatorId: this.state.postCreatorId,
            postCaption: this.state.postCaption,
            postLocation: this.state.postLocation,
            postUnixTimestamp: this.state.postUnixTimestamp,
            postImageFileType: this.state.postImageFileType,
            postImageFileName: this.state.newPostImageFileName,
            postImageURL: this.state.postImageURL
        };
        const apiRoute = "/souseAPI";
        const updateRoute = "/p/update";
        const postId = this.state.originalPostId;

        axios.post(apiRoute + updateRoute + "/" + postId, postData)
            .then(res => console.log(res.data));
        this.props.history.push("/p/" +  postId);
        window.location.reload();
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUser = "" + user.id + "";
        const postCreatorId = this.state.postCreatorId;
        const updateImage = this.state.updateImage;
        const updatedImage = this.state.updatedImage;
        
        return (
            <div>
                {isAuthenticated && postCreatorId == loggedInUser
                    ? <div class="container-fluid">
                            <SouseForm className="pt-5" onSubmit={this.onSubmit}>
                                <div class="row container mx-auto pt-5">
                                    <div class="col-lg-6 pt-5">
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
                                    <div class="col-lg-6 pt-5">
                                        <div class="row justify-content-center h-100">
                                        {this.state.deleteButtonClicked == false
                                            ?   <div 
                                                    data-toggle="collapse" 
                                                    href="#postDeleteCollapse" 
                                                    role="button" 
                                                    aria-expanded="false" 
                                                    aria-controls="postDeleteCollapse"
                                                    onClick={this.optionClicked = (e) => {this.setState({deleteButtonClicked: true})}}
                                                    class="form-group col-6 d-flex justify-content-center mx-auto my-auto">
                                                        <DeleteIcon />
                                                </div>
                                            :   <div 
                                                    data-toggle="collapse" 
                                                    href="#postDeleteCollapse" 
                                                    role="button" 
                                                    aria-expanded="false" 
                                                    aria-controls="postDeleteCollapse"
                                                    onClick={this.optionClicked = (e) => {this.setState({deleteButtonClicked: false})}}
                                                    class="form-group col-6 d-flex justify-content-center mx-auto my-auto">
                                                        <DeleteIcon />
                                                </div>
                                        }
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                            <div class="form-group col d-flex justify-content-center">
                                            {this.state.deleteButtonClicked == false
                                                ?   <div class="row justify-content-center col-12">
                                                    {this.state.fullPostUploadLoader
                                                        ?   <div>
                                                                {this.state.isLoading
                                                                    ?   <div>
                                                                            <h4 class="d-flex justify-content-center pb-2">User Image Updated</h4>
                                                                        </div>
                                                                    :   <div class="row d-flex justify-content-center">
                                                                            <SouseLoadingIcon className="spinner-grow" role="status">
                                                                                <span class="sr-only">Loading...</span>
                                                                            </SouseLoadingIcon>
                                                                            <SouseLoadingIcon2 className="spinner-grow" role="status">
                                                                                <span class="sr-only">Loading...</span>
                                                                            </SouseLoadingIcon2>
                                                                            <SouseLoadingIcon3 className="spinner-grow" role="status">
                                                                                <span class="sr-only">Loading...</span>
                                                                            </SouseLoadingIcon3>
                                                                        </div>
                                                                }
                                                            </div>
                                                        :   <div class="file-field input-field col-12">
                                                                <SouseButton className="btn-large">
                                                                    <p class="lead buttonFont">Upload</p>
                                                                    <input 
                                                                        type="file" 
                                                                        name="souseImage"
                                                                        id="souseImagePost"
                                                                        onChange={this.onImageUpload}
                                                                    />
                                                                </SouseButton>
                                                                <div class="file-path-wrapper">
                                                                    <input class="file-path validate" type="text" />
                                                                </div>
                                                            </div>
                                                    }
                                                        <SouseButton onClick={this.onUpdateImageDelete} type="submit" className="waves-effect waves-light btn-large">
                                                            <p class="lead buttonFont">Update</p>
                                                        </SouseButton>
                                                    </div>
                                                :   <SouseButton onClick={this.delete} className="waves-effect waves-light btn-large">
                                                        <p class="lead buttonFont">Delete</p>
                                                    </SouseButton>
                                            }
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