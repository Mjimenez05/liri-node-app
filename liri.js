//spotify
require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");
//info for the date formatting
var moment = require("moment");
//info for fs
var fs = require("fs");
//takes command
var command = process.argv[2];
//info for request
var request = require("request");

//pull for the concert

if (command === "concert-this") {
    var artist = process.argv[3];
    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function(error, resopnse, body) {

    })
});