import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ThumbsOk } from 'styled-icons/typicons/ThumbsOk';
import { ThumbsDown } from 'styled-icons/typicons/ThumbsDown';

class CommentDelete extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const loggedinUsername = user.username;
        const {originalPostId} = this.props.location.state;
        const commentIdFinder = window.location.pathname;
        const commentIdFound = commentIdFinder.slice(10);
        this.state = {
            commentCreatorId: loggedinUser,
            commentCreatorUsername: loggedinUsername,
            commentId: commentIdFound,
            originalPostId: originalPostId.originalPostId
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
        window.location.reload(false);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.username;
        const ThumbsOkIcon = styled(ThumbsOk)
        `
            color: #C45758;
            height: 1.1em;
            width: 1.5em;
            `;
        const ThumbsDownIcon = styled(ThumbsDown)
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
                                        <div class="row optionRow">
                                            <div class="col-6"><Link to={`/p/${this.state.originalPostId}`}><ThumbsDownIcon /></Link></div>
                                            <div class="col-6" onClick={this.delete}><ThumbsOkIcon /></div>
                                        </div>
                                    </h6>
                                </div>
                            </div>
                        </div>
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