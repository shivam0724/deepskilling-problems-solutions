import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';
import './App.css';

function App() {
  const [view, setView] = useState('book');
  let content;
  if (view === 'book') {
    content = <BookDetails />;
  } else if (view === 'blog') {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  const renderSwitch = () => {
    switch (view) {
      case 'book': return <BookDetails />;
      case 'blog': return <BlogDetails />;
      case 'course': return <CourseDetails />;
      default: return null;
    }
  };

  return (
    <div className="App">
      <h1>bloggerapp: Conditional Rendering</h1>

      <div className="nav-buttons">
        <button onClick={() => setView('book')}>Book</button>
        <button onClick={() => setView('blog')}>Blog</button>
        <button onClick={() => setView('course')}>Course</button>
      </div>

      <div>
        <h2>Current View: {view.charAt(0).toUpperCase() + view.slice(1)}</h2>
      </div>

      <hr />

      {content}

      <hr />

      {view === 'blog'
        ? <BlogDetails />
        : view === 'course'
          ? <CourseDetails />
          : <BookDetails />
      }

      <hr />

      {view === 'book' && <BookDetails />}
      {view === 'blog' && <BlogDetails />}
      {view === 'course' && <CourseDetails />}

      <hr />

      {renderSwitch()}

      <hr />

      <RenderEarly view={view} />
    </div>
  );
}

function RenderEarly({ view }) {
  if (view === 'blog') return <BlogDetails />;
  if (view === 'course') return <CourseDetails />;
  return <BookDetails />;
}

export default App;