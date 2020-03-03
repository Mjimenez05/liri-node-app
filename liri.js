//spotify
require("dotenv").config();
var keys = require("./key.js");
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
        if (!error && response.statusCode === 200) {
            console.log("-------------------------");
            console.log("Venue: " + JSON.parse(body)[0].venue.name)
            console.log("Location: " + JSON.parse(body)[0].venue.city + " " + JSON.parse(body)[0].venue.region);
            console.log("Date: " + moment(JSON.parse(body)[0].datetime).format("MM/DD/YYYY"));
            console.log("-------------------------");
        }
    });
} else if (command === "spotify-this-song") {
    var song = process.argv[3];
    if (song === undefined) {
        song = "The Sign";
    }

    spotify.search({
        type: "track",
        query: song
    }, function(err, data) {
        if (err) {
            return console.log("Error occured: " + err);
        }
        console.log("---------------------");
        console.log("Artist: " + data.tracks.items[0].artist.name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].preview_url);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("---------------------");
    });
}