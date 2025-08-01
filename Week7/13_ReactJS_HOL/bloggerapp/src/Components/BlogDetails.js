import React from 'react';

const posts = [
  { id: 101, title: 'React Hooks in Depth', date: '2025-07-01' },
  { id: 102, title: 'Optimizing Re-Renders', date: '2025-07-08' },
  { id: 103, title: 'Context vs Redux', date: '2025-07-15' },
];

export default function BlogDetails() {
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> — <em>{post.date}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}