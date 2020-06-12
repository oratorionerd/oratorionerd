var http = require('http');
const axios = require('axios');

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3006;
const YOUTUBE_URL = `https://www.googleapis.com`
const PATH = `/youtube/v3/search?part=snippet&channelId=UCEj1uAkhEF9wzVLjU8XrGmg&maxResults=1&order=date&type=video&key=${API_KEY}`;
//create a server object:
http.createServer(function (req, res) {
 if(req.url ==='/getLatestVideo'){
    
    axios.defaults.baseURL = YOUTUBE_URL;
    axios.get(PATH).then(resp => {
      let lastVideo = resp.data.items[0];
      let frontendObject = {
        videoId : lastVideo.id.videoId,
        title : lastVideo.snippet.title,
        description : lastVideo.snippet.description
      }
      res.writeHead(200,{'Content-Type': 'application/json'});
      res.end(JSON.stringify(frontendObject));
    }, error => {
      res.writeHead(500,{'Content-Type': 'application/json'});
      res.end(JSON.stringify(error))
    }
    )
 }
}).listen(PORT, function(){
 console.log("server start at port ", PORT); //the server object listens on port 3000
});