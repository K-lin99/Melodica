// requiring Mongo Client
const { MongoClient } = require("mongodb");
// requiring dotenv
const dotenv = require('dotenv');
// requiring SpotifyWebApi
const SpotifyWebApi = require("spotify-web-api-node");
// requiring querystring
const querystring = require('node:querystring');

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
    clientSecret: CLIENT_SECRET, 
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

const login = async (req, res) => {
    try {
            // initializing authorization scopes
    const scopes =["user-read-private", "playlist-modify-public", "playlist-modify-private"]

    // initializing state
    const state = generateRandomString(16)

    // creating authorization URL
    const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state)
        res.redirect(authorizeURL)
    } catch (error) {
        console.log(error);
    }
}

const getCallback = async (req, res) => {

    // code that's returned as a query param to the redirect URI
    try {
        const {code} = req.query;
        console.log(req.query);
    
        // retrieving access and refresh tokens
        const data = await spotifyApi.authorizationCodeGrant(code)
            console.log('The token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);
            console.log('The refresh token is ' + data.body['refresh_token']);
    
        // setting access and refresh tokens on the API object for later use
        spotifyApi.setAccessToken(data.body["access_token"]);
        spotifyApi.setRefreshToken(data.body["refresh_token"]);

        // passing the tokens to the FE as query params
        const queryParams = querystring.stringify({
            access_token: data.body["access_token"],
            refresh_token: data.body["refresh_token"]
        })
    
        res.redirect(`http://localhost:3000/?${queryParams}`)
    
        // refreshing access token
        const newToken = await spotifyApi.refreshAccessToken()
            console.log("The access token has been refreshed!");
    
        // saving the refreshed token
        spotifyApi.setAccessToken(newToken.body["access_token"]);

        res.send(newToken)
        
    } catch (error) {
        console.log(error);
    }
}

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
        console.log(continent, region);
        const result = await db.collection("artists").findOne({ Continent: continent })
        console.log(result);
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

// return an array of the whole database to RegionSearchBar.js
const getContinents = async (req, res) => {
    // declaring and assigning mongo info to client
    const client = new MongoClient(MONGO_URI, options)
    console.log("test1");
    try {
        // connecting to client
        await client.connect();
        // selecting database
        const db = client.db("Melodica");
        let result = await db.collection("artists").find().toArray()
        // result = result.map((element) => {
        //     return element.Continent
        // })
        console.log(result);
        res.status(200).json({ status: 200, data: result})
    }
    // catching and logging errors
    catch (err){
        console.log(err.message);
        res.status(500).json({ status: 500, message: err.message})
    }
    // closing client
    finally{
        client.close();
    }
}

module.exports = { getRegionalArtists, getCallback, login, getContinents }