import React from 'react';

const TopArtistCard = ({ artist, totalLikes, totalStreams, combinedScore, imageLink }) => {
  const combinedScorePercentage = Math.round(combinedScore/1200000) ;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={imageLink}
        alt={artist}
        className="w-24 h-24 rounded-full mb-4"
      />
      <div className="text-center">
        <p className="text-gray-600 font-semibold">Total Likes</p>
        <p className="text-lg font-bold">{totalLikes}</p>
        <p className="text-gray-600 font-semibold mt-2">Total Streams</p>
        <p className="text-lg font-bold">{totalStreams}</p>
        <div className="mt-4 flex items-center">
          <p className="text-gray-600 font-semibold mr-2">Combined Score:</p>
          <div className="w-20 h-10 px-18 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold">
            {combinedScorePercentage}   
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtistCard;
