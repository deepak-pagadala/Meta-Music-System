import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TopStreamedSongsScatterPlot = ({ streamedSongs }) => {
  const data = streamedSongs.map((song) => ({
    name: song.title,
    streams: song.stream,
  }));

  return (
    <ResponsiveContainer width="100%" height={600}>
      <ScatterChart
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey="name" name="Song Title" height={100} />
        <YAxis type="number" dataKey="streams" name="Streams" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Top Streamed Songs" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default TopStreamedSongsScatterPlot;
