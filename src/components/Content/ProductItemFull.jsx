import React from 'react';
import parse from 'html-react-parser';
import { addDomainToImg } from '../../utils/postsHelper';
import ProductOrderForm from './Forms/ProductOrderForm';
import { FormattedMessage } from 'react-intl';

const ProductItemFull = (props) => {
    return (
        <div className='product'>
            <div className='product__content'>
                <div className='product__title'>
                    {props.product.title}
                </div>
                <div className='product__body'>
                    {'body' in props.product && parse(props.product.body, {
                        replace: domNode => {
                            if(domNode.attribs && 'src' in domNode.attribs) {
                                domNode.attribs.src = addDomainToImg(domNode.attribs.src);
                            }
                        }
                    })}
                </div>
                <div className='product__order__form__block'>
                    <h3><FormattedMessage id="app.block_title.form_order" /></h3>
                    <ProductOrderForm product={props.product} classes={["product_order_form"]} />
                </div>
            </div>
        </div>
    );
};

export default ProductItemFull;