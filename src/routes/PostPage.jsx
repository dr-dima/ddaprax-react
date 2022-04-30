import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostServices from '../API/PostService';
import PostItemFull from '../components/Content/PostItemFull';
import Layout from '../components/Layout/Layout';
import Loader from '../components/UI/Loader/Loader';
import PageTitle from '../components/Layout/PageTitle';
import { useFetching } from '../hooks/useFetching';
import { LocalContext } from '../contexts/LocalContext';

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const {lang} = useContext(LocalContext);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostServices.getPost("https://ddaprax.com", `/node/${id}?_format=json`, lang);
        let data = response.data;

        let newPost = {
            title: data.title[0].value,
            body: data.body[0].value,
            node_id: data.nid[0].value,
            created: data.created[0].value
        }

        setPost(newPost);
    });

    useEffect(() => {
        fetchPostById(params.id);
    }, [lang])

    return (
        <Layout>
            {isLoading &&
                <Loader />
            }
            <div className='container'>
                <PageTitle title={post.title} />
                <PostItemFull post={post} />
            </div>
        </Layout>
    );
};

export default PostPage;