import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import M from 'materialize-css';
import { Delete } from 'styled-icons/typicons/Delete';
import { ThumbsOk } from 'styled-icons/typicons/ThumbsOk';
import { ThumbsDown } from 'styled-icons/typicons/ThumbsDown';
import { DotsHorizontalRounded } from 'styled-icons/boxicons-regular/DotsHorizontalRounded';
import Timestamp from 'react-timestamp';
import CommentDelete from './commentDeleteSection';
import {
    SouseForm
} from '../../assets/styles/mainStyling';
import { 
    CommentsUserIcon,
    CommentCreatorFont,
    CommentCaptionFont
} from '../../assets/styles/commentStyling';
import {
    PreScrollable,
    SouseDiv
} from '../../assets/styles/postsStyling';
import {
    DeleteIcon
} from '../../assets/styles/userProfileStyling';

class CommentsSection extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const loggedinUsername = user.username;
        const souseCommentorImage = this.props.souseCommentorImage;
        const originalPostData = this.props.originalPostData;
        const originalPostId = this.props.originalPostData._id;
        this.state = {
            commentCreatorId: loggedinUser,
            commentCreatorUsername: loggedinUsername,
            originalPostId: originalPostId,
            commentId: '',
            postComment: '',
            deleteCommentSelected: false,
            userIcon: souseCommentorImage
        };
        this.onChangePostComment = this.onChangePostComment.bind(this);
        this.onSubmitComment = this.onSubmitComment.bind(this);
        this.delete = this.delete.bind(this);
    }

    onChangePostComment = (e) => {
        this.setState({
            postComment: e.target.value
        });
    }

    delete() {
        const {isAuthenticated, user} = this.props.auth;
        const userName = user.username;
        const postId = this.state.originalPostId;
        const commentId = this.state.commentId;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/c/delete";
        axios.get(apiRoute + deleteRoute + "/" + commentId)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        this.props.history.push("/p/" + postId);
        window.location.reload();
    }
   
    commentsFinder() {
        const souseCommentData = this.props.souseCommentData;
        const souseCommentList = ["" + this.state.originalPostId + ""],
            souseCommentsList = new Set(souseCommentList),
            souseFilterData = souseCommentData.filter(souseCommentsData => souseCommentsList.has(souseCommentsData.originalPostId));
        return souseFilterData;
    }

    onSubmitComment = (e) => {
        e.preventDefault();
        const postData = {
            commentCreatorId: this.state.commentCreatorId,
            commentCreatorUsername: this.state.commentCreatorUsername,
            souseComment: this.state.postComment,
            originalPostId: this.state.originalPostId
        };
        const apiRoute = "/souseAPI";
        const createRoute = "/c/add";

        axios.post(apiRoute + createRoute, postData);

        this.setState({
            commentCreatorId: '',
            commentCreatorUsername: '',
            souseComment: '',
            originalPostId: ''
        });
        window.location.reload();
    }
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.username;
        const loggedinUserId = user.id;
        const originalPostId = this.props.originalPostData._id;
        return (
            <SouseDiv className="container-fluid">
                <div class="souseCommentInput"> {/* Should go on seperate comments page */}
                    <div class="commentsPostsSection">
                        <PreScrollable>
                            {Object.keys(this.commentsFinder())
                                .map((object, i) => (
                                    <div class="row no-gutters commentsSectionBody mt-0 mb-0">
                                        <div class="col-2">
                                            <CommentsUserIcon className="souseUserIconComments" 
                                                src= {this.state.userIcon}
                                                alt="souseUserIconComments"
                                                width="25px" 
                                                height="25px"/>
                                        </div>
                                        {isAuthenticated
                                            ?   <div></div>
                                            :   <div></div>
                                        }
                                        <div class="col-10">
                                            <div class="commentDataColumn">
                                                <CommentCaptionFont className="pr-3">
                                                    <span className="pr-1"><CommentCreatorFont to={`/${this.commentsFinder()[i].commentCreatorUsername}`}>{this.commentsFinder()[i].commentCreatorUsername}</CommentCreatorFont> </span>{this.commentsFinder()[i].souseComment}
                                                </CommentCaptionFont>
                                                <div class="row souseCommentsDataReply no-gutters">
                                                    <h6 class="col-3 commentTime"><Timestamp relative time={Date} relativeTo={this.commentsFinder()[i].commentCreatedDate} /></h6>
                                                    {loggedinUserId == this.commentsFinder()[i].commentCreatorId 
                                                        ?   <CommentDelete 
                                                                commentId={this.commentsFinder()[i]._id}
                                                                originalPostId={originalPostId} />
                                                        :   <div></div>
                                                    }
                                                </div>
                                                <div class="row"> {/* Comment Edit Options */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            ))}
                        </PreScrollable>
                    </div>
                        {isAuthenticated 
                            ? <div class="commentsFormSection">
                            <SouseForm class="col-12" onSubmit={this.onSubmitComment}>
                                <div class="row">
                                    <div class="input-field col-12">
                                        <div class="container">
                                        <input 
                                            id="souse_comment" 
                                            type="text"
                                            maxLength={1000} 
                                            className="validate" 
                                            value={this.state.postComment}
                                            onChange={this.onChangePostComment} />
                                        <label for="souse_comment">Add a Comment ({this.state.postComment.length}/1000)</label>
                                    </div>
                                    </div>
                                </div>
                            </SouseForm>
                        </div>
                            : <div></div>
                        }
                </div>
            </SouseDiv>
          );
      }
}

CommentsSection.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(CommentsSection))