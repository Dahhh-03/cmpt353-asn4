// Uses useEffect to fetch data from the backend on moun

import { useEffect, useState } from 'react';

export default function ViewPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts') // Use fetch API [1]
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h3>{post.topic}</h3>
          <p>{post.data}</p>
          <small>{new Date(post.timestamp).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}