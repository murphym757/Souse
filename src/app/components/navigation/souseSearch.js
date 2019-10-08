import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    SouseForm
} from '../../assets/styles/mainStyling';

import M from 'materialize-css';
class SouseSearch extends Component {
    constructor(props) {
        super(props);
        const {isAuthenticated, user} = this.props.auth;
        const loggedinUserTheme = user.userTheme;
        this.state = {
            usersFilter: ""
        };
    }

     handleChange = (e) => {
        this.setState({
            usersFilter: e.target.value
        });
        this.props.onChange(e.target.value)
    }

    componentDidMount(){
        M.AutoInit();
    }
    render() {        
        return (
            <div class="container">
                <SouseForm onSubmit={this.onSubmit}>
                    <div class="input-field">
                        <textarea 
                            id="souseCaptionPost" 
                            class="materialize-textarea"
                            name="postCaption"
                            id="souseCaptionPost"  
                            rows="1"
                            value={this.state.userSearch} 
                            onChange={this.handleChange}>
                        </textarea>
                        <label for="souseCaptionPost">Search</label>
                    </div>
                </SouseForm>
                {Object.keys(this.props.souseSearchedUsers)
                    .map((object, i) => (
                        <Link to={`/${this.props.souseSearchedUsers[i].username}`} onClick={() => window.location.refresh()}>
                            <div class="row">
                                <h6 class="col-9">{this.props.souseSearchedUsers[i].username}</h6>
                            </div>
                        </Link>
                    ))}
            </div>   
          );
      }
}
SouseSearch.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter (SouseSearch))