import { createContext, useEffect, useState } from "react";

export const ArtistsTracksContext = createContext(null);

export const ArtistsTracksProvider = ({children}) => {
    const [artists, setArtists] = useState([]);
    const [continent, setContinent] = useState("");
    const [region, setRegion] = useState("");
    const [token, setToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("")
    const [tracks, setTracks] = useState([]);
    const [user, setUser] = useState([]);
    const [currentPlaylist, setCurrentPlaylist] = useState("");
    const [playlists, setPlaylists] = useState([]);

    // fetching user profile data
    useEffect(() => {
        let profileParameters = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
        fetch("https://api.spotify.com/v1/me", profileParameters)
        .then(response => response.json())
        .then(data => {
            setUser(data)
        })
        .catch((error) => {
            console.log(error);
        })
    },[token])
    
    // fetching artists based on continent and region
    useEffect(() => {
        fetch(`/api/get-artists/${continent}/${region}`)
        .then(response => response.json())
        .then(data => {
            setTracks([])
            setArtists(data.data.map((artist) => {
                return artist.id;
            }));
        })
        .catch((error) => {
            console.log(error);
        })
    },[region])

    // fetching artists top tracks
    useEffect(() => {
        artists.forEach((artistId) => {
            let tracksParameters = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            }
            fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=CA`, tracksParameters)
            .then(res => res.json())
            .then(data => {
                // tracks.push(data)
                // console.log(tracks);
                setTracks((previousTracks) => [...previousTracks, data])
            })
            .catch(err => console.log(err))
    })
    },[artists])

    console.log(`artists: ${artists}`);
    console.log(`token: ${token}`);
    console.log(`continent: ${continent}`);
    console.log(`region: ${region}`);

    

    return (
        <ArtistsTracksContext.Provider value = {{setContinent, setRegion, region, tracks, token, setToken, user, refreshToken, setRefreshToken, currentPlaylist, playlists, setCurrentPlaylist, setPlaylists}}>
            {children}
        </ArtistsTracksContext.Provider>
    )
}