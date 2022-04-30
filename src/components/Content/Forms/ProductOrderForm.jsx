import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import useInput from '../../../hooks/useInput';

const ProductOrderForm = ({product, classes}) => {
    const yourEmail = useInput("", {isEmpty: true, isEmail: true});
    const yourName = useInput("", {isEmpty: true, minLength: 3});

    const [isValidForm, setIsValidForm] = useState(false);

    useEffect(() => {
        setIsValidForm(!yourEmail.isError && !yourName.isError);
    }, [yourEmail, yourName])

    return (
        <form action="" className={classes}>
            <div className='form__item'>
                {(yourName.isError && yourName.msgsError.length > 0) &&
                    <div className='error form_item_error'>
                        {yourName.msgsError.map((item, key) =>
                            <div key={key}>{item}</div>
                        )}
                    </div>
                }
                <label htmlFor='your_name'><FormattedMessage id="app.form.label.your_name" /></label>
                <input
                    id='your_name'
                    onChange={e => yourName.onChange(e)}
                    onBlur={e => yourName.onBlur(e)}
                    value={yourName.value}
                    type="text"
                    name='your_name' />
            </div>
            <div className='form__item'>
                {(yourEmail.isError && yourEmail.msgsError.length > 0) &&
                    <div className='error form_item_error'>
                        {yourEmail.msgsError.map((item, key) =>
                            <div key={key}>{item}</div>
                        )}
                    </div>
                }
                <label htmlFor='your_email'><FormattedMessage id="app.form.label.your_email" /></label>
                <input
                    id='your_email'
                    onChange={e => yourEmail.onChange(e)}
                    onBlur={e => yourEmail.onBlur(e)}
                    value={yourEmail.value}
                    type="email"
                    name='your_email' />
            </div>
            <div className="form__actions">
                <button
                    type='submit'
                    className='btn'
                    disabled={!isValidForm}
                >
                    <FormattedMessage id="app.form.submit.send" />
                </button>
            </div>
        </form>
    );
};

export default ProductOrderForm;