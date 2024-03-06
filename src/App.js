// src/App.js
import React from 'react';
import './App.css';
import BlogList from './components/BlogList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

function App() {
  const posts = [
    {
      id: 1,
      title: 'Introduction to Cloud Computing',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'AWS Lambda Functions',
      content: 'Nulla facilisi. Duis et vehicula velit.',
      author: 'Jane Smith',
    },
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>
          <FontAwesomeIcon icon={faCloud} /> Cloud Atlas Blog
        </h1>
        <p>Exploring the Cloud Universe</p>
      </header>
      <div className="blog-list">
        <BlogList posts={posts} />
      </div>
    </div>
  );
}

export default App;
