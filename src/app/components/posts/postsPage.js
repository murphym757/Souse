import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostsGrid from '../posts/postsGrid';

class PostPage extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUsername = user.username;
        const loggedInUserId = user.id;
        const postIdFinder = window.location.pathname;
        const postIdFound = postIdFinder.slice(3);
        
        this.state = {
            posts: [],
            users: [],
            originalPostId: postIdFound,
            postCreatorId: '',
            postCreatorImage: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
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
    }

    postFinder() {
        const sousePosts = this.state.posts;
        const filteredPostData = Object.keys(sousePosts).filter((i) => { // Finds Specific Post
            return sousePosts[i]._id === "" + this.state.originalPostId + ""
        }),
        postIdFinder = Object.keys(sousePosts).map((object, i) => {
            return sousePosts[filteredPostData]._id
        }),
        postId = postIdFinder.find((i) => {
            return "" + postIdFinder[0] + ""
        });
        const sousePostList = ["" + postId + ""],
            sousePostsList = new Set(sousePostList),
            souseFilterPosts = sousePosts.filter(sousePost => sousePostsList.has(sousePost._id));
        const filteredPostCreator = Object.keys(sousePosts).filter((i) => { // Finds Username of Specific Post
                return sousePosts[i]._id === "" + this.state.originalPostId + ""
            }),
            postCreatorIdFinder = Object.keys(sousePosts).map((object, i) => {
                return sousePosts[filteredPostCreator].postCreator
            }),
            postCreatorId = postCreatorIdFinder.find((i) => {
                return "" + postCreatorIdFinder[0] + ""
            });
        const souseUsers = this.state.users;
        const filteredUsernameData = Object.keys(souseUsers).filter((i) => { // Finds Username in souseUsersDB and display data from it (Username)
                return souseUsers[i]._id === "" + postCreatorId + ""
            }),
            postUserNameFinder = Object.keys(souseUsers).map((object, i) => {
                return souseUsers[filteredUsernameData].username
            }),
            postUserName = postUserNameFinder.find((i) => {
                return "" + postUserNameFinder[0] + ""
            });         
        const sousePostCreatorName = postUserName; 
        const sousePostCreatorImage = this.state.postCreatorImage;
        const userData = souseFilterPosts.map((object, i) => {
          return <PostsGrid 
            obj={object} 
            key={i} 
            postCreatorName={sousePostCreatorName}
            postCreatorImage={sousePostCreatorImage}/>;
      });
      return userData;
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        return (
            <div>
            {isAuthenticated 
                    ? <div>
                        {this.postFinder()}
                    </div>
                    : <div>
                        {this.postFinder()}
                    </div>
                }
            </div>
          );
      }
}

PostPage.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PostPage)