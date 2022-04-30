import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import {useFetching} from "../hooks/useFetching";
import PostServices from '../API/PostService';
import PostList from '../components/Content/PostList';
import Layout from '../components/Layout/Layout';
import Loader from '../components/UI/Loader/Loader'
import ProductList from '../components/Content/ProductList';
import { FormattedMessage } from 'react-intl';
import { LocalContext } from '../contexts/LocalContext';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [products, setProducts] = useState([]);
    const {lang} = useContext(LocalContext);

    const blockPostTitle = <FormattedMessage id="app.block_title.last_posts" />;
    const blockProductTitle = <FormattedMessage id="app.block_title.products" />;

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostServices.getPosts(0, "https://ddaprax.com", '/rest/api/news', lang);
        let tmpPost = response.data.rows.length > 3 ? response.data.rows.slice(0, 3) : response.data.rows;
        setPosts([...tmpPost]);
    })

    const [fetchProducts, isProductsLoading, productsError] = useFetching(async () => {
        const response = await PostServices.getPosts(0, "https://ddaprax.com", '/rest/api/products', lang);
        let tmpProd = response.data.rows.length > 6 ? response.data.rows.slice(0, 6) : response.data.rows;
        setProducts([...tmpProd]);
    })

    useEffect(() => {
        fetchPosts();
        fetchProducts();
    }, [lang])

    return (
        <Layout>
            {(isPostsLoading && isProductsLoading) &&
                <Loader />
            }
            <div className='container'>
                <div className='front__post_list front__block'>
                    <PostList posts={posts} title={blockPostTitle} />
                </div>
                <div className='front__product_list front__block'>
                    <ProductList products={products} title={blockProductTitle} />
                </div>
            </div>
        </Layout>
    );
};

export default Home;