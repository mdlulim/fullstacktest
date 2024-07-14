
# Full Stack Test

A quick test for full stack developers

Empath is a video heavy platform the challenge is to create a simple responsive UI to play video from various sources (think youtube in Theater mode), and the backend to serve the video source, URL, Title.


## Requirements
### UI
* UI should be a single page React app built with TypeScript
* Can use [reablocks](https://www.npmjs.com/package/reablocks) if helpful

#### Element order

* Navbar
* Player
* Card with Text

#### UI Details
* Navbar - Just a generic 100% width Navbar sticky at the top of the page

* Player
    * Use Video.js as player library
    * Player max width should be 100vw
    * Player max height should be 100vh
    * Player should scale to be as large as visible without creating black bars on any side.
    * Player should accept video source as a perameter retrieved from api.
    * Player has controlls, scrub, play/pause, volume

* Text Card
    * Simple card below video
    * 100% width
    * h1 with video Title from api
    * h2 `Progress : ${currentVideoProgress/timestamp}`


* UI should be responsive
    

### API Details

* Should be in a format supporting CI/CD (Amplify, serverlessFramework...)
* Should be written in JS or TS

#### Route
/video

#### Return Data format
```json
{
    "source": {"Youtube"|"Cloudflare"|"Vimeo"},
    "url": "https://www........com/xyx",
    "title": "{title}"
}
```

#### Expected Behavior
* Randomly returns one of the video objects

#### Sample URLS
* "https://www.youtube.com/embed/OzY2r2JXsDM"
* "https://vimeo.com/655102517"
*  "https://customer-pbkwsh8u7tv1cfs9.cloudflarestream.com/e596a638932d72bd0ca2b645902513a7


## Reference material
https://developers.cloudflare.com/stream/examples/video-js/
https://videojs.com/guides/react/
