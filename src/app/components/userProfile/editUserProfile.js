import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../server/actions/authentication';
import RouteNotFound from '../navigation/404Page';
import SwitchThemeType from "react-switch";
import classnames from 'classnames';
import S3 from 'aws-s3';
import awsConfig from '../../../server/config';
import DeleteUserProfile from './deleteUserProfile';
import M from 'materialize-css';
import {
    SouseLoadingIcon,
    SouseLoadingIcon2,
    SouseLoadingIcon3,
    SouseButton,
    SouseForm
} from '../../assets/styles/mainStyling';
import { 
    DeleteIcon,
    InvertColorsIcon,
    SouseDefaultChip,
    SouseIMChip,
    SouseFPChip,
    SouseViceChip,
    SouseVapeChip,
    SunIcon,
    MoonIcon,
    SouseImageSwitchComboShow
 } from '../../assets/styles/userProfileStyling';

class EditUserProfile extends Component {
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
            creatorTheme,
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
            userTheme: creatorTheme,
            userInstagram: creatorInstagram,
            userFacebook: creatorFacebook,
            userTwitter: creatorTwitter,
            userLocation: creatorLocation,
            userBio: creatorBio,
            isLoading: false,
            fullPostUploadLoader: false,
            userOptionsDisplay: "",
            switchColor: "",
            switchHandleColor: "",
            themeTypeSelected: false,
            userThemeType: "Light",
            currentTheme: "" + creatorTheme + "", //loggedinUserTheme
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
        this.onUpdateUserDefaultTheme = this.onUpdateUserDefaultTheme.bind(this);
        this.onUpdateUserIMTheme = this.onUpdateUserIMTheme.bind(this);
        this.onUpdateUserFPTheme = this.onUpdateUserFPTheme.bind(this);
        this.onUpdateUserViceTheme = this.onUpdateUserViceTheme.bind(this);
        this.onUpdateUserVapeTheme = this.onUpdateUserVapeTheme.bind(this);
        this.onImageUpload = this.onImageUpload.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleThemeTypeChange = this.handleThemeTypeChange.bind(this);
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
    
    // Themes
    onUpdateUserDefaultTheme = (e) => {
        this.setState({
            userTheme: "souseDefaultTheme",
            themeSelected: "theme1Selected"
        });
    }

