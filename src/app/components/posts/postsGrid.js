import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class PostsGrid extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUser = user.username;
        this.state = {
            postCreatorId: loggedinUser,
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
        const postCreatorId = this.props.obj.postCreator;
        const postCaption = this.props.obj.sousePosts.postCaption;
        const sousePostImage = this.props.obj.sousePosts.postImageURL;
        return (
            <div class="container pt-5">
                <div class="row">
                    <div class="col-9">
                        <img class="sousePostImage pb-2" 
                            src={sousePostImage}
                            alt="sousePostImage" 
                            height="1080" 
                            width="1080" />
                        {isAuthenticated && postCreatorId === loggedinUser
                            ?   <div class="row">
                                    <div class="col-6">
                                        <div class="form-group col d-flex justify-content-center">
                                            <Link to={"/p/edit/" + this.props.obj._id}>
                                                <button type="submit" class="waves-effect waves-light btn-large">Edit</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group col d-flex justify-content-center">
                                            <button onClick={this.delete} class="waves-effect waves-light btn-large">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            :   <div></div>
                        }
                    </div>
                    <div class="col-3">
                        <div class="container">
                            <h6>{postCaption}</h6>
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