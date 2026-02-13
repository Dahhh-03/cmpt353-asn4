// A form with basic client-side validation that submits JSON to the backend

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [topic, setTopic] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!topic || !data) return alert('Required fields!'); // Client validation

    const res = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, data })
    });

    if (res.ok) {
      navigate('/posts');
    } else {
      setError('Failed to save post.');
    }
  };

  return (
    <div className="form-container">
      <h1>Create a New Post</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Topic</label>
          <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Enter topic..." />
        </div>
        <div>
          <label>Content</label>
          <textarea value={data} onChange={e => setData(e.target.value)} placeholder="Write something..." rows={5} />
        </div>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}