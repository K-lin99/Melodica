import SpotifyWebApi from "spotify-web-api-node";

// importing Mongo Client
const { MongoClient } = require("mongodb")

// // import Spotify API
// const spotifyApi = new SpotifyWebApi({
//     clientId: "b674889abfbe424cb4e47fe8af7f8148",
//     clientSecret: "1ffe0f5be7074d6a857a0e96b3fe5aab",
//     redirectUri: "http://localhost:3000"
// })

// require("dotenv").config();

// const [token, setToken] = useState("")
// const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI, REACT_APP_AUTH_ENDPOINT, REACT_APP_RESPONSE_TYPE } = process.env
// console.log(REACT_APP_AUTH_ENDPOINT);

// const logout = () => {
//     setToken("")
//     window.localStorage.removeItem("token")
// }

// useEffect(() => {
//     // getting API access Token
//     let authParameters = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: "grant_type=client_credentials&client_id=" + REACT_APP_CLIENT_ID + "&client_secret=" + REACT_APP_CLIENT_SECRET
//     }
//     fetch("https://accounts.spotify.com/api/token", authParameters)
//         .then(res => res.json())
//         .then(data => setToken(data.access_token))
//         .catch(err => console.log(err))
// }, [])

// spotifyApi.setAccessToken(token);

// spotifyApi.getArtistTopTracks("")
//     .then(data => console.log(data))
//     .catch(err => console.log(err))




const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}