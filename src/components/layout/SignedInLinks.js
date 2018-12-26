import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedLinks = (props) => {
    const { firstName, lastName } = props.profile;
    let initials = (firstName ? firstName[0]: '') + (lastName ? lastName[0]: '');
    initials = initials.length ? initials : 'SP';

    return(
        <ul>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a href="#" onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating white black-text'>{ initials }</NavLink></li>
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    };
};

export default connect(null, mapDispatchToProps)(SignedLinks);