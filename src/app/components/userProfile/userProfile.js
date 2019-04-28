import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostIndex from '../posts/postIndex';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUsername = user.username;
        const loggedInUserId = user.id;
        const usernameFinder = window.location.pathname;
        const usernameFound = usernameFinder.slice(1);
        
        this.state = {
            posts: [],
            users: [],
            postCreatorUsername: usernameFound,
            postCreatorId: '',
            postTotalDisplay: '1'
        };
    }

    componentDidMount() {
        { /* Posts Collection */ }
        const apiRoute = "/souseAPI";
        const findPostRoute = "/p";
        axios.get(apiRoute + findPostRoute)
            .then(res => {
                const posts = res.data;
                console.log(posts);
                this.setState({
                    posts: posts
                });
            })
            .catch(function (error) {
                console.log(error);
            }) 
        { /* Users Collection */ }
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

    postFinder() {
        const souseUsers = this.state.users;
        const filteredUsernameData = Object.keys(souseUsers).filter((i) => {
                return souseUsers[i].username === "" + this.state.postCreatorUsername + ""
            }),
            userIdFinder = Object.keys(souseUsers).map((object, i) => {
                return souseUsers[filteredUsernameData]._id
            }),
            userId = userIdFinder.find((i) => {
                return "" + userIdFinder[0] + ""
            });
        const sousePosts = this.state.posts;
        const souseUserList = ["" + userId + ""],
            sousePostsList = new Set(souseUserList),
            souseFilterData = sousePosts.filter(sousePost => sousePostsList.has(sousePost.postCreator));
        return souseFilterData;
    }

    postFilterDisplay() {
       const postFilterDisplay = Object.keys(this.postFinder()).map((object, i) => {
            return <div obj={object} key={i}>
                <h6><Link to={`/p/${this.postFinder()[i]._id}`}>{this.postFinder()[i]._id}</Link></h6>
            </div>
        });
        return postFilterDisplay;
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const loggedInUsername = user.username;
        const usernamePage = this.props.match.params.username;
        const postsTotal = "" + this.postFinder().length + "";
        return (
            <div class="container">
            {isAuthenticated 
                ? <div>
                    <h2>lope</h2> 
                    <h2>Welcome, {this.state.postCreatorUsername}</h2>
                </div>
                : <h2>Welcome Guest</h2>
            }
                <div class="usersPosts">
                    <h6><PostIndex/></h6>
                    {this.state.postTotalDisplay === postsTotal
                        ?   <h6>{postsTotal} post</h6>
                        :   <h6>{postsTotal} posts</h6>
                    }
                    {this.postFilterDisplay()}
                </div>
            </div>
        );
    }
}
UserProfile.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(UserProfile)