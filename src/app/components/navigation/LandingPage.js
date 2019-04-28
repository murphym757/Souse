import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LandingPage extends Component {
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
            <div class="container">
                <h2>LandingPage</h2>
                {isAuthenticated 
                    ?   <div>
                            <h4>Logged In</h4>
                        </div> 
                    :   <div>
                            <h4>Not Logged In</h4>
                        </div> 
                }
                <div class="usersPosts">
                        {Object.keys(this.state.users)
                            .map((object, i) => (
                                <div>
                                    <Link to={`/${this.state.users[i].username}`}>{this.state.users[i].username}</Link>
                                </div>
                        ))}
                </div>
            </div>
          );
      }
}

LandingPage.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(LandingPage)