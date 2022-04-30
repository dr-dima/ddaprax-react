import React from 'react';
import LanguageSwitcher from '../UI/LanguageSwitcher/LanguageSwitcher';
import Logo from '../UI/Logo';
import Navbar from '../UI/Navbar';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='branding'><Logo /></div>
                    <div className='header-nav'>
                        <Navbar />
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;