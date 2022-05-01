import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { displayFormatedTimestamp } from '../../utils/postsHelper';

const PostItemTeaser = (props) => {
    const navigate = useNavigate();
    const intl = useIntl();

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
                        href={`${process.env.PUBLIC_URL}/posts/${props.post.node_id}`}
                        title={intl.formatMessage({id: "app.links.more"})}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(`${process.env.PUBLIC_URL}/posts/${props.post.node_id}`);
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