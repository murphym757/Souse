import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    SouseForm,
    LinkFontH6,
    SouseStyledLink
} from '../../assets/styles/mainStyling';
import { 
    SouseSearchUserIcon
} from '../../assets/styles/userProfileStyling';

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
            <div class="container-fluid m-0 p-0">
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
                <div class="row">
                    {Object.keys(this.props.souseSearchedUsers)
                        .map((object, i) => {
                            return <div class="col-3" obj={object} key={i}>
                            {this.state.usersFilter == ""
                                ?   <div></div>
                                :   <SouseStyledLink to={`/${this.props.souseSearchedUsers[i].username}`} onClick={() => window.location.refresh()}>
                                        <div class="row">
                                            <div class="col-12"> {/* User Icon */}
                                                <div class="container">
                                                    <div class="row">
                                                        <SouseSearchUserIcon className="mx-auto d-block justify-content-center">
                                                            <img className="souseUserSearchImage userHomeSearchImageBorder"
                                                                src={this.props.souseSearchedUsers[i].userImage}
                                                                alt="souseUserIcon"
                                                                width="45px" 
                                                                height="45px"/>
                                                        </SouseSearchUserIcon>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12"> {/* Username and User's Name */}
                                                <div class="container">
                                                    <div class="row">
                                                        <LinkFontH6 className="col-12 p-0 m-0 d-flex justify-content-center" style={{fontWeight: 600}}>{this.props.souseSearchedUsers[i].username}</LinkFontH6>
                                                        <LinkFontH6 className="col-12 p-0 m-0 d-flex justify-content-center">{this.props.souseSearchedUsers[i].firstName + " " +this.props.souseSearchedUsers[i].lastName}</LinkFontH6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SouseStyledLink>
                            }
                            </div>
                    })}
                </div>
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