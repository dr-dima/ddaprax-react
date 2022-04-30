import React, { useContext } from 'react';
import { LocalContext } from '../../../contexts/LocalContext';
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
    const {lang, selectLanguage} = useContext(LocalContext);

    return (
        <div className='language-switcher'>
            <div className='language-switcher-items'>
                <div className='language-switcher-item'>
                    <a
                        href='#'
                        className={lang == "en" ? "language-switcher-link active" : "language-switcher-link"}
                        onClick={(e) => {
                            e.preventDefault();
                            selectLanguage("en");
                        }}
                    >
                        ENG
                    </a>
                </div>
                <div className='language-switcher-item'>
                    <a
                        href='#'
                        className={lang == "ru" ? "language-switcher-link active" : "language-switcher-link"}
                        onClick={(e) => {
                            e.preventDefault();
                            selectLanguage("ru");
                        }}
                    >
                        РУС
                    </a>
                </div>
                <div className='language-switcher-item'>
                    <a
                        href='#'
                        className={lang == "uk" ? "language-switcher-link active" : "language-switcher-link"}
                        onClick={(e) => {
                            e.preventDefault();
                            selectLanguage("uk");
                        }}
                    >
                        УКР
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;