import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating white black-text'>HT</NavLink></li>
        </ul>
    );
};

export default SignedLinks;