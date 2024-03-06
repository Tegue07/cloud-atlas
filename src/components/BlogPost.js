// src/components/BlogPost.js
import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>Posted by: {post.author}</small>
    </div>
  );
};

export default BlogPost;
