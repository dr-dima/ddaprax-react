import React from 'react';

import "./modal.css";

const Modal = ({active, setActive, children, title = '', footer}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    {title.length > 0 &&
                        <h3>{title}</h3>
                    }
                    <button className="modal__closed" onClick={() => setActive(false)}>&#215;</button>
                </div>
                <div className='modal__body'>
                    {children}
                </div>
                {footer &&
                    <div className="modal__footer">{footer}</div>
                }
            </div>
        </div>
    );
};

export default Modal;