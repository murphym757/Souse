import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import styled from 'styled-components';
import { SouseButton } from '../../assets/styles/mainStyling';
import PostEdit from './commentDeleteSection';
import CommentsSection from './commentsSection';
import { CloseIcon } from '../../assets/styles/postsStyling';

class PostsGrid extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const sousePostCreatorId = this.props.obj.postCreator;
        const sousePostCaption = this.props.obj.sousePosts.postCaption;
        const sousePostImage = this.props.obj.sousePosts.postImageURL;
        const sousePostUnixTimestamp = this.props.obj.sousePosts.postUnixTimestamp;
        const sousePostCreatorName = this.props.postCreatorName;
        const sousePostCreatorImage = this.props.postCreatorImage; 
        this.state = {
            sousePostCreatorId: loggedinUser,
            sousePostCreatorName: sousePostCreatorName,
            sousePostCreatorImage: sousePostCreatorImage,
            sousePostCreatorId: sousePostCreatorId,
            sousePostCaption: sousePostCaption,
            sousePostImage: sousePostImage,
            sousePostUnixTimestamp: sousePostUnixTimestamp,     
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
        const sousePostData = this.props.obj;
        const souseUserData = this.props.souseUserData;
        const souseCommentData = this.props.souseCommentData;
        const sousePostCreatorId = this.state.sousePostCreatorId;
        const sousePostImage = this.state.sousePostImage;
        const sousePostCaption = this.state.sousePostCaption;
        const sousePostUnixTimestamp = this.state.sousePostUnixTimestamp;
        const sousePostCreatorName = this.state.sousePostCreatorName;
        const sousePostCreatorImage = this.state.sousePostCreatorImage;
        const commentSectionSelected = this.state.commentSectionSelected;
        const commentsTotal = "" + this.commentsFinder().length + "";  
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
                                            originalPostData={sousePostData}
                                            souseUserData={souseUserData} 
                                            souseCommentData={souseCommentData}/> {/* Comments */}
                                    </div>
                                :   <div>
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div>
                                                    <img class="souseUserIconComments" 
                                                        src={sousePostCreatorImage} 
                                                        alt="souseUserIconComments"
                                                        width="25px" 
                                                        height="25px"/>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <h5 class="sousePostCreatorName pl-4"> {sousePostCreatorName}</h5>
                                                </div>
                                            </div>
                                            {isAuthenticated && sousePostCreatorId === loggedinUser
                                                    ?  <div class="row"> {/*User Icon and Edit Button */}                                                  
                                                            <div class="col-12 d-flex flex-row-reverse">
                                                                <div class="form-group pt-4">
                                                                    <Link to={
                                                                        {
                                                                            pathname: "/p/edit/" + this.props.obj._id,
                                                                            state: {
                                                                                postTimestamp: sousePostUnixTimestamp
                                                                            }
                                                                        }
                                                                    }>
                                                                        <SouseButton type="submit" className="waves-effect waves-light btn-large"><p class="lead buttonFont">Edit Post</p></SouseButton>
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
                                                    <h6 class="sousePostCaption">{sousePostCaption}</h6>
                                                </div>
                                            </div>
                                            <div class="col-12 no-gutters sousePostUserCommentsLink">
                                            {commentsTotal == 0
                                                ?   <h6 class="souseCommentsLinkFont">This post has {commentsTotal} comments</h6>
                                                :   <h6 class="souseCommentsLinkFont" onClick={this.displayComments}>View all {commentsTotal} comments</h6>
                                                
                                            }              
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