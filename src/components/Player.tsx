// src/components/Player.tsx
import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import TextCard from './TextCard'; // Adjust path as necessary

// Define the type for player instance
type VideoJsPlayer = any;

const Player: React.FC<{ src: string }> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);
  const [title, setTitle] = useState(''); // State for video title
  const [progress, setProgress] = useState(0); // State for current progress
  const [duration, setDuration] = useState(1); // State for video duration (avoid division by zero)

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

        // Fetch video metadata, title, and duration (mock function for demo purposes)
        fetchVideoMetadata().then(metadata => {
          setTitle(metadata.title);
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

  // Mock function to simulate fetching video metadata
  const fetchVideoMetadata = async () => {
    // Replace with your actual API call
    return new Promise<{ title: string, duration: number }>((resolve) => {
      setTimeout(() => resolve({ title: 'Sample Video Title', duration: 120 }), 1000);
    });
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
