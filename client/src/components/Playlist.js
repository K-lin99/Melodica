import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from "styled-components"


const Playlist = () => {
    const {tracks, user, token, region} = useContext(ArtistsTracksContext);
    const [trackIds, setTrackIds] = useState([]);
    const [reformattedTrackIds, setReformattedTrackIds] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [addedTracks, setAddedTracks] = useState(false);
    const [currentPlaylist, setCurrentPlaylist] = useState("");


    // creating playlist
    useEffect(() => {
        const playlistParameters = {
            method: "POST",
            body: JSON.stringify({
                name: `${region} Playlist`,
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
            // setPlaylists((previousPlaylist) => [...previousPlaylist, data])
        })
        .catch(err => console.log(err))
    },[tracks])

    useEffect(() => {
        console.log(tracks); 
        if (tracks.length > 0 && tracks !== undefined) {
            // accessing tracks ids and formatting them for add tracks to playlist call
            setTrackIds((prevTrackIds) => {
                Object.keys(tracks).forEach((index) => {
                    for (let i = 0; i < (tracks[index].tracks).length; i++) {
                        prevTrackIds.push(`spotify:track:${(tracks[index].tracks)[i].id}`);
                    }
                })
                return prevTrackIds;
            })
            // selecting 15 random tracks from tracksIds array
            let arr = [];
            const removeRandomElements = (array) => {
                for(let i = 0; i < 15; i++){
                    arr[i] = array[Math.floor(Math.random() * array.length)]
                    }
                    return arr;
            }
            if (trackIds !== []){
                setTrackIds(removeRandomElements(trackIds))
            }
        }
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
            setAddedTracks(true)
        })
        .catch(err => console.log(err))
    },[currentPlaylist, trackIds])

    useEffect(() => {
        // reformatting track ids for get tracks fetch
        setReformattedTrackIds([]);
        trackIds.map((id) => {
            id = id.replace("spotify:track:", "")
            reformattedTrackIds.push(id);
        })

        // getting the playlist tracks
        let tracksParameters = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
        fetch(`https://api.spotify.com/v1/tracks?market=CA&ids=${reformattedTrackIds}`, tracksParameters)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPlaylistTracks(data)
        })
        .catch(err => console.log(err))
        // console.log((Object.values(playlistTracks))[0]);
    },[currentPlaylist, trackIds, addedTracks])
    
    return (
        <div>
            {!currentPlaylist
            ?"Loading..."
            :<div>
                <PlaylistName>{currentPlaylist.name}</PlaylistName>
                <PlaylistOwner>{(currentPlaylist.owner).display_name}</PlaylistOwner>
                <PlaylistLink href={(currentPlaylist.external_urls).spotify} target="_blank">Check Playlist on Spotify</PlaylistLink>
                {!playlistTracks 
                ?"Loading..."
                :<PlaylistDiv>
                {(Object.values(playlistTracks))[0].map((track) => {
                    return (
                    <TrackDiv key={Math.floor(Math.random()*14000000000)}>
                        <AlbumImg src={((track.album).images[0]).url}/>
                        <h3>{track.name}</h3>
                        <TrackLink href={(track.external_urls).spotify} target="_blank">Check Track on Spotify</TrackLink>
                        <SecondTrackLink to={`/track/${track.id}`} state={{track: track}}>Check Track on Melodica</SecondTrackLink>
                        <ArtistLink href={((track.artists[0]).external_urls).spotify} target="_blank">Artist: {(track.artists[0]).name}</ArtistLink>
                        <AlbumLink href={((track.album).external_urls).spotify} target="_blank">Album: {(track.album).name}</AlbumLink>
                    </TrackDiv>
                    )
                })}
                </PlaylistDiv>}
            </div>}
        </div>
    )
}

const PlaylistDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin-top: 20px;
`;

const PlaylistName = styled.h2`
    display: flex;
    justify-content: center;
    padding-top: 10px;
`;

const PlaylistOwner = styled.h3`
    display: flex;
    justify-content: center;
`;

const PlaylistLink = styled.a`
    display: flex;
    justify-content: center;
    :hover {
        color: #4EDEF0;
    }
`;

const TrackDiv = styled.div`
    border: 1px solid #4EDEF0;
    width: 500px;
    background-color: #2E2E2E;
`;

const AlbumImg = styled.img`
    float: left;
    padding: 5px;
    width: 100px;
`;

const TrackLink = styled.a`
    padding: 2px;
    display: block;
    :hover {
        color: #4EDEF0;
    }
`;

const SecondTrackLink = styled(NavLink)`
    padding: 2px;
    display: block;
    :hover {
        color: #4EDEF0;
    }
`;

const ArtistLink = styled.a`
    padding: 2px;
    display: block;
    :hover {
        color: #4EDEF0;
    }
`;

const AlbumLink = styled.a`
    padding: 2px;
    display: block;
    :hover {
        color: #4EDEF0;
    }
`;

export default Playlist;