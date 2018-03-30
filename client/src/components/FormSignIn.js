import React from 'react';

class FormSignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="screen-center">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <p class="title is-4">Hello!</p>
                            <p class="subtitle is-6">Login to your account.</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="field">
                                    <div className="control">
                                        <input className="input" type="email" placeholder="Email Address*" value={this.state.value} onChange={this.handleChange} required />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input className="input" type="password" placeholder="Password*" value={this.state.value} onChange={this.handleChange} required />
                                    </div>
                                </div>
                                <div className="has-text-centered">
                                    <input type="submit" value="Login" className='button is-link' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormSignIn;