import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

class CommentsSection extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.id;
        const loggedinUsername = user.username;
        const originalPostId = this.props.originalPostId;
        this.state = {
            users: [],
            commentCreatorId: loggedinUser,
            commentCreatorUsername: loggedinUsername,
            originalPostId: originalPostId,
            postComment: ''
        };
        this.onChangePostComment = this.onChangePostComment.bind(this);
        this.onSubmitComment = this.onSubmitComment.bind(this);
    }

    onChangePostComment = (e) => {
        this.setState({
            postComment: e.target.value
        });
    }

    componentDidMount() {
        const apiRoute = "/souseAPI";
        const findUserRoute = "/u";
        axios.get(apiRoute + findUserRoute)
            .then(res => {
                const users = res.data;
                console.log(users);
                this.setState({
                    users: users
                });
            })
            .catch(function (error) {
                console.log(error);
            })
        }

    onSubmitComment = (e) => {
        e.preventDefault();
        const postData = {
            commentCreatorId: this.state.commentCreatorId,
            souseComment: this.state.postComment,
            originalPostId: this.state.originalPostId
        };
        const apiRoute = "/souseAPI";
        const createRoute = "/c/add";

        axios.post(apiRoute + createRoute, postData)
            .then(res => console.log(res.data));

        this.setState({
            commentCreatorId: '',
            souseComment: '',
            originalPostId: ''
        });
        window.location.reload();
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.username;

        return (
            <div>
                <div class="souseCommentInput"> {/* Should go on seperate comments page */}
                    <div class="row">
                        <form class="col s12" onSubmit={this.onSubmitComment}>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input 
                                        id="souse_comment" 
                                        type="text" 
                                        class="validate" 
                                        value={this.state.postComment}
                                        onChange={this.onChangePostComment} />
                                    <label for="souse_comment">Add a Comment</label>
                                </div>
                            </div>
                        </form>
                    </div>
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