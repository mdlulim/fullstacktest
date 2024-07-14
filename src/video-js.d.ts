// src/video-js.d.ts
declare module 'video.js' {
    type VideoJsPlayerOptions = {
      controls?: boolean;
      responsive?: boolean;
      fluid?: boolean;
      autoplay?: boolean | string;
      preload?: 'auto' | 'metadata' | 'none';
      loop?: boolean;
      muted?: boolean;
      width?: number;
      height?: number;
      aspectRatio?: string;
      liveui?: boolean;
      [key: string]: any;
    };
  
    interface Player {
      src: (source: { src: string; type: string }) => void;
      dispose: () => void;
      play: () => void;
      pause: () => void;
      currentTime: (seconds?: number) => number;
      volume: (percent?: number) => number;
      muted: (muted?: boolean) => boolean;
      requestFullscreen: () => void;
      exitFullscreen: () => void;
      on: (event: string, callback: (event: any) => void) => void;
      ready: (callback: () => void) => void;
      bigPlayButton: any;
      controlBar: any;
      errorDisplay: any;
      liveTracker: any;
      loadingSpinner: any;
      options_: any;
      userActivity_: any;
      userActive_: any;
      textTracks: () => any[];
      audioTracks: () => any[];
      remoteTextTracks: () => any[];
      addRemoteTextTrack: (options: any) => void;
      [key: string]: any;
    }
  
    const videojs: {
      (element: HTMLVideoElement, options?: VideoJsPlayerOptions): Player;
      // Other methods and properties
    };
  
    export default videojs;
  }
  