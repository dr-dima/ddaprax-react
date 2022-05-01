import logo from '../../logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to={`${process.env.PUBLIC_URL}/`} className="logo" title="DDAP-RAX">
            <img src={logo} alt="DDAP-RAX" />
        </Link>
    );
};

export default Logo;