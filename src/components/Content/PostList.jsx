import React from 'react';
import PostItemTeaser from './PostItemTeaser';
import { FormattedMessage } from 'react-intl';

const PostList = ({posts, title = null}) => {

    if(!posts.length) {
        return (
            <div className='post-list-empty'><FormattedMessage id="app.not_found.posts" /></div>
        )
    }

    return (
        <div className='post__list'>
            {title &&
                <h2 className='block__title'>{title}</h2>
            }

            {posts.map((post, index) =>
                <PostItemTeaser key={post.node_id} post={post} />
            )}

        </div>
    );
};

export default PostList;