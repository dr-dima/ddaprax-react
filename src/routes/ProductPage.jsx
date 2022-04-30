import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostServices from '../API/PostService';
import PageTitle from '../components/Layout/PageTitle';
import ProductItemFull from '../components/Content/ProductItemFull';
import Layout from '../components/Layout/Layout';
import Loader from '../components/UI/Loader/Loader';
import { LocalContext } from '../contexts/LocalContext';

const ProductPage = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const {lang} = useContext(LocalContext);

    const [fetchProductById, isLoading, error] = useFetching(async (id) => {
        const response = await PostServices.getPost("https://ddaprax.com", `/node/${id}?_format=json`, lang);
        let data = response.data;

        let newProduct = {
            title: data.title[0].value,
            body: data.body[0].value,
            node_id: data.nid[0].value,
            created: data.created[0].value
        }

        setProduct(newProduct);
    });

    useEffect(() => {
        fetchProductById(params.id);
    }, [lang])

    return (
        <Layout>
            {isLoading &&
                <Loader />
            }
            <div className='container'>
                <PageTitle title={product.title} />
                <ProductItemFull product={product} />
            </div>
        </Layout>
    );
};

export default ProductPage;