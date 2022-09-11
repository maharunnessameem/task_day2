import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./SinglePosts.css";

const SinglePost = () => {
    let { id } = useParams();
    const [singlePosts, setSinglePosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setSinglePosts(data))
    }, []);

    return (
        <div className='singlePost bg-warning'>


            <h2>ID:{singlePosts.id}</h2>
            <h5>Title:{singlePosts.title}</h5>
            <p>{singlePosts.body}</p>
        </div>
    );
};

export default SinglePost;