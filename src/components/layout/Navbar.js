import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

class Navbar extends Component {
    state = {
        sidenavVisible: false
    };
    
    handleClick = () => {
        this.setState({
            ...this.state,
            sidenavVisible: !this.state.sidenavVisible
        });
    };

    render() {
        const { auth, profile } = this.props;
        const links = auth.uid && auth.uid.length > 0 ? <SignedInLinks profile={profile} className="hide-on-med-and-down" /> : <SignedOutLinks />;
        
        return(
            <div>
                <nav className="nav-wrapper black">
                    <div className="container">
                        <Link to='/' className='brand-logo'>StoicPlan</Link>
                        <a href="#" className="sidebar-trigger hide-on-large-only" onClick={this.handleClick}>
                            <i className="material-icons">menu</i>
                        </a>
                        
                        <div className="right hide-on-med-and-down">
                            { links }
                        </div>
                    </div>
                </nav>

                <div className={"white-text black" + (this.state.sidenavVisible ? ' visible' : '')} id="mobile-links">
                    <a href="#" className="sidebar-trigger right" onClick={this.handleClick}>
                        <i className="material-icons  white-text">menu</i>
                    </a>

                    <div className="links">
                        { links }
                    </div>
                </div>
            </div>
        );
    }
};

const maoStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        profile : state.firebase.profile
    };
};

export default connect(maoStateToProps)(Navbar);