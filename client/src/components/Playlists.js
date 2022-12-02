import { useContext, useEffect, useState } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from "styled-components"

const Playlists = () => {
    const {tracks, user, token, region} = useContext(ArtistsTracksContext);
    const [currentPlaylist, setCurrentPlaylist] = useState("");
    const [playlists, setPlaylists] = useState([]);
    const [trackIds, setTrackIds] = useState([]);

    // creating playlist
    useEffect(() => {
        const playlistParameters = {
            method: "POST",
            body: JSON.stringify({
                name: `${region} playlist`,
                public: false}), 
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
        fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, playlistParameters)
        .then(response => response.json())
        .then(data => {
            setCurrentPlaylist(data);
            playlists.push(data);
        })
    },[tracks])

    // accessing tracks ids and storing them into trackIds array
    useEffect(() => {
        console.log(tracks);
        Object.keys(tracks).forEach((artist) => {
            for (let i = 0; i < 10; i++) {
                trackIds.push(`spotify:track:${(tracks[artist].tracks)[i].id}`);
            }
        })

        // selecting 10 random tracks from tracksIds array
        const removeRandomElements = (array) => {
            for(let i = array.length; i > 10; i--){
                array.splice(Math.floor(Math.random() * array.length), 1);
                }
        }
        if (trackIds !== []){
            removeRandomElements(trackIds)
        }
        console.log(trackIds);
        console.log(trackIds.join());
        console.log(currentPlaylist.id);
        console.log(playlists);

    },[tracks])



    // adding tracks to playlist
    useEffect(() => {
        const playlistParameters = {
            method: "POST",
            body: JSON.stringify({
                uris: trackIds,
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
        fetch(`https://api.spotify.com/v1/playlists/${currentPlaylist.id}/tracks`, playlistParameters)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    },[playlists])

    return (
        <h1>Playlist</h1>
    )
}

export default Playlists;