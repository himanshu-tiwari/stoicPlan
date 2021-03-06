import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    };

    render() {
        if(this.props.auth.uid) return <Redirect to='/' />;

        const { authError } = this.props;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="">Sign In</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn black white-text z-depth-0">Login</button>
                        <div className="center red-text">
                            { authError ? <p>{ authError }</p> : '' }
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError : state.auth.authError,
        auth : state.firebase.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (creds) => dispatch(signIn(creds))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);