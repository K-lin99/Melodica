// requiring Mongo Client
const { MongoClient } = require("mongodb");
// requiring dotenv
const dotenv = require('dotenv');
// requiring SpotifyWebApi
const SpotifyWebApi = require("spotify-web-api-node")

dotenv.config();

const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// importing data from .env file
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI

// setting the credentials
const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI
});

// function to generate random string for state variable
const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
    };

// initializing authorization scopes
const scopes =["user-read-private", "playlist-modify-private"]

// initializing state
const state = generateRandomString(16)

// creating authorization URL

const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state)
console.log(authorizeURL);

// returns an array of 5 artists based on a region
const getRegionalArtists = async (req, res) => {
    // declaring specified region
    const {continent} = req.params
    const {region} = req.params;
    // declaring and assigning mongo info to client
    const client = new MongoClient(MONGO_URI, options)
    
    try {
        // connecting to client
        await client.connect();
        // selecting database
        const db = client.db("Melodica");
        // storing found artists in result variable
        const result = await db.collection("artists").findOne({ Continent: continent })
        // validating result
        if (!result.Region[region]){
            res.status(404).json({ status: 404, message: "Region Not Found"})
        }
        else if (result){
            res.status(200).json({ status: 200, data: result.Region[region]})
        }
        else {
            res.status(404).json({ status: 404, message: "Not Found"})
        }
    }
    // catching and logging errors
    catch (err){
        console.log(err);
        res.status(500).json({ status: 500, message: err.message})
    }
    // closing client
    finally{
        client.close();
    }
}



module.exports = { getRegionalArtists }