import React from 'react';
import parse from 'html-react-parser';
import { addDomainToImg } from '../../utils/postsHelper';

const PostItemFull = (props) => {

    return (
        <div className='post'>
            <div className='post__content'>
                <div className='post__title'>
                    {props.post.title}
                </div>
                <div className='post__body'>
                    {'body' in props.post && parse(props.post.body, {
                        replace: domNode => {
                            if(domNode.attribs && 'src' in domNode.attribs) {
                                domNode.attribs.src = addDomainToImg(domNode.attribs.src);
                            }
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default PostItemFull;