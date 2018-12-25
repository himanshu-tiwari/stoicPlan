import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid && auth.uid.length > 0 ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return(
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to='/' className='brand-logo'>StoicPlan</Link>
                { links }
            </div>
        </nav>
    );
};

const maoStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        profile : state.firebase.profile
    };
};

export default connect(maoStateToProps)(Navbar);