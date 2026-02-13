// The server establishes a connection pool to MySQL and defines the required endpoints
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Establish MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'db',
    user: 'root',
    password: 'password',
    database: 'posting_db'
});

// GET /api/posts: Return all posts, newest first
app.get('/api/posts', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM posts ORDER BY timestamp DESC, id DESC');
        res.json(rows);
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

// POST /api/posts: Create a new post
app.post('/api/posts', async (req, res) => {
    const { topic, data } = req.body;

    // Validation: Return 400 if fields are missing
    if (!topic || !data) {
        return res.status(400).json({ error: 'Topic and data are required' });
    }

    try {
        const [result] = await pool.query('INSERT INTO posts (topic, data) VALUES (?, ?)', [topic, data]);
        const [newPost] = await pool.query('SELECT * FROM posts WHERE id = ?', [result.insertId]);
        res.status(201).json(newPost); // Return 201 Created
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});