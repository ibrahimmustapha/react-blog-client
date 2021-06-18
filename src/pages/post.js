import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Post() {

    let { postId } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:2500/api/getFromId/${postId}`)
        .then((data) => {
            setPost({
                title: data.data[0].title, 
                category: data.data[0].category,
                AddedOnDate: data.data[0].AddedOnDate,
                post_text: data.data[0].post_text, 
                username: data.data[0].username,
            })
          }
        );
    }, [])

    return (
      <div className="post-card">
        <h1>{post.title}</h1>
        <h6>
          {post.category} | {" "}
          <span style={{ color: "#000" }}>{post.AddedOnDate}</span>
        </h6>
        <p className="ppp">{post.post_text}</p>
        <h6>{post.username}</h6>
      </div>
    );
}

export default Post;