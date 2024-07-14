import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './VideoPlayer.css';

interface VideoData {
  url: string;
  title: string;
  source: string;
}
type VideoJsPlayer = any;

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Initialize Video.js player
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        preload: 'auto',
      });

      playerRef.current.on('timeupdate', () => {
        if (playerRef.current) {
          setProgress(Math.floor(playerRef.current.currentTime()));
        }
      });
    }

    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    // const response = await fetch('http://localhost:4000/video');
  
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    // const data = await response.json();
    // console.log(data);

    fetch('http://localhost:4000/video') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        setVideoData(data)
      }).catch(error => console.error('Error fetching video data:', error));
  }, []);

  useEffect(() => {
    if (videoData && playerRef.current) {
      playerRef.current.src({ type: 'video/mp4', src: videoData.url });
    }
  }, [videoData]);

  return (
    <div className="video-container">
      <video ref={videoRef} className="video-js vjs-default-skin" />
      <div className="text-card">
        <h1 id="video-title">{videoData?.title}</h1>
        <h2 id="video-progress">Progress: {progress}s</h2>
      </div>
    </div>
  );
};

export default VideoPlayer;
