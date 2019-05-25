import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Footer from './navigation/footer';
import LoginForm from './registration/loginForm';
import SignUpForm from './registration/signUpForm';
import LandingPage from './navigation/LandingPage';
import UserProfile from './userProfile/userProfile';
import RouteNotFound from './navigation/404Page';
import Navbar from './navigation/navbar';
import PostPage from './posts/postsPage';
import PostEdit from './posts/postEditForm';
import CommentDelete from './posts/commentDeleteSection';

class MainSource extends Component {
  constructor(props) {
        super(props);      
        this.state = {
            posts: [],
            users: [],
            comments: [],
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
                console.log(users);
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
                console.log(comments);
                this.setState({
                    comments: comments
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
      const {isAuthenticated, user} = this.props.auth;
      const souseUsers = this.state.users;
      const sousePosts = this.state.posts;
      const souseComments = this.state.comments;
      console.log(souseComments);
        return (
            <Router>
              <div>
                <Navbar />
                  <div class="container">
                    <Switch>
                        <Route exact path="/" 
                          render={
                            (props) => <LandingPage {...props} 
                            souseUserData={souseUsers} sousePostData={sousePosts} souseCommentData={souseComments} />
                          }/>
                        <Route exact path="/signup" component={SignUpForm}/>
                        <Route exact path="/login" component={LoginForm}/>
                        <Route exact path="/:username" 
                          render={
                              (props) => <UserProfile {...props} 
                              souseUserData={souseUsers} sousePostData={sousePosts} />
                            }/>
                        <Route exact path="/p/:id" 
                          render={
                            (props) => <PostPage {...props} 
                            souseUserData={souseUsers} sousePostData={sousePosts} souseCommentData={souseComments} />
                          }/>
                        <Route exact path="/p/edit/:id" component={PostEdit}/>
                        <Route exact path="/c/delete/:id" component={CommentDelete}/>
                        <Route component={RouteNotFound} />
                    </Switch>
                    <div class="fixed-bottom">
                      <Footer />
                  </div>
                  </div>
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


  