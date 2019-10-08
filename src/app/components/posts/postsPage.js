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
            postCreatorImage: ''
        };
    }

    postCreatorIDFinder() {
        const sousePostData = this.props.sousePostData;
        const postId = this.state.originalPostId;
        const filteredPostCreator = Object.keys(sousePostData).filter(
            i => sousePostData[i]._id === "" + postId + ""
        ),
            postCreatorIdFinder = Object.keys(sousePostData).map(
                (object, i) => sousePostData[filteredPostCreator].postCreator
            ),
            postCreatorId = postCreatorIdFinder.find(
                i => "" + postCreatorIdFinder[0] + ""
            );
        return postCreatorId;
    }

    postCreatorUsernameFinder() {
        const souseUserData = this.props.souseUserData;
        const filteredUsernameData = Object.keys(souseUserData).filter( // Finds Username in souseUsersDB and display data from it (Username)
                i => souseUserData[i]._id === "" + this.postCreatorIDFinder() + ""
            ),
            postUserNameFinder = Object.keys(souseUserData).map(
                (object, i) => souseUserData[filteredUsernameData].username
            ),
            postUserName = postUserNameFinder.find(
                i => "" + postUserNameFinder[0] + ""
            );
            return postUserName;
    }

    postCreatorImageFinder() {
        const souseUserData = this.props.souseUserData;
        const filteredUsernameData = Object.keys(souseUserData).filter( // Finds Username in souseUsersDB and display data from it (Username)
                i => souseUserData[i]._id === "" + this.postCreatorIDFinder() + ""
            ),
            postUserImageFinder = Object.keys(souseUserData).map(
                (object, i) => souseUserData[filteredUsernameData].userImage
            ),
            postUserImage = postUserImageFinder.find(
                i => "" + postUserImageFinder[0] + ""
            );
            return postUserImage;
    }

    foundUserData(){
        const souseUserData = this.props.souseUserData;
        const souseCommentData = this.props.souseCommentData;
        const sousePostData = this.props.sousePostData;
        const postId = this.state.originalPostId;
        const sousePostCreatorName = this.postCreatorUsernameFinder();
        const sousePostCreatorImage = this.postCreatorImageFinder();
        console.log(sousePostCreatorImage);
        const sousePostList = ["" + postId + ""],
            sousePostsList = new Set(sousePostList),
            souseFilterPosts = sousePostData.filter(sousePostData => sousePostsList.has(sousePostData._id));
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
                        {this.foundUserData()}
                    </div>
                    : <div>
                        {this.foundUserData()}
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