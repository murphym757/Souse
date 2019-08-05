import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import S3 from 'aws-s3';
import awsConfig from '../../../server/config';
import M from 'materialize-css';
import styled from 'styled-components';
import { Twitter } from 'styled-icons/feather/Twitter';
import { Facebook } from 'styled-icons/feather/Facebook';
import { Instagram } from 'styled-icons/feather/Instagram';

class editUserProfile extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const loggedinUsername = user.username;
        const {
            creatorId,
            creatorUsername,
            creatorFirstName,
            creatorLastName,
            creatorEmail,
            creatorPassword,
            creatorSignUpDate,
            creatorUnixTimestamp,
            creatorImage,
            creatorTwitter,
            creatorFacebook,
            creatorInstagram,
            creatorLocation,
            creatorBio
        } = this.props.location.state;

        this.state = {
            userId: creatorId,
            username: creatorUsername,
            firstName: creatorFirstName,
            lastName: creatorLastName,
            email: creatorEmail,
            password: creatorPassword,
            signUpDate: creatorSignUpDate,
            unixTimestamp: creatorUnixTimestamp,
            userImage: creatorImage,
            userInstagram: creatorInstagram,
            userFacebook: creatorFacebook,
            userTwitter: creatorTwitter,
            userLocation: creatorLocation,
            userBio: creatorBio,
            errors: {}
        };
        this.onUpdateUsername = this.onUpdateUsername.bind(this);
        this.onUpdateFirstName = this.onUpdateFirstName.bind(this);
        this.onUpdateLastName = this.onUpdateLastName.bind(this);
        this.onUpdateEmail = this.onUpdateEmail.bind(this);
        this.onUpdatePassword = this.onUpdatePassword.bind(this);
        this.onUpdateUserInstagram = this.onUpdateUserInstagram.bind(this);
        this.onUpdateUserFacebook = this.onUpdateUserFacebook.bind(this);
        this.onUpdateUserTwitter = this.onUpdateUserTwitter.bind(this);
        this.onUpdateUserLocation = this.onUpdateUserLocation.bind(this);
        this.onUpdateUserBio = this.onUpdateUserBio.bind(this);
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

   onUpdateUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    onUpdateFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }

    onUpdateLastName = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }

    onUpdateEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onUpdatePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onUpdateUserInstagram = (e) => {
        this.setState({
            userInstagram: e.target.value
        });
    }

    onUpdateUserFacebook = (e) => {
        this.setState({
            userFacebook: e.target.value
        });
    }

    onUpdateUserTwitter = (e) => {
        this.setState({
            userTwitter: e.target.value
        });
    }

    onUpdateUserLocation = (e) => {
        this.setState({
            userLocation: e.target.value
        });
    }

    onUpdateUserBio = (e) => {
        this.setState({
            userBio: e.target.value
        });
    }
    
    onImageUpload = (e) => {
        const config = {
            bucketName: awsConfig.AWS_BUCKET_NAME,
            dirName: "users/" + "" + this.state.userId + "",
            region: awsConfig.AWS_REGION,
            accessKeyId: awsConfig.AWS_ACCESS_KEY_ID,
            secretAccessKey: awsConfig.AWS_SECRET_ACCESS_KEY,
            s3Url: awsConfig.AWS_Uploaded_File_URL_LINK /* Required */
        }
        const S3Client = new S3(config);
        const newFileName = "" + this.state.unixTimestamp + "";
        S3Client.uploadFile(e.target.files[0], newFileName)
            .then((data) => {
                console.log(data.location);
                this.setState({
                    userImage: data.location,
                    isLoading: true
                });
            })
            .catch((err) => {
                alert(err);
            })
        this.setState({
            fullPostUploadLoader: true
        });
    }

    componentDidMount() {
        M.AutoInit();
        { /* Edit Post Command */ }
        const apiRoute = "/souseAPI";
        const editRoute = "/u/edit";
        const userId = this.state.userId;
        console.log(userId);
        axios.get(apiRoute + editRoute + "/" + userId)
          .then(res => {
              this.setState({ 
                userTwitter: res.data.userTwitter,
                userFacebook: res.data.userFacebook,
                userInstagram: res.data.userInstagram,
                userLocation: res.data.userLocation,
                userBio: res.data.userBio,
                userImage: res.data.userImage
                });
          })
          .catch(function (error) {
              console.log(error);
          })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            userImage: this.state.userImage,
            userInstagram: this.state.userInstagram,
            userFacebook: this.state.userFacebook,
            userTwitter: this.state.userTwitter,
            userLocation: this.state.userLocation,
            userBio: this.state.userBio
        };
        const apiRoute = "/souseAPI";
        const updateRoute = "/u/update";
        const userId = this.state.userId;
        const username = this.state.username;

        axios.post(apiRoute + updateRoute + "/" + userId, userData)
            .then(res => console.log(res.data));

        this.props.history.push("/");
    }

    render() {
        const { errors } = this.state;
        return (
            <div class="container-fluid">
                <form onSubmit={this.onSubmit}>
                    <div class="input-field"> {/* Email Field */}
                        <input 
                            type="email"
                            name="email" 
                            class={classnames('form-control', {
                                'is-invalid': errors.email
                            })}
                            id="souseEmail"
                            value={this.state.email}
                            onChange={this.onUpdateEmail} 
                        />
                        <label class="active" for="souseEmail">Email</label>
                        {errors.email && (<div class="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div class="input-field"> {/* Username Field */}
                        <input 
                            type="text"
                            name="username" 
                            class={classnames('form-control', {
                                'is-invalid': errors.username
                            })} 
                            id = "souseUsername"
                            maxLength={30}
                            value={this.state.username}
                            onChange={this.onUpdateUsername} 
                        />
                        <label class="active" for="souseUsername">Username ({this.state.username.length}/30)</label>
                        {errors.username && (<div class="invalid-feedback">{errors.username}</div>)}
                    </div>
                    <div class="input-field"> {/* First Name Field */}
                        <input 
                            type="text"
                            name="firstName" 
                            class={classnames('form-control', {
                                'is-invalid': errors.firstName
                            })} 
                            id = "souseFirstName"
                            value={this.state.firstName}
                            onChange={this.onUpdateFirstName}
                        />
                        <label class="active" for="souseFirstName">First Name  ({this.state.firstName.length}/30)</label>
                        {errors.firstName && (<div class="invalid-feedback">{errors.firstName}</div>)}
                    </div>
                    <div class="input-field"> {/* Last Name Field */}
                        <input 
                            type="text"
                            name="lastName" 
                            class={classnames('form-control', {
                                'is-invalid': errors.lastName
                            })} 
                            id="souseLastName"
                            value={this.state.lastName}
                            onChange={this.onUpdateLastName}
                        />
                        <label class="active" for="souseLastName">Last Name  ({this.state.lastName.length}/30)</label>
                        {errors.lastName && (<div class="invalid-feedback">{errors.lastName}</div>)}
                    </div>
                    <div class="input-field"> {/* Twitter Field */}
                        <input 
                            type="text"
                            name="userTwitter" 
                            class="validate"
                            id="souseUserTwitter"
                            value={this.state.userTwitter}
                            onChange={this.onUpdateUserTwitter} 
                        />
                        <label class="active" for="souseUserTwitter">Twitter Username</label>
                    </div>
                    <div class="input-field"> {/* Facebook Field */}
                        <input 
                            type="text"
                            name="userFacebook" 
                            class="validate"
                            id="souseUserFacebook"
                            value={this.state.userFacebook}
                            onChange={this.onUpdateUserFacebook} 
                        />
                        <label class="active" for="souseUserFacebook">Facebook Username</label>
                    </div>
                    <div class="input-field"> {/* Instagram Field */}
                        <input 
                            type="text"
                            name="userInstagram" 
                            class="validate"
                            id="souseUserInstagram"
                            value={this.state.userInstagram}
                            onChange={this.onUpdateUserInstagram} 
                        />
                        <label class="active" for="souseUserInstagram">Instagram Username</label>
                    </div>
                    <div class="input-field"> {/* Location Field */}
                        <input 
                            type="text"
                            name="userLocation" 
                            class="validate"
                            id="souseUserLocation"
                            value={this.state.userLocation}
                            onChange={this.onUpdateUserLocation} 
                        />
                        <label class="active" for="souseUserLocation">Location</label>
                    </div>
                    <div class="input-field"> {/* Location Field */}
                        <textarea 
                            id = "souseUserBio"
                            class="materialize-textarea"
                            name = "userBio"
                            maxLength={150}
                            rows="2"
                            value={this.state.userBio}
                            onChange={this.onUpdateUserBio}>
                        </textarea>
                        <label class="active" for="souseUserBio">Bio ({this.state.userBio.length}/150)</label>
                    </div>
                    <div class="file-field input-field">
                        <div class="btn-large">
                            <span>Upload</span>
                            <input 
                                type="file" 
                                name="userImage"
                                id="souseUserImage"
                                onChange={this.onImageUpload}
                            />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" />
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="waves-effect waves-light btn-large d-block mx-auto">Update User</button>
                    </div>
                </form>
            </div>
          );
      }
}

editUserProfile.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(editUserProfile)