    onUpdateUserIMTheme = (e) => {
        this.setState({
            userTheme: "souseIMTheme",
            themeSelected: "theme2Selected"
        });
    }
    onUpdateUserFPTheme = (e) => {
        this.setState({
            userTheme: "souseFPTheme",
            themeSelected: "theme3Selected"
        });
    }
    onUpdateUserVapeTheme = (e) => {
        this.setState({
            userTheme: "souseVapeTheme",
            themeSelected: "theme5Selected"
        });
    }
    onUpdateUserViceTheme = (e) => {
        this.setState({
            userTheme: "souseViceTheme",
            themeSelected: "theme4Selected"
        });
    }
    /*-----------------------------*/

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
        { /* Theme Finder */}
        const {isAuthenticated, user} = this.props.auth; 
        let theme1 = "souseDefaultTheme";
        let theme2 = "souseIMTheme";
        let theme3 = "souseFPTheme";
        let theme4 = "souseViceTheme";
        let theme5 = "souseVapeTheme";
        if (isAuthenticated) {
            let currentTheme = user.userThemeType;
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

    handleThemeTypeChange(themeTypeSelected) {
        this.setState({
            themeTypeSelected,
            userThemeType: "Dark"
        });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUsername = user.username;
        const userData = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            userImage: this.state.userImage,
            userTheme: this.state.userTheme,
            userThemeType: this.state.userThemeType,
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
        window.location.reload();
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserImage = user.userImage;
        const loggedinUserId = user.id;
        const { errors } = this.state;
        const switchColor = this.state.switchColor;
        const switchHandleColor = this.state.switchHandleColor;
        const userOptionsDisplay = this.state.userOptionsDisplay;
        const userIdPathname = window.location.pathname;
        const userIdFound = userIdPathname.slice(8);
        return (
            <div class="pt-5">
                {isAuthenticated && loggedinUserId == userIdFound
                    ?   <div class="container-fluid pt-5">
                            <SouseForm onSubmit={this.onSubmit}>
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <div class="row"> {/* Row 1 */}
                                            <div class="col-12 col-lg-6">
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
                                            </div>
                                            <div class="col-12 col-lg-6">
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
                                            </div>
                                        </div>
                                        <div class="row"> {/* Row 2 */}
                                            <div class="col-12 col-lg-6">
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
                                            </div>
                                            <div class="col-12 col-lg-6">
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
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-lg-4">
                                                <div class="input-field"> {/* Twitter Field */}
                                                    <input 
                                                        type="text"
                                                        name="userTwitter" 
                                                        className="form-control"
                                                        id="souseUserTwitter"
                                                        value={this.state.userTwitter}
                                                        onChange={this.onUpdateUserTwitter} 
                                                    />
                                                    <label class="active" for="souseUserTwitter">Twitter Username</label>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-4">
                                                <div class="input-field"> {/* Facebook Field */}
                                                    <input 
                                                        type="text"
                                                        name="userFacebook" 
                                                        className="form-control"
                                                        id="souseUserFacebook"
                                                        value={this.state.userFacebook}
                                                        onChange={this.onUpdateUserFacebook} 
                                                    />
                                                    <label class="active" for="souseUserFacebook">Facebook Username</label>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-4">
                                                <div class="input-field"> {/* Instagram Field */}
                                                    <input 
                                                        type="text"
                                                        name="userInstagram" 
                                                        className="form-control"
                                                        id="souseUserInstagram"
                                                        value={this.state.userInstagram}
                                                        onChange={this.onUpdateUserInstagram} 
                                                    />
                                                    <label class="active" for="souseUserInstagram">Instagram Username</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="input-field"> {/* Location Field */}
                                            <input 
                                                type="text"
                                                name="userLocation" 
                                                className="form-control"
                                                id="souseUserLocation"
                                                value={this.state.userLocation}
                                                onChange={this.onUpdateUserLocation} 
                                            />
                                            <label class="active" for="souseUserLocation">Location</label>
                                        </div>
                                        <div class="input-field"> {/* Bio Field */}
                                            <textarea 
                                                id = "souseUserBio"
                                                className="materialize-textarea form-control"
                                                name = "userBio"
                                                maxLength={150}
                                                rows="2"
                                                value={this.state.userBio}
                                                onChange={this.onUpdateUserBio}>
                                            </textarea>
                                            <label class="active" for="souseUserBio">Bio ({this.state.userBio.length}/150)</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <div class="pt-2 container"> {/* User Selection Section */} {/* Delete User Section */}
                                            <div class="row">
                                                {userOptionsDisplay == "1"
                                                    ?   <div class="pt-2 container">
                                                            <div class="collapse" id="optionSelectionCollapse1">
                                                                <div class="optionSelectionCollapse1">
                                                                    <div class="row d-flex justify-content-center"> 
                                                                        <div class="col-12"> {/* For Larger Screens */}
                                                                            <SouseDefaultChip className="chip col-12 h-100 d-flex justify-content-center" onClick={this.onUpdateUserDefaultTheme}>
                                                                                <div className="chipFont">Official</div>
                                                                            </SouseDefaultChip>
                                                                            <SouseIMChip className="chip col-12 h-100 d-flex justify-content-center" onClick={this.onUpdateUserIMTheme}>
                                                                                <div className="chipFont">Inter Miami</div>
                                                                            </SouseIMChip>
                                                                            <SouseFPChip className="chip col-12 h-100 d-flex justify-content-center" onClick={this.onUpdateUserFPTheme}>
                                                                                <div className="chipFont">FIU Panthers</div>
                                                                            </SouseFPChip>
                                                                            <SouseViceChip className="chip col-12 h-100 d-flex justify-content-center" onClick={this.onUpdateUserViceTheme}>
                                                                                <div className="chipFont">Miami Heat (Vice)</div>
                                                                            </SouseViceChip>
                                                                            <SouseVapeChip className="chip col-12 h-100 d-flex justify-content-center" onClick={this.onUpdateUserVapeTheme}>
                                                                                <div className="chipFont">Vaporwave</div>
                                                                            </SouseVapeChip>
                                                                            {this.state.themeSelected
                                                                                ?   <div class="col-12 h-100 d-flex justify-content-center pt-5 pb-5">
                                                                                        <SouseImageSwitchComboShow className="switchFadeIn">
                                                                                            <div class="container-fluid">
                                                                                                <h6 class="d-block justify-content-center">Theme change will take <br/> place upon next login</h6>
                                                                                                <label class="row d-flex justify-content-center">
                                                                                                    <div class="col-4 d-flex justify-content-end"><SunIcon /></div>
                                                                                                    <SwitchThemeType
                                                                                                        checked={this.state.themeTypeSelected}
                                                                                                        onChange={this.handleThemeTypeChange}
                                                                                                        onColor={this.state.switchColor}
                                                                                                        onHandleColor={this.state.switchHandleColor}
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
                                                                                                <div className="col-4 d-flex justify-content-end"><MoonIcon /></div>
                                                                                                </label>
                                                                                            </div>
                                                                                        </SouseImageSwitchComboShow>                                                                      
                                                                                    </div>
                                                                                :   <div></div>
                                                                            }
                                                                        </div> 
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    :   <DeleteUserProfile 
                                                            souseCurrentTheme={this.state.currentTheme}
                                                            souseLoggedInUserID={this.state.userId}/>
                                                }
                                                <div class="col-6">
                                                    <h5 class="d-flex justify-content-center" 
                                                        data-toggle="collapse" 
                                                        href="#optionSelectionCollapse1" 
                                                        role="button" 
                                                        aria-expanded="false" 
                                                        aria-controls="optionSelectionCollapse1"
                                                        onClick={this.optionClicked = (e) => {this.setState({userOptionsDisplay: '1'})}}>
                                                            <InvertColorsIcon />
                                                    </h5>
                                                </div>
                                                <div class="col-6">
                                                    <h5 class="d-flex justify-content-center"
                                                        data-toggle="collapse" 
                                                        href="#optionSelectionCollapse2" 
                                                        role="button" 
                                                        aria-expanded="false" 
                                                        aria-controls="optionSelectionCollapse2"
                                                        onClick={this.optionClicked = (e) => {this.setState({userOptionsDisplay: '2'})}}>
                                                            <DeleteIcon />
                                                    </h5>
                                                </div>
                                            </div>
                                        {this.state.fullPostUploadLoader
                                            ?   <div class="row d-flex justify-content-center">
                                                    {this.state.isLoading
                                                        ?   <div>
                                                                <h4 class="d-flex justify-content-center pb-2">User Image Updated</h4>
                                                                <div class="form-group col-12">
                                                                    <SouseButton type="submit" className="waves-effect waves-light btn-large d-block mx-auto">
                                                                        <p class="lead buttonFont">Update User</p>
                                                                    </SouseButton>
                                                                </div>
                                                            </div>
                                                    :   <div class="row d-flex justify-content-center col-12"> {/* Custom Loader */}
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
                                            :   <div class="row">
                                                    <div class="file-field input-field col-12">
                                                        <SouseButton className="btn-large">
                                                            <p class="lead buttonFont">Upload</p>
                                                            <input 
                                                                type="file" 
                                                                name="userImage"
                                                                id="souseUserImage"
                                                                onChange={this.onImageUpload}
                                                            />
                                                        </SouseButton>
                                                        <div class="file-path-wrapper">
                                                            <input class="file-path validate" type="text" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-12">
                                                        {loggedinUserImage == ""
                                                            ?   <h4 class="d-flex justify-content-center">Please upload a profile image to complete the setup process</h4>
                                                            :   <SouseButton type="submit" className="waves-effect waves-light btn-large d-block mx-auto">
                                                                    <p class="lead buttonFont">Update User</p>
                                                                </SouseButton>
                                                        }
                                                        
                                                    </div>
                                                </div>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </SouseForm>
                        </div>
                    :  <RouteNotFound />
                }
            </div>
          );
      }
}

EditUserProfile.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(EditUserProfile)
