import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    authSignIn
} from '../actions/auth';


class FormSignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.authSignIn(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="screen-center">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <p className="title is-4">Hello!</p>
                            <p className="subtitle is-6">SignIn to your account.</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="field">
                                    <div className="control">
                                        <input className="input" type="email" placeholder="Email Address*" value={this.state.email} onChange={this.handleEmailChange} required />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input className="input" type="password" placeholder="Password*" value={this.state.password} onChange={this.handlePasswordChange} required />
                                    </div>
                                </div>
                                <div className="has-text-centered">
                                    <input type="submit" value="SignIn" className='button is-link' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            authSignIn
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn);