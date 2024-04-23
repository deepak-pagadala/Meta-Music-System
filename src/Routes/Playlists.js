import React, { useState } from 'react';
import Drawer from '../components/Drawer';

const artistsAndSongs = {
    'Ed Sheeran': ['Shape of You', 'Thinking Out Loud', 'Photograph', 'Perfect'],
    'Taylor Swift': ['Shake It Off', 'Blank Space', 'Cardigan', 'Willow'],
    'Adele': ['Hello', 'Someone Like You', 'Rolling in the Deep', 'Easy On Me'],
    'Drake': ['Hotline Bling', 'God’s Plan', 'In My Feelings', 'One Dance'],
    'Beyoncé': ['Halo', 'Single Ladies', 'Crazy in Love', 'Formation'],
    'Bruno Mars': ['Uptown Funk', '24K Magic', 'Just the Way You Are', 'Locked Out of Heaven'],
    'Rihanna': ['Umbrella', 'Diamonds', 'We Found Love', 'Work'],
    'Post Malone': ['Circles', 'Sunflower', 'Rockstar', 'Congratulations'],
    'Billie Eilish': ['bad guy', 'everything i wanted', 'When the Party’s Over', 'Therefore I Am'],
    'The Weeknd': ['Blinding Lights', 'Starboy', 'Can’t Feel My Face', 'Save Your Tears'],
    'Ariana Grande': ['Thank U, Next', '7 rings', 'Positions', 'No Tears Left to Cry'],
    'Coldplay': ['Yellow', 'Fix You', 'Viva la Vida', 'The Scientist'],
    'Eminem': ['Lose Yourself', 'Not Afraid', 'Love the Way You Lie', 'The Real Slim Shady'],
    'Queen': ['Bohemian Rhapsody', 'We Will Rock You', 'Another One Bites the Dust', 'Don’t Stop Me Now'],
    'Harry Styles': ['Watermelon Sugar', 'Adore You', 'Falling', 'Sign of the Times'],
    'Khalid': ['Young Dumb & Broke', 'Location', 'Talk', 'Better'],
    'XXXTENTACION': ['SAD!', 'Jocelyn Flores', 'Moonlight', 'Look at Me!']
  };

const Playlists = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
    } else {
      const results = Object.entries(artistsAndSongs)
        .filter(([artist]) => artist.toLowerCase().includes(query))
        .flatMap(([artist, songs]) => songs.map((song) => `${artist} - ${song}`));

      setSearchResults(results);
    }
  };

  const handleAddSongToPlaylist = (song) => {
    setTodos([...todos, song]);
  };

  return (
    <div className="flex">
      <div className="w-64 bg-base-200">
        <Drawer />
      </div>
      <div className="flex-1 p-8">
        <div className="mb-5">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search for an artist"
              value={searchQuery}
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold text-primary">Create Playlist</h1>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Search by Artist</h2>
          {searchResults.length > 0 ? (
            <ul className="list-disc pl-4">
              {searchResults.map((result, index) => (
                <li key={index}>
                  <button
                    className="btn btn-sm btn-primary mr-2"
                    onClick={() => handleAddSongToPlaylist(result)}
                  >
                    Add
                  </button>
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            <p>No search results found.</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Add a new song"
            value={newTodo}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
          <button onClick={handleAddTodo} className="btn btn-primary mt-2">
            Add To Playlist
          </button>
        </div>
        <ul className="list-disc pl-4">
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Playlists;
