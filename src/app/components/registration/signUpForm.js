import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../../server/actions/authentication';
import classnames from 'classnames';


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
                <form onSubmit={this.onSubmit}>
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
                            value={this.state.usename}
                            onChange={this.onChange} 
                        />
                        <label for="souseUsername">Username</label>
                        {errors.username && (<div class="invalid-feedback">{errors.username}</div>)}
                    </div>
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
                        <label for="souseFirstName">First Name</label>
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
                        <label for="souseLastName">Last Name</label>
                        {errors.lastName && (<div class="invalid-feedback">{errors.lastName}</div>)}
                    </div>
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
                    <div class="form-group">
                        <button type="submit" class="waves-effect waves-light btn-large">Sign Up</button>
                    </div>
                </form>
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