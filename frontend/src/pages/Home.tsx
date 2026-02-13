import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Persistent Posting System</h1>
      <p>
        Welcome to the Assignment 4 Posting System. This application is a 
        full-stack web application built using <strong>React</strong> for the 
        frontend and <strong>Node.js/Express</strong> with <strong>MySQL</strong> 
        for persistent backend storage.
      </p>
      <p>
        You can use this system to share topics and data. All posts are 
        stored in a database, ensuring that your information survives 
        container restarts.
      </p>
    </div>
  );
}