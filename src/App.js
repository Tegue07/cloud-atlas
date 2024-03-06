// src/App.js
import React from 'react';
import './App.css';
import BlogList from './components/BlogList';

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
      <h1>Welcome to Cloud Atlas Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
}

export default App;
