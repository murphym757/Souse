import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostCreate from '../posts/postForm';
import SouseSearch from './souseSearch';
import Switch from "react-switch";
import {
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
        const souseUserData = this.props.souseUserData;
        this.state = {
            checked: false,
            userSearch: "",
            souseUsers: souseUserData,
            filteredUsers: [],
            switchColor: "",
            switchHandleColor: "",
            currentTheme: "souseDefaultTheme" //loggedinUserTheme
        };
        this.handleThemeChange = this.handleThemeChange.bind(this);
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
        console.log(filteredUsers);
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
    render() {
        const {isAuthenticated, user} = this.props.auth;
        const souseUserData = this.props.souseUserData;
        const usernameUserPage = this.props.userPageCreatorUsername;
        const loggedInUsername = this.props.loggedInUsername;
        const souseFormState = this.state.souseFormState;
        const switchColor = this.state.switchColor;
        const switchHandleColor = this.state.switchHandleColor;
        
        return (
            <div class="col-12 m-0 p-0">
                <div class="collapse" id="postCreateCollapse">
                    <div class="postCreateCollapse">
                        <div class="container">
                            {isAuthenticated 
                                ?   <div>
                                        {usernameUserPage === loggedInUsername
                                            ?   <div class="row">   
                                                    <div class="col-10">
                                                        {this.state.checked 
                                                            ?   <SouseSearch 
                                                                    souseSearchedUsers={this.state.filteredUsers} 
                                                                    match={this.props.match} 
                                                                    onChange={this.filterList}/> 
                                                            :   <PostCreate/>
                                                        }
                                                            
                                                    </div>
                                                    <div class="col-2">
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