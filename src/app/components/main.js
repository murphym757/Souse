import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Card, CardBlock } from '@bootstrap-styled/v4';
import BootstrapProvider from '@bootstrap-styled/provider';
import { makeTheme } from 'bootstrap-styled/lib/theme';
import { GlobalStyle } from '../assets/styles/globalStyling';
import {
    souseDefaultTheme,
    souseIMTheme,
    souseFPTheme,
    souseViceTheme,
    souseVapeTheme
} from '../assets/styles/globalTheme';

import LoginForm from './registration/loginForm';
import SignUpForm from './registration/signUpForm';
import LandingPage from './navigation/LandingPage';
import UserProfile from './userProfile/userProfile';
import UserPage from './userProfile/usersPage';
import RouteNotFound from './navigation/404Page';
import Navbar from './navigation/navbar';
import PostPage from './posts/postsPage';
import PostEdit from './posts/postEditForm';
import CommentDelete from './posts/commentDeleteSection';
import EditUserProfile from './userProfile/editUserProfile';

class MainSource extends Component {
  constructor(props) {
        super(props);      
        this.state = {
            posts: [],
            users: [],
            comments: [],
            followers: [],
            follows: [],
            currentTheme: ""
        };
    }
    componentDidMount() {
        { /* Posts Collection */ }
        const apiRoute = "/souseAPI";
        const findPostRoute = "/p";
        axios.get(apiRoute + findPostRoute)
            .then(res => {
                const posts = res.data;
                console.log(posts);
                this.setState({
                    posts: posts
                });
            })
            .catch(function (error) {
                console.log(error);
            })
        { /* Users Collection */ }
        const findUserRoute = "/u";
        axios.get(apiRoute + findUserRoute)
            .then(res => {
                const users = res.data;
                this.setState({
                    users: users
                });
            })
            .catch(function (error) {
                console.log(error);
            })
        { /* Comments Collection */ }
        const findCommentRoute = "/c";
        axios.get(apiRoute + findCommentRoute)
            .then(res => {
                const comments = res.data;
                this.setState({
                    comments: comments
                });
            })
            .catch(function (error) {
                console.log(error);
            })
        { /* Followers Collection */ }
        const findFollowerRoute = "/followers";
        axios.get(apiRoute + findFollowerRoute)
            .then(res => {
                const followers = res.data;
                this.setState({
                    followers: followers
                });
            })
            .catch(function (error) {
                console.log(error);
            })
        { /* Follow Collection */ }
        const findFollowRoute = "/follows";
        axios.get(apiRoute + findFollowRoute)
            .then(res => {
                const follows = res.data;
                this.setState({
                    follows: follows
                });
            })
            .catch(function (error) {
                console.log(error);
            })
        { /* Theme Finder */}
        const {isAuthenticated, user} = this.props.auth; 
        let theme1 = souseDefaultTheme;
        let theme2 = souseIMTheme;
        let theme3 = souseFPTheme;
        let theme4 = souseViceTheme;
        let theme5 = souseVapeTheme;
        if (isAuthenticated) {
            let userTheme = user.userTheme.slice(0);
            if (userTheme = theme1) {
                this.setState({currentTheme: souseDefaultTheme});
            } else if (userTheme = theme2) {
                this.setState({currentTheme: souseIMTheme});
            } else if (userTheme = theme3) {
                this.setState({currentTheme: souseFPTheme});
            } else if (userTheme = theme4) {
                this.setState({currentTheme: souseViceTheme});
            } else if (userTheme = theme5) {
                this.setState({currentTheme: souseVapeTheme});
            } else if (userTheme = undefined) {
                this.setState({currentTheme: souseDefaultTheme});
            } 
        } else {
            this.setState({currentTheme: souseDefaultTheme});
        }
    }


