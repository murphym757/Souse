import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

class CommentsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
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

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.username;

        return (
            <div>
                <div class="souseCommentInput"> {/* Should go on seperate comments page */}
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="souse_comment" type="text" class="validate" />
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