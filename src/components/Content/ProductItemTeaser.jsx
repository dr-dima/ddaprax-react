import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { addDomainToImg } from '../../utils/postsHelper';
import Modal from '../UI/Modal/Modal';
import ProductOrderForm from './Forms/ProductOrderForm';
import { FormattedMessage, useIntl } from 'react-intl';

const ProductItemTeaser = ({product}) => {
    const navigate = useNavigate();
    const intl = useIntl();

    const [isModalForm, setIsModalForm] = useState(false);
    const [modalActive, setModalActive] = useState(false);

    const modalForm = <Modal active={modalActive} title={product.title} setActive={setModalActive}><ProductOrderForm product={product} classes="modal_product_order_form" /></Modal>;

    const openModalForm = (e) => {
        e.preventDefault();

        if(!isModalForm) {
            setIsModalForm(true);
            setTimeout(() => setModalActive(true), 100);

        }
        else {
            setModalActive(true);
        }
    }

    return (
        <div className='product__teaser col-sm-6'>
            <div className='product__teaser__content'>
                <div className='product__teaser__title'>
                    <a
                        href={`${process.env.PUBLIC_URL}/products/${product.node_id}`}
                        title={product.title}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(`${process.env.PUBLIC_URL}/products/${product.node_id}`);
                        }}
                    >
                        {product.title}
                    </a>
                </div>
                <div className="product__teaser__info">
                    {product.field_specification.length > 0 &&
                        <div className='product__teaser__field product__teaser__field_specification'>
                            <span className="field_content">{product.field_specification}</span>
                        </div>
                    }
                    {product.field_region.length > 0 &&
                        <div className='product__teaser__field product__teaser__field_region'>
                            <span className="field_name"><FormattedMessage id="app.field.region" /></span>
                            <span className="field_content">{product.field_region}</span>
                        </div>
                    }
                    {product.field_steel_grade.length > 0 &&
                        <div className='product__teaser__field product__teaser__field_steel_grade'>
                            <span className="field_name"><FormattedMessage id="app.field.steel_grade" /></span>
                            <span className="field_content">{product.field_steel_grade}</span>
                        </div>
                    }
                </div>
                <div className='product__teaser__body'>
                    {'body' in product && parse(product.body, {
                        replace: domNode => {
                            if(domNode.attribs && 'src' in domNode.attribs) {
                                domNode.attribs.src = addDomainToImg(domNode.attribs.src);
                            }
                        }
                    })}
                </div>
                <div className="product__teaser__btns">
                    <a
                        href={`${process.env.PUBLIC_URL}/products/${product.node_id}`}
                        title={intl.formatMessage({id: "app.btns.more"})}
                        className='btn'
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(`${process.env.PUBLIC_URL}/products/${product.node_id}`);
                        }}
                    >
                        <FormattedMessage id="app.btns.more" />
                    </a>
                    <span
                        className='btn btn-style-2'
                        title={intl.formatMessage({id: "app.btns.to_order"})}
                        onClick={(e) => {
                            openModalForm(e);
                        }}
                    >
                        <FormattedMessage id="app.btns.to_order" />
                    </span>
                </div>
                {isModalForm && modalForm}
            </div>
        </div>
    );
};

export default ProductItemTeaser;