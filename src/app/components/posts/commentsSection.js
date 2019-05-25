import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Delete } from 'styled-icons/typicons/Delete';
import Timestamp from 'react-timestamp';
import CommentDelete from './commentDeleteSection';

class CommentsSection extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const loggedinUsername = user.username;
        const originalPostData = this.props.originalPostData;
        const originalPostId = this.props.originalPostData._id;
        this.state = {
            commentCreatorId: loggedinUser,
            commentCreatorUsername: loggedinUsername,
            originalPostId: originalPostId,
            commentId: '',
            postComment: ''
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
        axios.get(apiRoute + deleteRoute + "/" + postId)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        this.props.history.push("/p/" + postId);
    }
   
    commentsFinder() {
        const souseCommentData = this.props.souseCommentData;
        const souseCommentList = ["" + this.state.originalPostId + ""],
            souseCommentsList = new Set(souseCommentList),
            souseFilterData = souseCommentData.filter(souseCommentsData => souseCommentsList.has(souseCommentsData.originalPostId));
            console.log(souseFilterData);
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

        axios.post(apiRoute + createRoute, postData)
            .then(res => console.log(res.data));

        this.setState({
            commentCreatorId: '',
            commentCreatorUsername: '',
            souseComment: '',
            originalPostId: ''
        });
        window.location.reload();
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.username;
        const originalPostId = this.props.originalPostData._id;
        const DeleteIcon = styled(Delete)
        `
            color: #C45758;
            height: 1.1em;
            width: 1.5em;
            `;
        return (
            <div>
                <div class="souseCommentInput"> {/* Should go on seperate comments page */}
                    <div class="commentsPostsSection">
                        <div class="pre-scrollable">
                            {Object.keys(this.commentsFinder())
                                .map((object, i) => (
                                    <div class="row no-gutters commentsSectionBody">
                                        <div class="col-2">
                                    <img class="souseUserIconComments" 
                                        src = "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
                                        alt="souseUserIconComments"
                                        width="25px" 
                                        height="25px"/>
                                </div>
                                        <div class="col-10">
                                            <h6 class="souseCommentsCaption">
                                                <span class="pr-1"><Link to={`/${this.commentsFinder()[i].commentCreatorUsername}`}>{this.commentsFinder()[i].commentCreatorUsername}</Link> </span>{this.commentsFinder()[i].souseComment}
                                            </h6>
                                            <div class="row souseCommentsDataReply">
                                                <h6 class="col-4 pl-4 commentTime"><Timestamp relative time={Date} relativeTo={this.commentsFinder()[i].commentCreatedDate} /></h6>
                                                <h6 class="col-8 pl-2">
                                                {this.commentsFinder()[i].commentCreatorUsername == loggedinUser
                                                    ? <h6>
                                                        <Link to={{
                                                            pathname:`/c/delete/${this.commentsFinder()[i]._id}`,
                                                            state: {
                                                                originalPostId: {originalPostId}
                                                            }
                                                    }}><DeleteIcon /></Link>
                                                    </h6>
                                                    : <div></div>
                                                }
                                                </h6> {/* Should first disply the user who creator post */}
                                            </div>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                        {isAuthenticated 
                            ? <div class="row commentsFormSection">
                            <form class="col s12" onSubmit={this.onSubmitComment}>
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input 
                                            id="souse_comment" 
                                            type="text"
                                            maxLength={1000} 
                                            class="validate" 
                                            value={this.state.postComment}
                                            onChange={this.onChangePostComment} />
                                        <label for="souse_comment">Add a Comment ({this.state.postComment.length}/1000)</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                            : <div></div>
                        }
                </div>
            </div>
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