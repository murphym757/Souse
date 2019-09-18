import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import styled from 'styled-components';
import PostEdit from './commentDeleteSection';
import CommentsSection from './commentsSection';
import { Close } from 'styled-icons/material/Close';

class PostsGrid extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.username;
        this.state = {
            postCreatorId: loggedinUser,
            postCreatorImage: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg",
            commentSectionSelected: false,
            currentYear: new Date().getFullYear()
        };
        this.displayComments = this.displayComments.bind(this);
        this.closeComments = this.closeComments.bind(this);
        this.delete = this.delete.bind(this);
    }
    commentsFinder() {
        const souseCommentData = this.props.souseCommentData;
        const souseCommentList = ["" + this.props.obj._id + ""],
            souseCommentsList = new Set(souseCommentList),
            souseFilterData = souseCommentData.filter(souseCommentsData => souseCommentsList.has(souseCommentsData.originalPostId));
        console.log(souseFilterData);
        return souseFilterData;
    }

    displayComments = (e) => {
        this.setState({
            commentSectionSelected: true
        });
    }
    
    closeComments = (e) => {
        this.setState({
            commentSectionSelected: false
        });
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
        const postUnixTimestamp = this.props.obj.sousePosts.postUnixTimestamp;
        const postCreatorName = this.props.postCreatorName;
        const postCreatorImage = this.props.postCreatorImage;
        const commentSectionSelected = this.state.commentSectionSelected;
        const commentsTotal = "" + this.commentsFinder().length + "";
        const CloseIcon = styled(Close)
        `
            color: #C45758;
            height: 1.1em;
            width: 1.5em;
        `;
        return (
            <div class="mx-auto d-block pt-5">
                <div class="d-none d-xl-block container"> {/* For larger Sceens */}
                    <div class="row pt-5">
                        <div class="col-8">
                            <div class="thumbnail">
                                    <div class="souseImageFormat">
                                        <img class="mx-auto d-block sousePostImage pb-2" 
                                            src={sousePostImage}
                                            alt="sousePostImage"
                                            width="1080px" 
                                            height="1080px"/>
                                    </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="container">
                            {commentSectionSelected  
                                ?   <div>
                                        <div class="row">
                                            <div class="container">
                                                <h6 class="float-right" onClick={this.closeComments}><CloseIcon /></h6>
                                            </div>
                                        </div>
                                        <CommentsSection 
                                            originalPostData={postData}
                                            souseUserData={souseUserData} 
                                            souseCommentData={souseCommentData}/> {/* Comments */}
                                    </div>
                                :   <div>
                                        <div class="row">
                                            <div class="col-2">
                                                <img class="souseUserIconComments" 
                                                    src = {this.state.postUserImage} 
                                                    alt="souseUserIconComments"
                                                    width="25px" 
                                                    height="25px"/>
                                            </div>
                                            <div class="col-8">
                                                <h5 class="sousePostCreatorName">{postCreatorName}</h5>
                                            </div>
                                            {isAuthenticated && postCreatorId === loggedinUser
                                                    ?  <div class="row"> {/*User Icon and Edit Button */}                                                  
                                                            <div class="col-12 d-flex flex-row-reverse">
                                                                <div class="form-group pt-4">
                                                                    <Link to={
                                                                        {
                                                                            pathname: "/p/edit/" + this.props.obj._id,
                                                                            state: {
                                                                                postTimestamp: postUnixTimestamp
                                                                            }
                                                                        }
                                                                    }>
                                                                        <button type="submit" class="waves-effect waves-light btn-large"><p class="lead buttonFont">Edit Post</p></button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                :   <div></div>
                                            }
                                        </div>
                                        <div class="row">
                                            <div class="pre-scrollable">
                                                <div class="col-12">
                                                    <h6 class="sousePostCaption">{postCaption}</h6>
                                                </div>
                                            </div>
                                            <div class="col-12 no-gutters sousePostUserCommentsLink">
                                                <h6 class="souseCommentsLinkFont" onClick={this.displayComments}>View all {commentsTotal} comments</h6>
                                            </div>
                                        </div>
                                    </div>
                        }
                            </div>
                            <div class="souseFooter">
                                <h6><i class="far fa-copyright"></i>{this.state.currentYear} Souse</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-xl-none container-fluid"> {/* For smaller Sceens */}
                    <div class="row">
                    {commentSectionSelected 
                        ?   <div class="souseCommentsColumn no-gutters col-12"> {/* Comments Section */}
                                <div class="row">
                                    <div class="container">
                                        <h6 class="float-right" onClick={this.closeComments}><CloseIcon /></h6>
                                    </div>
                                </div>
                                <CommentsSection 
                                    originalPostData={postData}
                                    souseUserData={souseUserData} 
                                    souseCommentData={souseCommentData}/> {/* Comments */}
                            </div>
                        :   <div class="postSection no-gutters"> {/* Post Section */}
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="row souseTopHalf">
                                        <div class="col-12 no-gutters sousePostImageColumn">
                                                <div class="souseImageFormat">
                                                    <div class="mx-auto d-block colorOverlay comboImage" 
                                                        width="1080px" 
                                                        height="1080px">
                                                    </div>
                                                    <div class="card bottomRowOfCardBackground comboImage" width="1080px"> 
                                                        <div class="card-body"></div>
                                                    </div>
                                                    <div class="card bottomRowOfCard comboImage" width="1080px">
                                                        <div class="card-body"></div>
                                                    </div>
                                                    <div class="card bottomRowOfCardContent comboImage" width="1080px">
                                                        <div class="card-body">
                                                            
                                                                <div class="row bottomRowOfCardContentRow my-auto">
                                                                    <div class="col-4"></div>
                                                                    <div class="col-4">
                                                                        <div class="container d-flex justify-content-center align-items-end">
                                                                            <h6 class="d-flex my-auto">Hi There</h6>
                                                                            <br />
                                                                            <div class="customUnderline comboImage"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-4"></div>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div class="container-fluid">
                                                    <div class="thumbnail">
                                                    <img class="mx-auto d-block sousePostImage" 
                                                        src={sousePostImage}
                                                        alt="sousePostImage"
                                                        width="1080px" 
                                                        height="1080px"/>
                                                        </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="col-12 no-gutters sousePostUserDataColumn comboImage">
                                            <div class="userContentSection">
                                                <div class="row topUserContentRow no-gutters">
                                                <div class="container-fluid">
                                                <div class="row my-0 topRowContent">
                                                    <div class="col-6 pl-4 no-gutters float-left souseUserImageColumn">
                                                    <img class="souseUserIconPost" 
                                                        src={this.state.postCreatorImage}
                                                        alt="souseUserIconPost"
                                                        width="25px" 
                                                        height="25px"/>
                                                </div>
                                                    <div class="col-6 pr-4 sousePostEditButton">
                                                    {isAuthenticated && postCreatorId === loggedinUser
                                                        ? <div class="souseEditPostButton float-right">
                                                            <div class="form-group">
                                                                <Link to={
                                                                    {
                                                                        pathname: "/p/edit/" + this.props.obj._id,
                                                                        state: {
                                                                            postTimestamp: postUnixTimestamp
                                                                        }
                                                                    }
                                                                }>
                                                                    <button type="submit" class="waves-effect waves-light btn-large"><p class="lead buttonFont">Edit Post</p></button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        : <div></div>
                                                    }
                                                </div>
                                                </div>
                                                <div class="row my-0 middleRowContent">
                                                    <div class="col-6 pl-4 souseUserNameColumn">
                                                    <h5 class="float-left userNameData">
                                                        <span><Link to={`/${postCreatorName}`} class="profileNameLink">{postCreatorName}</Link></span>
                                                    </h5>
                                                </div>
                                                    <div class="col-6 pr-4 souseUserFollowersColumn"></div>
                                                </div>
                                                <div class="row my-0 bottomRowContent">
                                                    <div class="col-6 pl-4 souseUserLocationColumn">
                                                        <h6 class="float-left locationData">Brickell City Centre, Miami, Florida</h6>
                                                    </div>
                                                    <div class="col-6 pr-4 souseUserFollowingColumn"></div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="row souseBottomHalf">
                                        <div class="container-fluid">
                                            <div class="col-12">
                                                <div class="pre-scrollable postScroll">
                                                    <h6 class="sousePostCaption">{postCaption}</h6>
                                                </div>
                                            </div>     
                                            <div class="col-12 no-gutters sousePostUserCommentsLink">
                                                <h6 class="souseCommentsLinkFont" onClick={this.displayComments}>View all {commentsTotal} comments</h6>
                                            </div>
                                        </div>
                                        <div class="col-12 souseFooter fixed-bottom">
                                            <div class="no-gutters footerSection">
                                                <div class="souseFooter">
                                                    <h6><i class="far fa-copyright"></i>{this.state.currentYear} Souse</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                    }
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