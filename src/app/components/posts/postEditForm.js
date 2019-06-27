import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PostEdit extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUsername = user.username;
        const loggedInUserId = user.id;
        const postIdPathname = window.location.pathname;
        const postIdFound = postIdPathname.slice(8);
        
        this.state = {
            posts: [],
            users: [],
            originalPostId: postIdFound,
            postCreatorId: '',
            postCaption: ''
        };
        this.onChangepostCaption = this.onChangepostCaption.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        { /* Edit Post Command */ }
        const apiRoute = "/souseAPI";
        const editRoute = "/p/edit";
        const postId = this.state.originalPostId;
        console.log(postId);
        axios.get(apiRoute + editRoute + "/" + postId)
          .then(res => {
              this.setState({ 
                postCaption: res.data.sousePosts.postCaption,
                postCreatorId: res.data.postCreator
                });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    delete() {
        const {isAuthenticated, user} = this.props.auth;
        const userName = user.username;
        const postId = this.state.originalPostId;
        const apiRoute = "/souseAPI";
        const deleteRoute = "/p/delete";
        axios.get(apiRoute + deleteRoute + "/" + postId)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
        this.props.history.push("/" + userName);
        window.location.reload(false);
    }

    onChangepostCaption = (e) => {
        this.setState({
            postCaption: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const postData = {
            postCreatorId: this.state.postCreatorId,
            postCaption: this.state.postCaption
        };
        const apiRoute = "/souseAPI";
        const updateRoute = "/p/update";
        const postId = this.state.originalPostId;

        axios.post(apiRoute + updateRoute + "/" + postId, postData)
            .then(res => console.log(res.data));

        this.props.history.push("/p/" +  postId);
    }
    
    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUser = "" + user.id + "";
        const postCreatorId = this.state.postCreatorId;
         
        return (
            <div>
                {isAuthenticated && postCreatorId == loggedInUser
                    ? <div class="container">
                        <form onSubmit={this.onSubmit}>
                            <div class="input-field">
                                <textarea 
                                    class="materialize-textarea"
                                    name="postCaption"
                                    id="souseCaptionPost"  
                                    rows="1"
                                    value={this.state.postCaption}
                                    onChange={this.onChangepostCaption}></textarea>
                                <label class="active" for="souseCaptionPost">Caption</label>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="waves-effect waves-light btn-large">Update</button>
                            </div>
                        </form>
                        <div class="form-group col d-flex justify-content-center">
                            <button onClick={this.delete} class="waves-effect waves-light btn-large">Delete</button>
                        </div>
                    </div>
                    : <div></div>
                }
            </div>
            
          );
      }
}

PostEdit.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PostEdit)