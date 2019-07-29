import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import S3 from 'aws-s3';
import awsConfig from '../../../server/config';
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
            postCreatorImage,
            postCreatorTwitter,
            postCreatorFacebook,
            postCreatorInstagram,
            postCreatorLocation,
            postCreatorBio
        } = this.props.location.state;

        this.state = {
            username: loggedinUsername,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirm: '',
            userImage: postCreatorImage,
            userInstagram: postCreatorInstagram,
            userFacebook: postCreatorFacebook,
            userTwitter: postCreatorTwitter,
            userLocation: postCreatorLocation,
            userBio: postCreatorBio,
            errors: {}
        };
        this.onUpdateUsername = this.onUpdateUsername.bind(this);
        this.onUpdateFirstName = this.onUpdateFirstName.bind(this);
        this.onUpdateLastName = this.onUpdateLastName.bind(this);
        this.onUpdateEmail = this.onUpdateEmail.bind(this);
        this.onUpdatePassword = this.onUpdatePassword.bind(this);
        this.onUpdateUserImage = this.onUpdateUserImage.bind(this);
        this.onUpdateUserInstagram = this.onUpdateUserInstagram.bind(this);
        this.onUpdateUserFacebook = this.onUpdateUserFacebook.bind(this);
        this.onUpdateUserTwitter = this.onUpdateUserTwitter.bind(this);
        this.onUpdateUserLocation = this.onUpdateUserLocation.bind(this);
        this.onUpdateUserBio = this.onUpdateUserBio.bind(this);
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onImageUpload = (e) => {
        const config = {
            bucketName: awsConfig.AWS_BUCKET_NAME,
            dirName: "users/" + "" + this.state.postCreatorId + "",
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

    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div class="container-fluid">
                <form onSubmit={this.onSubmit}>
                    <div class="input-field">
                        <input 
                            type="email"
                            name="email" 
                            class={classnames('form-control', {
                                'is-invalid': errors.email
                            })}
                            id="souseEmail"
                            value={this.state.email}
                            onChange={this.onChange} 
                        />
                        <label for="souseEmail">Email</label>
                        {errors.email && (<div class="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div class="input-field">
                        <input 
                            type="text"
                            name="username" 
                            class={classnames('form-control', {
                                'is-invalid': errors.username
                            })} 
                            id = "souseUsername"
                            maxLength={30}
                            value={this.state.username}
                            onChange={this.onChange} 
                        />
                        <label for="souseUsername">Username ({this.state.username.length}/30)</label>
                        {errors.username && (<div class="invalid-feedback">{errors.username}</div>)}
                    </div>
                    <div class="input-field">
                        <input 
                            type="text"
                            name="firstName" 
                            class={classnames('form-control', {
                                'is-invalid': errors.firstName
                            })} 
                            id = "souseFirstName"
                            value={this.state.firstName}
                            onChange={this.onChange}
                        />
                        <label for="souseFirstName">First Name  ({this.state.firstName.length}/30)</label>
                        {errors.firstName && (<div class="invalid-feedback">{errors.firstName}</div>)}
                    </div>
                    <div class="input-field">
                        <input 
                            type="text"
                            name="lastName" 
                            class={classnames('form-control', {
                                'is-invalid': errors.lastName
                            })} 
                            id="souseLastName"
                            value={this.state.lastName}
                            onChange={this.onChange}
                        />
                        <label for="souseLastName">Last Name  ({this.state.lastName.length}/30)</label>
                        {errors.lastName && (<div class="invalid-feedback">{errors.lastName}</div>)}
                    </div>
                    <div class="input-field">
                        <input 
                            type="password"
                            name="password"
                            class={classnames('form-control', {
                                'is-invalid': errors.password
                            })} 
                            id="sousePassword"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                        <label for="sousePassword">Password</label>
                        {errors.password && (<div class="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div class="input-field">
                        <input 
                            type="password"
                            name="password_confirm"
                            class={classnames('form-control', {
                                'is-invalid': errors.password_confirm
                            })} 
                            id="sousePasswordConfirm"
                            value={this.state.password_confirm}
                            onChange={this.onChange}
                        />
                        <label for="sousePasswordConfirm">Password Confirm</label>
                        {errors.password_confirm && (<div class="invalid-feedback">{errors.password_confirm}</div>)}
                    </div>
                    <div class="form-group">
                        <button type="submit" class="waves-effect waves-light btn-large">Sign Up</button>
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