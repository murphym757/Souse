import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../../server/actions/authentication';
import classnames from 'classnames';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div class="container-fluid">
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
                        <label for="email">Email</label>
                        <span class="helper-text" data-error="wrong" data-success="right">{"We'll never share your email with anyone else."}</span>
                        {errors.email && (<div class="invalid-feedback">{errors.email}</div>)}
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
                        <label for="password">Password</label>
                        {errors.password && (<div class="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div class="form-group">
                        <button type="submit" class="waves-effect waves-light btn-large">Login</button>
                    </div>
                </form>
            </div>
          );
      }
}

LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ loginUser })(LoginForm)