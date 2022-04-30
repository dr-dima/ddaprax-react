import { createContext } from "react";


export const LocalContext = createContext({
    lang: '',
    messages: null,
    selectLanguage: () => {}
})