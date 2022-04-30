import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";



const useValidation = (value, validations, isDirty) => {
    const [isError, setIsError] = useState(true);
    const [msgsError, setMsgsError] = useState([]);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    useEffect(() => {
        if(!isDirty) {
            return;
        }
        let flagError = false;
        let errorMsgArr = [];

        for (const validation in validations) {

            switch (validation) {
                case 'isEmpty':
                    if(!value || value.length === 0) {
                        flagError = true;
                        errorMsgArr.push(<FormattedMessage id="app.form.error.is_empty" />);
                    }
                    break;
                case 'minLength':
                    if(value.length < validations[validation]) {
                        flagError = true;
                        errorMsgArr.push(<FormattedMessage id="app.form.error.min_length" values={{number: validations[validation]}} />);
                    }
                    break;
                case 'maxLength':
                    if(value.length > validations[validation]) {
                        flagError = true;
                        errorMsgArr.push(<FormattedMessage id="app.form.error.max_length" values={{number: validations[validation]}} />);
                    }
                    break;
                case 'isEmail':
                    if(!validateEmail(value)) {
                        flagError = true;
                        errorMsgArr.push(<FormattedMessage id="app.form.error.email" />);
                    }
                    break;
            }
        }
        setMsgsError(errorMsgArr);
        setIsError(flagError);
    }, [value, isDirty])

    return {
        isError,
        msgsError
    }
};

export default useValidation;