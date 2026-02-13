// Set up the routes for the Landing Page, View Posts, and Create Post

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ViewPosts from './pages/ViewPosts';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/posts">View Posts</Link> | <Link to="/create">Create Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<ViewPosts />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}
export default App;