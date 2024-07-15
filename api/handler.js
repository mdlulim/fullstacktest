const videos = [
    {
      source: 'Youtube',
      url: 'https://www.youtube.com/embed/OzY2r2JXsDM',
      title: 'Sample Youtube Video'
    },
    {
      source: 'Vimeo',
      url: 'https://vimeo.com/655102517',
      title: 'Sample Vimeo Video'
    },
    {
      source: 'Cloudflare',
      url: 'https://customer-pbkwsh8u7tv1cfs9.cloudflarestream.com/e596a638932d72bd0ca2b645902513a7',
      title: 'Sample Cloudflare Video'
    }
  ];
  
  module.exports.video = async (event) => {
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    return {
      statusCode: 200,
      body: JSON.stringify(randomVideo),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  };
  