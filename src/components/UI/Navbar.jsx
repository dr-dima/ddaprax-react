import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className='main_menu'>
            <ul>
                <li>
                    <NavLink to="/">
                        <FormattedMessage id="app.menu.home" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts">
                        <FormattedMessage id="app.menu.posts" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products">
                        <FormattedMessage id="app.menu.products" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;