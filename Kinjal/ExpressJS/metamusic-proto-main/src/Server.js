const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');




const userRoutes = require('./Routes/UserRoutes');
const playlistRoutes = require('./Routes/PlaylistRoutes');
const songRoutes = require('./Routes/SongRoutes');

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Metamusic',
  password: 'root',
  port: 5432,
});

module.exports = pool;

app.use(cors());
// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//Including Routes
app.use('/api/users', userRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/songs', songRoutes);


// Queries below this part are used for testing pupose 
app.get('/top-liked-songs', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT Track, Title, Likes
      FROM Song
      ORDER BY Likes DESC
      LIMIT 10;
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching top liked songs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/top-streamed-songs', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT Track, Title, Stream
      FROM Song
      ORDER BY Stream DESC
      LIMIT 10;
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching top streamed songs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/top-artists', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT Artist, 
             SUM(Likes) AS Total_Likes, 
             SUM(CAST(Stream AS INTEGER)) AS Total_Streams,
             SUM(Likes) + SUM(CAST(Stream AS INTEGER)) AS Combined_Score
      FROM Song
      GROUP BY Artist
      ORDER BY Combined_Score DESC
      LIMIT 10;
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching top artists:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
