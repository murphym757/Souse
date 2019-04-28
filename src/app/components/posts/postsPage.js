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
            postCreatorId: ''
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
    }

    postFinder() {
        const sousePosts = this.state.posts;
        const filteredPostData = Object.keys(sousePosts).filter((i) => {
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
        const userData = souseFilterPosts.map((object, i) => {
          return <PostsGrid obj={object} key={i} />;
      });
      return userData;
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        return (
            <div class="container">
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