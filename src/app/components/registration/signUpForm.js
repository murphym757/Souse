import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../../server/actions/authentication';
import classnames from 'classnames';
import {
    SouseButton,
    SouseForm
} from '../../assets/styles/mainStyling';

import {
    SouseColumn
} from '../../assets/styles/registrationStyling';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div class="d-none d-xl-block"> {/* For larger Sceens */}
                    <div class="col-6 mx-auto">
                        <SouseForm className="container-fluid" onSubmit={this.onSubmit}>
                            <div class="row">
                                <SouseColumn>
                                    <div class="input-field">
                                        <input 
                                            type="email"
                                            name="email" 
                                            class={classnames('form-control', {
                                                'is-invalid': errors.email
                                            })}
                                            id="souseEmail"
                                            value={this.state.email}
                                            onChange={this.onChange} 
                                        />
                                        <label for="souseEmail">Email</label>
                                        {errors.email && (<div class="invalid-feedback">{errors.email}</div>)}
                                    </div>
                                    <div class="input-field">
                                        <input 
                                            type="text"
                                            name="username" 
                                            class={classnames('form-control', {
                                                'is-invalid': errors.username
                                            })} 
                                            id = "souseUsername"
                                            maxLength={30}
                                            value={this.state.username}
                                            onChange={this.onChange} 
                                        />
                                        <label for="souseUsername">Username ({this.state.username.length}/30)</label>
                                        {errors.username && (<div class="invalid-feedback">{errors.username}</div>)}
                                    </div>  
                                </SouseColumn>
                                <SouseColumn>
                                    <div class="input-field">
                                        <input 
                                            type="text"
                                            name="firstName" 
                                            class={classnames('form-control', {
                                                'is-invalid': errors.firstName
                                            })} 
                                            id = "souseFirstName"
                                            value={this.state.firstName}
                                            onChange={this.onChange}
                                        />
                                        <label for="souseFirstName">First Name  ({this.state.firstName.length}/30)</label>
                                        {errors.firstName && (<div class="invalid-feedback">{errors.firstName}</div>)}
                                    </div>
                                    <div class="input-field">
                                        <input 
                                            type="text"
                                            name="lastName" 
                                            class={classnames('form-control', {
                                                'is-invalid': errors.lastName
                                            })} 
                                            id="souseLastName"
                                            value={this.state.lastName}
                                            onChange={this.onChange}
                                        />
                                        <label for="souseLastName">Last Name  ({this.state.lastName.length}/30)</label>
                                        {errors.lastName && (<div class="invalid-feedback">{errors.lastName}</div>)}
                                    </div>
                                </SouseColumn>
                                <SouseColumn>
                                    <div class="input-field">
                                        <input 
                                            type="password"
                                            name="password"
                                            class={classnames('form-control', {
                                                'is-invalid': errors.password
                                            })} 
                                            id="sousePassword"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                        <label for="sousePassword">Password</label>
                                        {errors.password && (<div class="invalid-feedback">{errors.password}</div>)}
                                    </div>
                                    <div class="input-field">
                                        <input 
                                            type="password"
                                            name="password_confirm"
                                            class={classnames('form-control', {
                                                'is-invalid': errors.password_confirm
                                            })} 
                                            id="sousePasswordConfirm"
                                            value={this.state.password_confirm}
                                            onChange={this.onChange}
                                        />
                                        <label for="sousePasswordConfirm">Password Confirm</label>
                                        {errors.password_confirm && (<div class="invalid-feedback">{errors.password_confirm}</div>)}
                                    </div>
                                </SouseColumn>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <SouseButton type="submit" className="waves-effect waves-light btn-large">
                                        <p class="lead buttonFont">Sign Up</p>
                                    </SouseButton>
                                </div>
                            </div>
                        </SouseForm>
                    </div>
                </div>
                <div class="d-xl-none"> {/* For smaller Sceens */}
                    <div class="col-12 mx-auto">
                        <SouseForm className="container-fluid" onSubmit={this.onSubmit}>
                            <div class="row">
                                <SouseColumn>
                                    <div class="input-field">
                                        <input 
                                            type="email"
                                            name="email" 
                                            class={classnames('form-control', {
                                                'is-invalid': errors.email
                                            })}
                                            id="souseEmail"
                                            value={this.state.email}
                                            onChange={this.onChange} 
                                        />
                                        <label for="souseEmail">Email</label>
                                        {errors.email && (<div class="invalid-feedback">{errors.email}</div>)}
                                    </div>
                                    <div class="input-field">
                                        <input 
                                            type="text"
                                            name="username" 
                                            class={classnames('form-control', {
                                                'is-invalid': errors.username
                                            })} 
                                            id = "souseUsername"
                                            maxLength={30}
                                            value={this.state.username}
                                            onChange={this.onChange} 
                                        />
                                        <label for="souseUsername">Username ({this.state.username.length}/30)</label>
                                        {errors.username && (<div class="invalid-feedback">{errors.username}</div>)}
                                    </div>  
                                </SouseColumn>
                                <SouseColumn>
                                    <div class="input-field">
                                        <input 
                                            type="text"
                                            name="firstName" 
                                            class={classnames('form-control', {
                                                'is-invalid': errors.firstName
                                            })} 
                                            id = "souseFirstName"
                                            value={this.state.firstName}
                                            onChange={this.onChange}
                                        />
                                        <label for="souseFirstName">First Name  ({this.state.firstName.length}/30)</label>
                                        {errors.firstName && (<div class="invalid-feedback">{errors.firstName}</div>)}
                                    </div>
                                    <div class="input-field">
                                        <input 
                                            type="text"
                                            name="lastName" 
                                            class={classnames('form-control', {
                                                'is-invalid': errors.lastName
                                            })} 
                                            id="souseLastName"
                                            value={this.state.lastName}
                                            onChange={this.onChange}
                                        />
                                        <label for="souseLastName">Last Name  ({this.state.lastName.length}/30)</label>
                                        {errors.lastName && (<div class="invalid-feedback">{errors.lastName}</div>)}
                                    </div>
                                </SouseColumn>
                                <SouseColumn>
                                    <div class="input-field">
                                        <input 
                                            type="password"
                                            name="password"
                                            class={classnames('form-control', {
                                                'is-invalid': errors.password
                                            })} 
                                            id="sousePassword"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                        <label for="sousePassword">Password</label>
                                        {errors.password && (<div class="invalid-feedback">{errors.password}</div>)}
                                    </div>
                                    <div class="input-field">
                                        <input 
                                            type="password"
                                            name="password_confirm"
                                            class={classnames('form-control', {
                                                'is-invalid': errors.password_confirm
                                            })} 
                                            id="sousePasswordConfirm"
                                            value={this.state.password_confirm}
                                            onChange={this.onChange}
                                        />
                                        <label for="sousePasswordConfirm">Password Confirm</label>
                                        {errors.password_confirm && (<div class="invalid-feedback">{errors.password_confirm}</div>)}
                                    </div>
                                </SouseColumn>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <SouseButton type="submit" className="waves-effect waves-light btn-large">
                                        <p class="lead buttonFont">Sign Up</p>
                                    </SouseButton>
                                </div>
                            </div>
                        </SouseForm>
                    </div>
                </div>
            </div>
          );
      }
}

SignUpForm.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(SignUpForm))