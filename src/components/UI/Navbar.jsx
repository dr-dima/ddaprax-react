import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className='main_menu'>
            <ul>
                <li>
                    <NavLink to={`${process.env.PUBLIC_URL}/`} end>
                        <FormattedMessage id="app.menu.home" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${process.env.PUBLIC_URL}/posts`}>
                        <FormattedMessage id="app.menu.posts" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${process.env.PUBLIC_URL}/products`}>
                        <FormattedMessage id="app.menu.products" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;