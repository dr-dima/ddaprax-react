import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { displayFormatedTimestamp } from '../../utils/postsHelper';

const PostItemTeaser = (props) => {
    const navigate = useNavigate();

    return (
        <div className='post_teaser'>
            <div className='post_teaser__content'>
                <div className='post_teaser__title'>
                    {props.post.title}
                </div>
                <div className='post_teaser__created'>
                    {displayFormatedTimestamp(props.post.created)}
                </div>
                <div className='post_teaser__more'>
                    <a
                        href={`/posts/${props.post.node_id}`}
                        title={<FormattedMessage id="app.links.more" />}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(`/posts/${props.post.node_id}`);
                        }}
                    >
                        <FormattedMessage id="app.links.more" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PostItemTeaser;