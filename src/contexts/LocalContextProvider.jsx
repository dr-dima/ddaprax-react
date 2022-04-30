import React, { Children, useState } from 'react';

import { LocalContext } from './LocalContext';

import Russian from '../lang/ru.json';
import Ukrainian from '../lang/uk.json';
import English from '../lang/en.json';
import { IntlProvider } from 'react-intl';

let local = localStorage.getItem("lang");
local = local ? local : navigator.language.slice(0, 2);

let lang;
if (local === 'ru') {
	lang = Russian;
}
else if(local == 'uk') {
    lang = Ukrainian;
}
else {
    lang = English;
}

export const LocalContextProvider = ({children}) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);

    const selectLanguage = (lang) => {
        localStorage.setItem("lang", lang);
        setLocale(lang);
        if (lang === 'ru') {
            setMessages(Russian);
        }
        else if(lang == 'uk') {
            setMessages(Ukrainian);
        }
        else {
            setMessages(English);
        }
    }

    const localContext = {
        lang: locale,
        messages,
        selectLanguage
    };

    return (
        <LocalContext.Provider value={localContext}>
            <IntlProvider messages={messages} locale={locale}>
                {children}
            </IntlProvider>
        </LocalContext.Provider>
    );
};
