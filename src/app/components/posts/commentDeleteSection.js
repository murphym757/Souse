import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { CommentDeleteIcon } from '../../assets/styles/commentStyling';
import {
    PreScrollable
} from '../../assets/styles/postsStyling';

class CommentDelete extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const loggedinUsername = user.username;
        const originalPostId = this.props.originalPostId;
        const commentId = this.props.commentId;
        this.state = {
            commentCreatorId: loggedinUser,
            commentCreatorUsername: loggedinUsername,
            commentId: commentId,
            originalPostId: originalPostId
        };
        this.delete = this.delete.bind(this);
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

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.username;
        return (
            <div>
                <div class="souseCommentInput"> {/* Should go on seperate comments page */}
                    <div class="commentsPostsSection">
                        <PreScrollable>
                            <div class="row no-gutters commentsSectionBody">
                                <div class="col-10">
                                    <h6 class="souseCommentsCaption">
                                        <div class="row optionRow">
                                            <div class="col-6" onClick={this.delete}><CommentDeleteIcon /></div>
                                        </div>
                                    </h6>
                                </div>
                            </div>
                        </PreScrollable>
                    </div>
                </div>
            </div>
          );
      }
}

CommentDelete.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(CommentDelete))