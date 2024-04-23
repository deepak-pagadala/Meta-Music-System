import React, { useState } from 'react';

const TopLikedSongsTable = ({ likedSongs }) => {
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedSongs = [...likedSongs].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.likes - b.likes;
    } else {
      return b.likes - a.likes;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="w-full table-auto">
        <thead className="bg-indigo-700 text-white">
          <tr>
            <th className="px-6 py-4 text-lg">Song Title</th>
            <th
              className="px-6 py-4 text-lg cursor-pointer flex items-center justify-between"
              onClick={toggleSortOrder}
            >
              Likes
              <span className="ml-2">
                {sortOrder === 'asc' ? (
                  <span className="inline-block rotate-180 text-green-400">&#9650;</span>
                ) : (
                  <span className="inline-block text-green-400">&#9650;</span>
                )}
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {sortedSongs.map((song, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}
            >
              <td className="px-6 py-4 font-semibold text-gray-800">{song.title}</td>
              <td className="px-6 py-4 text-gray-800">{song.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopLikedSongsTable;
