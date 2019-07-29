import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
            fullPostUploadLoader: false
        };
        this.onChangepostCaption = this.onChangepostCaption.bind(this);
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
        console.log(postId);
        axios.get(apiRoute + editRoute + "/" + postId)
          .then(res => {
              this.setState({ 
                postCaption: res.data.sousePosts.postCaption,
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
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUser = "" + user.id + "";
        const postCreatorId = this.state.postCreatorId;
        const updateImage = this.state.updateImage;
        const updatedImage = this.state.updatedImage;
        const TestFont = styled.h6`
            color: ${props => props.theme.main};
        `;
        
        TestFont.defaultProps = {
            theme: {
                main: "palevioletred"
            }
        }
         
        return (
            <div>
                {isAuthenticated && postCreatorId == loggedInUser
                    ? <div class="container">
                            <form onSubmit={this.onSubmit}>
                            <TestFont>Hi There</TestFont>
                                <div class="row pt-5">
                                    <div class="input-field col-6">
                                        <textarea 
                                            class="materialize-textarea editText"
                                            name="postCaption"
                                            id="souseCaptionPost"  
                                            rows="1"
                                            value={this.state.postCaption}
                                            onChange={this.onChangepostCaption}></textarea>
                                        <label class="active" for="souseCaptionPost">Caption</label>
                                    </div>
                                    <div class="col-6">
                                        {updateImage
                                            ?   <div>
                                                    {this.state.fullPostUploadLoader
                                                        ?   <div>
                                                                {this.state.isLoading
                                                                    ?   <div>
                                                                            <label class="d-block justify-content-center">Image updated</label>
                                                                                <div class="thumbnail">
                                                                                    <div class="souseImageFormat">
                                                                                        <img class="d-flex mx-auto sousePostImage editPost pb-2"
                                                                                            src={this.state.postImageURL}
                                                                                            alt="sousePostImage"
                                                                                            width="1080px" 
                                                                                            height="1080px"/>
                                                                                    </div>
                                                                                </div>
                                                                        </div>
                                                                    :   <WaveLoading __styled-spinkit__Wave color="#c45758" />
                                                                }
                                                            </div>
                                                        :   <div class="file-field input-field d-block mx-auto">
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
                                                    }
                                                </div>
                                            :   <div>
                                                    <label class="d-flex justify-content-center">Click image to update</label>
                                                        <div class="thumbnail">
                                                            <div class="souseImageFormat">
                                                                <img class="d-flex mx-auto sousePostImage editPost pb-2"
                                                                    onClick={this.onUpdateImage} 
                                                                    onChange={this.onChangeImageFileType}
                                                                    src={this.state.postImageURL}
                                                                    alt="sousePostImage"
                                                                    width="1080px" 
                                                                    height="1080px"/>
                                                            </div>
                                                        </div>
                                                </div>
                                        }
                                </div>
                                    <div class="form-group col d-flex justify-content-center">
                                        <button onClick={this.onUpdateImageDelete} type="submit" class="waves-effect waves-light btn-large">Update</button>
                                    </div>
                                </div>
                            </form>
                        <div class="form-group col d-flex justify-content-center pt-3">
                            <button onClick={this.delete} class="waves-effect waves-light btn-large">Delete</button>
                        </div>
                    </div>
                    : <div></div>
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