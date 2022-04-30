import React, {useState} from 'react';
import ProductItemTeaser from './ProductItemTeaser';
import { FormattedMessage } from 'react-intl';

const ProductList = ({products, title = null}) => {
    if(!products.length) {
        return (
            <div className='post-list-empty'><FormattedMessage id="app.not_found.products" /></div>
        )
    }

    return (
        <div className='product_list'>
            {title &&
                <h2 className='block__title'>{title}</h2>
            }
            <div className='row'>
                {products.map((product, index) =>
                    <ProductItemTeaser key={product.node_id} product={product} />
                )}
            </div>
        </div>
    );
};

export default ProductList;