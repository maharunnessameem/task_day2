import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className='post bg-warning'>
            <h2>ID:{props.id}</h2>
            <h5>Title:{props.title}</h5>
            <p>{props.body}</p>
        </div>
    );
};

export default Post;