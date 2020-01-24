import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserProfile from '../userProfile/userProfile';
import RouteNotFound from '../navigation/404Page';
import {
    SouseSpinner
} from '../../assets/styles/mainStyling';

class UserPage extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUsername = user.username;
        const loggedInUserId = user.id;
        const usernameFinder = window.location.pathname;
        const usernameFound = usernameFinder.slice(1);
        
        this.state = {
            postCreatorUsername: usernameFound,
            creatorUserId: "",
            isLoading: true
        };
    }

    userFinder() {
        const souseUserData = this.props.souseUserData;
        const filteredUsernameData = Object.keys(souseUserData).filter(
                i => souseUserData[i].username === "" + this.state.postCreatorUsername + ""
            ),
            userIdFinder = Object.keys(souseUserData).map(
                (object, i) => souseUserData[filteredUsernameData]._id
            ),
            userId = userIdFinder.find(
                i => "" + userIdFinder[0] + ""
            );       
        const souseUserList = ["" + userId + ""],
            souseUsersList = new Set(souseUserList),
            souseFilterUsers = souseUserData.filter(souseUserData => souseUsersList.has(souseUserData._id));
        const sousePostData = this.props.sousePostData;
        const souseFollowData = this.props.souseFollowData;
        const souseFollowerData = this.props.souseFollowerData;
        const userData = souseFilterUsers.map(
            (object, i) => <UserProfile 
                obj={object} 
                key={i} 
                souseUserData={souseUserData}
                sousePostData={sousePostData}
                souseFollowData={souseFollowData}
                souseFollowerData={souseFollowerData}/>
        );
        return userData;
    }

    userNotFound() {
        const errorRoute = <RouteNotFound/>
        return errorRoute;
    }
    
    pageLoader() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 2500)
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const souseUserData = this.props.souseUserData;
        const isLoading = this.state.isLoading;
        return (
            <div>
                {isLoading == true
                        ?   <div class="d-flex justify-content-center">
                                <SouseSpinner />
                            </div>
                        :   <div>
                                {souseUserData.filter(i => i.username === "" + this.state.postCreatorUsername + "").length > 0
                                    ?   <div>{this.userFinder()}</div>
                                    :   <div>{this.userNotFound()}</div>
                                }
                            </div>
                }
                {this.pageLoader()}
            </div>
          );
      }
}

UserPage.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(UserPage)