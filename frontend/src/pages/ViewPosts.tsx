// Uses useEffect to fetch data from the backend on moun

import { useEffect, useState } from 'react';

// Define the structure of your Post object
interface Post {
  id: number;
  topic: string;
  data: string;
  timestamp: string;
}

export default function ViewPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/posts') // Use fetch API
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