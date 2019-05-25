import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CommentsSection from '../posts/commentsSection';

class PostsGrid extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.username;
        this.state = {
            postCreatorId: loggedinUser,
            userIcon: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
        };
        this.delete = this.delete.bind(this);
    }
    delete() {
        const {isAuthenticated, user} = this.props.auth;
        const userName = user.username;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/p/delete";
        axios.get(apiRoute + deleteRoute + "/" + this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        this.props.history.push("/" + userName);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const postData = this.props.obj;
        const postId = this.props.obj._id;
        const souseUserData = this.props.souseUserData;
        const souseCommentData = this.props.souseCommentData;
        const postCreatorId = this.props.obj.postCreator;
        const postCaption = this.props.obj.sousePosts.postCaption;
        const sousePostImage = this.props.obj.sousePosts.postImageURL;
        const postCreatorName = this.props.postCreatorName;
        const postCreatorImage = this.props.postCreatorImage;
        return (
            <div class="mx-auto d-block pt-1">
                <div class="container-fluid d-none d-xl-block"> {/* For larger Sceens */}
                    <div class="row pt-5">
                        <div class="col-8">
                            <div class="img-wrapper">
                                <div class="img-responsive">
                                    <div class="souseImageFormat">
                                        <img class="mx-auto d-block sousePostImage pb-2" 
                                            src={sousePostImage}
                                            alt="sousePostImage"
                                            width="1080px" 
                                            height="1080px"/>
                                    </div>
                                </div>
                                {isAuthenticated && postCreatorId === loggedinUser
                                    ?   <div class="container-fluid img-overlay col justify-content-left">
                                            <div class="row profileImageRow"> {/*User Icon and Edit Button */}
                                                <div class="col-6"></div>
                                                <div class="col-3 d-flex flex-row">
                                                    <div class="buttonform-group">
                                                        <img class="souseUserIcon" 
                                                            src = {postCreatorImage}
                                                            alt="souseUserIcon"
                                                            width="85px" 
                                                            height="85px"/>
                                                    </div>
                                                </div>
                                                <div class="col-3 d-flex flex-row-reverse">
                                                    <div class="form-group pt-4">
                                                        <Link to={"/p/edit/" + this.props.obj._id}>
                                                            <button type="submit" class="waves-effect waves-light btn-large"><p class="lead buttonFont">Edit Post</p></button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row profileImageRow"> {/* username and Follower Count */}
                                                <div class="col-6"></div>
                                                <div class="col-3 d-flex flex-row">
                                                    <p class="userData">{this.props.postCreatorName}</p>
                                                </div>
                                                <div class="col-3 d-flex flex-row-reverse">
                                                    <p class="followData">22.2k Followers</p>
                                                </div>
                                            </div>
                                            <div class="row profileImageRow"> {/* Location and Following Count */}
                                                <div class="col-6"></div>
                                                <div class="col-3 d-flex flex-row">
                                                    <p class="locationData">Miami, Florida</p>
                                                </div>
                                                <div class="col-3 d-flex flex-row-reverse">
                                                    <p class="followData">1.2k Following</p>
                                                </div>
                                            </div>
                                        </div>
                                    :   <div></div>
                                }
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="container">
                                <h6 class="sousePostCreatorName">{postCreatorName}</h6>
                                <h6 class="sousePostCaption">{postCaption}</h6>
                                <CommentsSection 
                                    originalPostData={postData}
                                    souseUserData={souseUserData} 
                                    souseCommentData={souseCommentData}/> {/* Comments */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );
      }
}
PostsGrid.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter (PostsGrid))