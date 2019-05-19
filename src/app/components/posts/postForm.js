import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import S3 from 'aws-s3';
import awsConfig from '../../../server/config';

class PostCreate extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const loggedinUsername = user.username;
        const postsTotal = this.props.postsTotal;
        this.state = {
            posts: [],
            postCreatorId: loggedinUser,
            postCaption: '',
            postUnixTimestamp: new Date().valueOf(),
            postImageFileType: '',
            postImageURL: '',
            username: loggedinUsername,
            imageUploadOption: true,
            isLoading: true,
            fullPostUploadLoader: true,
        };
        this.onChangepostCaption = this.onChangepostCaption.bind(this);
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangepostCaption = (e) => {
        this.setState({
            postCaption: e.target.value
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
                isLoading: false
            });
        })
        .catch((err) => {
            alert(err);
        })
        this.setState({
            postImageFileType: e.target.files[0].type.slice(6),
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
            postUnixTimestamp: this.state.postUnixTimestamp,
            postImageFileType: this.state.postImageFileType,
            postImageURL: this.state.postImageURL

        };
        const apiRoute = "/souseAPI";
        const createRoute = "/p/add";

        axios.post(apiRoute + createRoute, postData)
            .then(res => console.log(res.data));

        this.setState({
            postCreatorId: '',
            postCaption: '',
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
                <form onSubmit={this.onSubmit}>
                {this.state.imageUploadOption 
                    ?   <div>
                            <div class="input-field">
                                <textarea 
                                    id="souseCaptionPost" 
                                    class="materialize-textarea"
                                    name="postCaption"
                                    id="souseCaptionPost"  
                                    rows="1"
                                    value={this.state.postCaption}
                                    onChange={this.onChangepostCaption}>
                                </textarea>
                                <label for="souseCaptionPost">Caption</label>
                            </div>
                            <div class="mx-auto" onClick={this.fullPostUpload}>
                                <a class="souseLinkFont">
                                    <h6>Upload Image Here <i class="fas fa-camera fa-lg"></i></h6>
                                </a>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="waves-effect waves-light btn-large">Share</button>
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
                                value={this.state.postCaption}
                                onChange={this.onChangepostCaption}>
                            </textarea>
                            <label for="souseCaptionPost">Caption</label>
                        </div>
                        <div>
                            {this.state.fullPostUploadLoader
                                ?   <div class="file-field input-field">
                                        <div class="btn-large">
                                            <span>Upload</span>
                                            <input 
                                                type="file" 
                                                name="souseImage"
                                                id="souseImagePost"
                                                onChange={this.onImageUpload}
                                            />
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text" />
                                        </div>
                                    </div>
                                :   <div>
                                        {this.state.isLoading
                                            ?   <div class="progress">
                                                    <div class="indeterminate"></div>
                                                </div>
                                            :   <div>
                                                    <h6>Image Successfully Uploaded</h6>
                                                    <div class="form-group">
                                                        <button type="submit" class="waves-effect waves-light btn-large">Share</button>
                                                    </div>
                                                </div>   
                                        }
                                    </div>
                            }
                        </div>
                    </div>
                } 
                </form>
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