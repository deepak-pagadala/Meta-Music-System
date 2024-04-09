-- Create the URL table
CREATE TABLE if not exists URL (
  Track VARCHAR(255) PRIMARY KEY,
  Spotify_url VARCHAR(255),
  Youtube_url VARCHAR(255)
);

-- Create the Statistic table
CREATE TABLE if not exists Statistic (
  Track VARCHAR(255) PRIMARY KEY,
  Danceability FLOAT,
  Energy FLOAT,
  Key INT,
  Loudness FLOAT,
  Speechiness FLOAT,
  Acousticness FLOAT,
  Instrumentalness FLOAT,
  Liveness FLOAT,
  Valence FLOAT,
  Tempo FLOAT,
  Duration_ms INT
);

-- Create the Song table
CREATE TABLE if not exists Song (
  Track VARCHAR(255) PRIMARY KEY,
  Artist VARCHAR(255),
  Title VARCHAR(255),
  Likes INT,
  Comments INT,
  Description TEXT,
  Licensed BOOLEAN,
  official_video BOOLEAN,
  Stream VARCHAR(255),
  FOREIGN KEY (Track) REFERENCES URL(Track)
);

-- Temporary Table : 
CREATE TEMPORARY TABLE if not exists temp_music_data (
    "Sr No" SERIAL PRIMARY KEY,
    Artist VARCHAR(255),
    Url_spotify VARCHAR(255),
    Track VARCHAR(255),
    Album VARCHAR(255),
    Album_type VARCHAR(255),
    Uri VARCHAR(255),
    Danceability FLOAT,
    Energy FLOAT,
    Key INT,
    Loudness FLOAT,
    Speechiness FLOAT,
    Acousticness FLOAT,
    Instrumentalness FLOAT,
    Liveness FLOAT,
    Valence FLOAT,
    Tempo FLOAT,
    Duration_ms INT,
    Url_youtube VARCHAR(255),
    Title VARCHAR(255),
    Channel VARCHAR(255),
    Views INT,
    Likes INT,
    Comments INT,
    Description TEXT,
    Licensed BOOLEAN,
    official_video BOOLEAN,
    Stream VARCHAR(255)
);
-- Create the User table
CREATE TABLE if not exists Users (
  Username VARCHAR(255) PRIMARY KEY,
  Email VARCHAR(255) UNIQUE,
  Password VARCHAR(255),
  Phonenumber VARCHAR(255),
  Address TEXT,
  Last_10_songs_played TEXT[]  -- This can be an array of track IDs
);

-- Create the Playlist table
CREATE TABLE if not exists Playlist (
  Username VARCHAR(255),
  Playlist_Number INT,
  Song_name VARCHAR(255),
  FOREIGN KEY (Username) REFERENCES Users(Username),
  PRIMARY KEY (Username, Playlist_Number)  -- Composite primary key for Username and Playlist_Number
);


Actually Inserting data : 
DELETE FROM Song;
DELETE FROM Statistic;
DELETE FROM URL;

INSERT INTO URL (Track, Spotify_url, Youtube_url)
SELECT Track, Url_spotify, Url_youtube
FROM temp_music_data
ON CONFLICT (Track) DO NOTHING;


INSERT INTO Statistic (Track, Danceability, Energy, Key, Loudness, Speechiness, Acousticness, Instrumentalness, Liveness, Valence, Tempo, Duration_ms)
SELECT Track, Danceability, Energy, Key, Loudness, Speechiness, Acousticness, Instrumentalness, Liveness, Valence, Tempo, Duration_ms
FROM temp_music_data
ON CONFLICT (Track) DO NOTHING;

INSERT INTO Song (Track, Artist, Title, Likes, Comments, Description, Licensed, official_video, Stream)
SELECT Track, Artist, Title, Likes, Comments, Description, Licensed, official_video, Stream
FROM temp_music_data
ON CONFLICT (Track) DO NOTHING;

SELECT Track, Title, Likes
FROM Song
ORDER BY Likes DESC
LIMIT 10;

SELECT Track, Title, Stream
FROM Song
ORDER BY Stream DESC
LIMIT 10;
SELECT Artist, 
       SUM(Likes) AS Total_Likes, 
       SUM(CAST(Stream AS INTEGER)) AS Total_Streams,
       SUM(Likes) + SUM(CAST(Stream AS INTEGER)) AS Combined_Score
FROM Song
GROUP BY Artist
ORDER BY Combined_Score DESC
LIMIT 10;
SELECT Track, Title, Comments
FROM Song
ORDER BY Comments DESC
LIMIT 10;
