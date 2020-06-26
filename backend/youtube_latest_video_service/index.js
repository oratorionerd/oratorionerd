var http = require('http');
const axios = require('axios');
const schedule = require('node-schedule');
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3006;

const YOUTUBE_URL = `https://www.googleapis.com`;
const PATH = `/youtube/v3/search?part=snippet&channelId=UCEj1uAkhEF9wzVLjU8XrGmg&maxResults=1&order=date&type=video&key=${API_KEY}`;

if (API_KEY == undefined){
    console.log("API_KEY environment variable not defined");
    process.exit(1);
}

//Initialization
var lastFrontendObject = {
    videoId: "rVwPMOMKwSQ",
    title: "Messa del Patrono",
    description: "Messa di S.Antonio ore 18.30"
};

//Scheduled task to retrieve periodically the latest video (youtube api key with daily usage limit)
var scheduleRule = new schedule.RecurrenceRule();
scheduleRule.hour = [6,8,10,12,13,14,16,18,20] //Timezone fix: the real hours are [8,10,12,14,15,16,18,20,22];
scheduleRule.minute = [0];

var scheduled = schedule.scheduleJob(scheduleRule, function(){
    axios.defaults.baseURL = YOUTUBE_URL;
    axios.get(PATH).then(resp => {
        let lastVideo = resp.data.items[0];

        if (lastFrontendObject.videoId != lastVideo.id.videoId){
            lastFrontendObject = {
                videoId : lastVideo.id.videoId,
                title : lastVideo.snippet.title,
                description : lastVideo.snippet.description
            }
        }
        else if (lastFrontendObject.videoId == lastVideo.id.videoId && 
            (lastFrontendObject.title != lastVideo.snippet.title || lastFrontendObject.description != lastVideo.snippet.description)){
            
            //Fix for eventual changes to title or description of the same video
            lastFrontendObject = {
                videoId : lastVideo.id.videoId,
                title : lastVideo.snippet.title,
                description : lastVideo.snippet.description
            }
        }
    }).catch(error => {
        console.log("--- Youtube API raises an error! ---");
        console.log(`   > At time [${new Date()}]`);
        console.log(`   > Error message: ${error.message}`);
        console.log("");
    });
    
    
});

//create a server object:
let server = http.createServer(function (req, res) {
    if(req.url ==='/getLatestVideo'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(lastFrontendObject));
    }
}).listen(PORT);

process.on('SIGINT', function() {
    console.log('Shutdown the server');
    server.close();
    scheduled.cancel();

    process.exit(0);
});