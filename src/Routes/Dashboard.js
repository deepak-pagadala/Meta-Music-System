
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
  const artistImageLinks = {
    "Coldplay": "https://64.media.tumblr.com/260b40643ca3fece45a53d8c7d3a2af1/tumblr_oozkyx4sSI1vl7x77o1_1280.png",
    "Khalid": "https://www.pngall.com/wp-content/uploads/5/Khalid-PNG-File-Download-Free.png",
    "The Weeknd": "https://www.pngall.com/wp-content/uploads/5/Abel-Makkonen-Tesfaye-PNG-Image.png",
    "XXXTENTACION": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a697a26-ef2f-4155-8b0c-1d92fd2e8853/dccksbb-e67870da-9c4f-47a0-b757-b72509b6b0a1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdhNjk3YTI2LWVmMmYtNDE1NS04YjBjLTFkOTJmZDJlODg1M1wvZGNja3NiYi1lNjc4NzBkYS05YzRmLTQ3YTAtYjc1Ny1iNzI1MDliNmIwYTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MQm1H8BLV-kphREjh_Y-JDaiP6wX3uNMCUt0_6eN79E",
    "Ariana Grande": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/164d5514-ad89-4d7f-8438-fe278685c626/dgbvyt1-c418df55-c4ca-48ee-afc7-75c491ad8e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2NGQ1NTE0LWFkODktNGQ3Zi04NDM4LWZlMjc4Njg1YzYyNlwvZGdidnl0MS1jNDE4ZGY1NS1jNGNhLTQ4ZWUtYWZjNy03NWM0OTFhZDhlOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.peZ_AM5ZrPPSsSc216lfguxxN6ioMhjHhVD06QwWjj0",
    "Post Malone": "https://i.pinimg.com/originals/f7/c0/08/f7c0081f90784fc9fac02d38b95f13dd.png",
    "Ed Sheeran": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fdeb88f5-7259-41b4-81f2-54e2edf77e53/d61g9sy-acc069e1-06e6-4605-b520-4c33355e86bd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkZWI4OGY1LTcyNTktNDFiNC04MWYyLTU0ZTJlZGY3N2U1M1wvZDYxZzlzeS1hY2MwNjllMS0wNmU2LTQ2MDUtYjUyMC00YzMzMzU1ZTg2YmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.82faXY37kYVnUnNQT6mFEdKbz9s0ZEMHrsZavkDasjE",
    "Eminem": "https://64.media.tumblr.com/f17d50dfa4f401f6f20bcc8c2018c9d0/tumblr_ohde5pHyTa1vl7x77o1_1280.png",
    "Queen": "https://www.theaudiodb.com/images/media/artist/cutout/z8ffij1641549181.png",
    "Harry Styles": "https://www.pngall.com/wp-content/uploads/5/Harry-Styles-PNG-Download-Image.png"
    };
  return (
    <div className="flex">
    <div className="w-64 bg-base-200">
        <Drawer />
      </div>
      <div className="flex-1 p-8">
  <h1 className="text-2xl font-bold mb-4 text-primary">Welcome to the ADT Project</h1>

  {/* Top Liked Songs Section */}
  <div className="mb-20">
    <h2 className="text-xl font-bold mb-2">Top Liked Songs</h2>
    <TopLikedSongsTable likedSongs={likedSongs} />
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
                imageLink={artistImageLinks[artist.artist]}
              />
            ))}
          </div>
  </div>
  {/* Top Streamed Songs Section */}
  <div className="mb-8 mt-20">
          <h2 className="text-xl font-bold mb-2">Top Streamed Songs</h2>
          <TopStreamedSongsChart streamedSongs={streamedSongs} />
  </div>

</div>

  </div>
  );
};


export default Dashboard;
