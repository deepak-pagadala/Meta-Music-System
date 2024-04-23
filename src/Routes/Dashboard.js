
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Drawer from '../components/Drawer';
import TopLikedSongsTable from '../components/TopLikedSongsTable';
import TopArtistCard from '../components/TopArtistCard';
import TopStreamedSongsChart from '../components/TopStreamedSongs';

const Dashboard = () => {
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
  const imageLinks={}
  return (
    <div className="flex">
    <div className="w-64 bg-base-200">
        <Drawer />
      </div>
      <div className="flex-1 p-8">
  <h1 className="text-2xl font-bold mb-4 text-primary">Welcome to the ADT Project</h1>

  {/* Top Liked Songs Section */}
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-2">Top Liked Songs</h2>
    <TopLikedSongsTable likedSongs={likedSongs} />
  </div>

  {/* Top Streamed Songs Section */}
  <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Top Streamed Songs</h2>
          <TopStreamedSongsChart streamedSongs={streamedSongs} />
  </div>

  {/* Top Artists Section */}
  <div>
    <h2 className="text-xl font-bold mb-2">Top Artists</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {topArtists.map((artist, index) => (
              <TopArtistCard
                key={index}
                artist={artist.artist}
                totalLikes={artist.total_likes}
                totalStreams={artist.total_streams}
                combinedScore={artist.combined_score}
              />
            ))}
          </div>
  </div>
</div>

  </div>
  );
};


export default Dashboard;
