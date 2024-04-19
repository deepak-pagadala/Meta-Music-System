import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page = () => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [streamedSongs, setStreamedSongs] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    // Fetch data for top liked songs
    axios.get('http://localhost:3001/top-liked-songs')
      .then(response => setLikedSongs(response.data))
      .catch(error => console.error('Error fetching top liked songs:', error));

    // Fetch data for top streamed songs
    axios.get('http://localhost:3001/top-streamed-songs')
      .then(response => setStreamedSongs(response.data))
      .catch(error => console.error('Error fetching top streamed songs:', error));

    // Fetch data for top artists
    axios.get('http://localhost:3001/top-artists')
      .then(response => setTopArtists(response.data))
      .catch(error => console.error('Error fetching top artists:', error));
  }, []);

  return (
    <div>
      <h1>Top Liked Songs</h1>
      <ul>
        {likedSongs.map(song => (
          <li key={song.track}>
            <strong>{song.title}</strong> - {song.likes} likes
          </li>
        ))}
      </ul>

      <h1>Top Streamed Songs</h1>
      <ul>
        {streamedSongs.map(song => (
          <li key={song.track}>{`${song.title} - ${song.stream} streams`}</li>
        ))}
      </ul>

      <h1>Top Artists</h1>
      <ul>
        {topArtists.map(artist => (
          <li key={artist.artist}>{`${artist.artist} - Total Likes: ${artist.total_likes}, Total Streams: ${artist.total_streams}, Combined Score: ${artist.combined_score}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
