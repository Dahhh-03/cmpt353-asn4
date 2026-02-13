// A form with basic client-side validation that submits JSON to the backend

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [topic, setTopic] = useState('');
  const [data, setData] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!topic || !data) return alert('Required fields!'); // Client validation

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, data })
    });

    if (res.ok) navigate('/posts'); // Redirect on success
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Topic" />
      <textarea value={data} onChange={e => setData(e.target.value)} placeholder="Content" />
      <button type="submit">Submit</button>
    </form>
  );
}