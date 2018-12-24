import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    return(
        <nav className="nav-wrapper black">
            <div className="container">
                <Link to='/' className='brand-logo'>StoicPlan</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
};

const maoStateToProps = (state) => {
    console.log(state);
    return {};
};

export default connect(maoStateToProps)(Navbar);