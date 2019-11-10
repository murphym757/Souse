import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import S3 from 'aws-s3';
import awsConfig from '../../../server/config';
import {
    SouseLoadingIcon,
    SouseLoadingIcon2,
    SouseLoadingIcon3,
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
            postImageFileType: '',
            postImageFileName: '',
            postImageURL: '',
            username: loggedinUsername,
            imageUploadOption: true,
            isLoading: true,
            fullPostUploadLoader: true
        };
        this.onChangepostCaption = this.onChangepostCaption.bind(this);
        this.onChangepostLocation = this.onChangepostLocation.bind(this);
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
            this.setState({
                postImageURL: data.location,
                isLoading: false
            });
        })
        .catch((err) => {
            alert(err);
        })
        this.setState({
            postImageFileType: e.target.files[0].type.slice(6),
            postImageFileName: this.state.postUnixTimestamp + "." + e.target.files[0].type.slice(6),
            fullPostUploadLoader: false
        });
    }

    fullPostUpload = (e) => {
        e.preventDefault();
        this.setState({
            imageUploadOption: false,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const postData = {
            postCreatorId: this.state.postCreatorId,
            postCaption: this.state.postCaption,
            postLocation: this.state.postLocation,
            postUnixTimestamp: this.state.postUnixTimestamp,
            postImageFileType: this.state.postImageFileType,
            postImageFileName: this.state.postImageFileName,
            postImageURL: this.state.postImageURL

        };
        const apiRoute = "/souseAPI";
        const createRoute = "/p/add";

        axios.post(apiRoute + createRoute, postData)
            .then(res => console.log(res.data));

        this.setState({
            postCreatorId: '',
            postCaption: '',
            postLocation: '',
            postUnixTimestamp: '',
            postImageFileType: '',
            postImageURL: ''
        });
        window.location.reload();
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        return (
            <div class="container">
                <SouseForm onSubmit={this.onSubmit}>
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
                        <div>
                            {this.state.fullPostUploadLoader
                                ?   <div class="file-field input-field">
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
                                :   <div>
                                        {this.state.isLoading
                                            ?    <div class="row d-flex justify-content-center">
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
                                            :   <div>
                                                    <h6>Image Successfully Uploaded</h6>
                                                    <div class="form-group">
                                                        <SouseButton type="submit" className="waves-effect waves-light btn-large">
                                                            <p class="lead buttonFont">Share</p>
                                                        </SouseButton>
                                                    </div>
                                                </div>   
                                        }
                                    </div>
                            }
                        </div>
                    </div>
                } 
                </SouseForm>
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