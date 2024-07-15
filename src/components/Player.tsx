import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import TextCard from './TextCard';

// Define the type for player instance
type VideoJsPlayer = any;

const Player: React.FC<{ src: string, title: string }> = ({ src, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(1);
  useEffect(() => {
    // Define a function to initialize the player
    const initializePlayer = () => {
      if (videoRef.current) {
        // Initialize the video.js player
        playerRef.current = videojs(videoRef.current, {
          controls: true,
          responsive: true,
          fluid: true,
        });

        // Set the video source
        playerRef.current.src({ src, type: 'video/mp4' });

        fetchVideoMetadata().then(metadata => {
          setDuration(metadata.duration);
        });

        // Update progress every second
        const updateProgress = () => {
          if (playerRef.current) {
            setProgress(playerRef.current.currentTime());
          }
        };

        const interval = setInterval(updateProgress, 1000);

        return () => {
          if (playerRef.current) {
            playerRef.current.dispose();
          }
          clearInterval(interval);
        };
      }
    };

    // Delay initialization to ensure the video element is rendered
    const timer = setTimeout(initializePlayer, 0);

    return () => {
      clearTimeout(timer); // Clear the timeout if component unmounts before initialization
    };
  }, [src]);

 // Fetch video metadata from the API
 const fetchVideoMetadata = async (): Promise<{ title: string, duration: number }> => {
  const response = await fetch('http://localhost:4000/video');
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log(data);
  return {
    title: data.title,
    duration: data.duration,
  };
};

  return (
    <div>
      <div className="video-container" style={{ maxWidth: '100vw', maxHeight: '80vh' }}>
        <video ref={videoRef} className="video-js vjs-default-skin" />
      </div>
      <TextCard title={title} progress={progress} totalDuration={duration} />
    </div>
  );
};

export default Player;
