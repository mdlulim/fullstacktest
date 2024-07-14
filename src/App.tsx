import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Player from './components/Player';

function App() {
  const [videoSrc, setVideoSrc] = useState<string>('');

  useEffect(() => {
    // Simulate an API call to fetch the video source URL
    const fetchVideoSrc = async () => {
      // Replace with your actual API call
      const response = await new Promise<{ src: string }>((resolve) =>
        setTimeout(() => resolve({ src: 'https://www.w3schools.com/html/mov_bbb.mp4' }), 1000)
      );
      setVideoSrc(response.src);
    };

    fetchVideoSrc();
  }, []);
  return (
    <div className="App">
      <Navbar />
      {videoSrc ? <Player src={videoSrc} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
