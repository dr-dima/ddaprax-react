import React, { useContext, useEffect, useState } from 'react';
import PostServices from '../API/PostService';
import ProductList from '../components/Content/ProductList';
import Layout from '../components/Layout/Layout';
import PageTitle from '../components/Layout/PageTitle';
import Pagination from '../components/Pagination/Pagination';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { FormattedMessage } from 'react-intl';
import { LocalContext } from '../contexts/LocalContext';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const {lang} = useContext(LocalContext);

    const [fetchProducts, isLoading, productsError] = useFetching(async () => {
        const response = await PostServices.getPosts(currentPage, "https://ddaprax.com", "/rest/api/products", lang);
        setProducts([...response.data.rows]);
        setTotalPages(response.data.pager.total_pages);
    })

    useEffect(() => {
        fetchProducts();
    }, [currentPage, lang])

    const changePage = (page) => {
        setCurrentPage(page);
    }

    return (
        <Layout>
            {isLoading &&
                <Loader />
            }
            <div className='container'>
                <PageTitle title={<FormattedMessage id="app.page_title.products" />} />
                <ProductList products={products} />
                <Pagination
                    page={currentPage}
                    totalPages={totalPages}
                    changePage={changePage}
                />
            </div>
        </Layout>
    );
};

export default Products;