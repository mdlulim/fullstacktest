import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Player from './components/Player';
import { title } from 'process';

function App() {
  const [videoSrc, setVideoSrc] = useState<string>('');
  const [ title, setTitle ] = useState<string>('');

  useEffect(() => {
      const fetchVideoSrc = async () => {
      const res = await fetch('http://localhost:4000/video');
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setTitle(data.title);
      setVideoSrc(data.url);
    };

    fetchVideoSrc();
  }, []);
  return (
    <div className="App">
      <Navbar />
      {videoSrc ? <Player src={videoSrc} title={title} /> : <p>Loading...</p>}
    
    </div>
  );
}

export default App;
