import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <VideoPlayer />
    </div>
  );
};

export default App;