    render() {
      const {isAuthenticated, user} = this.props.auth;   
      const souseUsers = this.state.users;
      const sousePosts = this.state.posts;
      const souseComments = this.state.comments;
      const souseFollowers = this.state.followers;
      const souseFollows = this.state.follows;
      const gucci = 'green';
      const darkTheme = makeTheme({
          '$body-color': gucci,
          '$card-bg': 'rgb(228, 209, 209)',
          '$font-family-base': 'Helvetica'
      });
        const Card = styled.div`
            display: block;
            z-index: 9999;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            overflow: auto;
            background-color: ${props => props.theme.primaryColor};
            color: ${props => props.theme.secondaryColor};
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 400;
        `;
            

        return (
            <Router>
                <div class="container-fluid entireProjectContainer">
                {isAuthenticated
                    ?   <BootstrapProvider theme={souseIMTheme}>
                            <GlobalStyle />
                                <Card className="align-content-stretch flex-wrap entireProjectCard m-0">
                                    <CardBlock>
                                    <Navbar 
                                        souseUserData={souseUsers} />
                                    <Switch>
                                        <Route exact path="/" 
                                        render={
                                            (props) => <LandingPage {...props} 
                                            souseUserData={souseUsers} 
                                            sousePostData={sousePosts} 
                                            souseCommentData={souseComments}
                                            souseFollowerData={souseFollowers}
                                            souseFollowData={souseFollows} />
                                        }/>
                                        <Route exact path="/signup" component={SignUpForm}/>
                                        <Route exact path="/login" component={LoginForm}/>
                                        <Route exact path="/:username" 
                                        render={
                                            (props) => <UserPage {...props} 
                                            souseUserData={souseUsers} 
                                            sousePostData={sousePosts} 
                                            souseFollowerData={souseFollowers} 
                                            souseFollowData={souseFollows}/>
                                            }/>
                                        <Route exact path="/u/edit/:id" 
                                        render={
                                            (props) => <EditUserProfile {...props} 
                                            sousePostData={sousePosts} 
                                            souseCommentData={souseComments}
                                            souseFollowerData={souseFollowers} 
                                            souseFollowData={souseFollows}/>
                                            }/>
                                        <Route exact path="/p/:id" 
                                        render={
                                            (props) => <PostPage {...props} 
                                            souseUserData={souseUsers} 
                                            sousePostData={sousePosts} 
                                            souseCommentData={souseComments} />
                                        }/>
                                        <Route exact path="/p/edit/:id" component={PostEdit}/>
                                        <Route exact path="/c/delete/:id" component={CommentDelete}/>
                                        <Route component={RouteNotFound} />
                                    </Switch>
                                    </CardBlock>
                                </Card>
                </BootstrapProvider>
                    :   <BootstrapProvider theme={souseDefaultTheme}>
                            <GlobalStyle />
                                <Card className="align-content-stretch flex-wrap entireProjectCard m-0">
                                    <CardBlock>
                                    <Navbar 
                                        souseUserData={souseUsers} />
                                    <Switch>
                                        <Route exact path="/" 
                                        render={
                                            (props) => <LandingPage {...props} 
                                            souseUserData={souseUsers} 
                                            sousePostData={sousePosts} 
                                            souseCommentData={souseComments}
                                            souseFollowerData={souseFollowers}
                                            souseFollowData={souseFollows} />
                                        }/>
                                        <Route exact path="/signup" component={SignUpForm}/>
                                        <Route exact path="/login" component={LoginForm}/>
                                        <Route exact path="/:username" 
                                        render={
                                            (props) => <UserPage {...props} 
                                            souseUserData={souseUsers} 
                                            sousePostData={sousePosts} 
                                            souseFollowerData={souseFollowers} 
                                            souseFollowData={souseFollows}/>
                                            }/>
                                        <Route exact path="/u/edit/:id" 
                                        render={
                                            (props) => <EditUserProfile {...props} 
                                            sousePostData={sousePosts} 
                                            souseCommentData={souseComments}
                                            souseFollowerData={souseFollowers} 
                                            souseFollowData={souseFollows}/>
                                            }/>
                                        <Route exact path="/p/:id" 
                                        render={
                                            (props) => <PostPage {...props} 
                                            souseUserData={souseUsers} 
                                            sousePostData={sousePosts} 
                                            souseCommentData={souseComments} />
                                        }/>
                                        <Route exact path="/p/edit/:id" component={PostEdit}/>
                                        <Route exact path="/c/delete/:id" component={CommentDelete}/>
                                        <Route component={RouteNotFound} />
                                    </Switch>
                                    </CardBlock>
                                </Card>
                </BootstrapProvider>
                }
                
                </div>
            </Router>
        );
    }
}
MainSource.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(MainSource)


  