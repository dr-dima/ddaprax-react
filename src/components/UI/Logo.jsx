import logo from '../../logo.svg';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <NavLink to="/" className="logo" title="DDAP-RAX">
            <img src={logo} alt="DDAP-RAX" />
        </NavLink>
    );
};

export default Logo;