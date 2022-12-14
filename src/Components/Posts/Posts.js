import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h2>Welcome</h2>
            <div className='posts-container'>
                {
                    posts.map(post => <Post key={post.id} id={post.id} title={post.title} body={post.body} ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;