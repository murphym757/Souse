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
            originalPostId: postIdFound,
            postCreatorId: '',
            postCreatorImage: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
        };
    }
    postFinder() {
        const sousePostData = this.props.sousePostData;
        const filteredPostData = Object.keys(sousePostData).filter( // Finds Specific Post
            i => sousePostData[i]._id === "" + this.state.originalPostId + ""
        ),
        postIdFinder = Object.keys(sousePostData).map(
            (object, i) => sousePostData[filteredPostData]._id
        ),
        postId = postIdFinder.find(
            i => "" + postIdFinder[0] + ""
        );
        const sousePostList = ["" + postId + ""],
            sousePostsList = new Set(sousePostList),
            souseFilterPosts = sousePostData.filter(sousePostData => sousePostsList.has(sousePostData._id));
        const filteredPostCreator = Object.keys(sousePostData).filter(
            i => sousePostData[i]._id === "" + this.state.originalPostId + ""
        ),
            postCreatorIdFinder = Object.keys(sousePostData).map(
                (object, i) => sousePostData[filteredPostCreator].postCreator
            ),
            postCreatorId = postCreatorIdFinder.find(
                i => "" + postCreatorIdFinder[0] + ""
            );
        const souseUserData = this.props.souseUserData;
        const filteredUsernameData = Object.keys(souseUserData).filter( // Finds Username in souseUsersDB and display data from it (Username)
                i => souseUserData[i]._id === "" + postCreatorId + ""
            ),
            postUserNameFinder = Object.keys(souseUserData).map(
                (object, i) => souseUserData[filteredUsernameData].username
            ),
            postUserName = postUserNameFinder.find(
                i => "" + postUserNameFinder[0] + ""
            );         
        const sousePostCreatorName = postUserName; 
        const sousePostCreatorImage = this.state.postCreatorImage;
        const souseCommentData = this.props.souseCommentData;
        const userData = souseFilterPosts.map(
          (object, i) => <PostsGrid 
            obj={object} 
            key={i} 
            postCreatorName={sousePostCreatorName}
            postCreatorImage={sousePostCreatorImage}
            souseUserData={souseUserData}
            souseCommentData={souseCommentData}/>
      );
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