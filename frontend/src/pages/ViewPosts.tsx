import { useEffect, useState } from 'react';

interface Post {
  id: number;
  topic: string;
  data: string;
  timestamp: string;
}

export default function ViewPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        // Ensure data is an array before setting state
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Community Posts</h1>
      
      {loading ? (
        <p>Loading posts...</p>
      ) : Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.topic}</h3>
            <p>{post.data}</p>
            <div className="timestamp">
              {/* Fallback for invalid dates */}
              {post.timestamp ? new Date(post.timestamp).toLocaleString() : 'Date unavailable'}
            </div>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}