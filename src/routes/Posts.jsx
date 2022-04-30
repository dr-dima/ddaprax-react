import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import {useFetching} from "../hooks/useFetching";
import PostServices from '../API/PostService';
import PostList from '../components/Content/PostList';
import Layout from '../components/Layout/Layout';
import Loader from '../components/UI/Loader/Loader';
import PageTitle from '../components/Layout/PageTitle';
import Pagination from '../components/Pagination/Pagination';
import { FormattedMessage } from 'react-intl';
import { LocalContext } from '../contexts/LocalContext';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const {lang} = useContext(LocalContext);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostServices.getPosts(currentPage, "https://ddaprax.com", '/rest/api/news', lang);
        setPosts([...response.data.rows]);
        setTotalPages(response.data.pager.total_pages);
    })

    useEffect(() => {
        fetchPosts();
    }, [currentPage, lang])

    const changePage = (page) => {
        setCurrentPage(page);
    }

    return (
        <Layout>
            {isPostsLoading &&
                <Loader />
            }
            <div className='container'>
                <PageTitle title={<FormattedMessage id="app.page_title.posts" />} />
                <PostList posts={posts} />
                <Pagination
                    page={currentPage}
                    totalPages={totalPages}
                    changePage={changePage}
                />
            </div>
        </Layout>
    );
};

export default Posts;