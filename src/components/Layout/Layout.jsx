import React from 'react';
import Header from './Header';

const Layout = ({children}) => {
    return (
        <div className='page__wrapper'>
            <div className='layout-container'>
                <Header />
                <main className='main'>{children}</main>
            </div>
            <div className='footer'>
                @DDAP-RAX Ltd.
            </div>
        </div>
    );
};

export default Layout;