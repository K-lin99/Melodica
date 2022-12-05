import { useContext, useEffect, useState } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const CustomPlaylist = () => {
    const location = useLocation();
    const { token } = useContext(ArtistsTracksContext);
    const { playlist, trackIds } = location.state;
    const [playlistTracks, setPlaylistTracks] = useState([])

    console.log(playlist);
    console.log(trackIds);
    console.log(playlistTracks);

    useEffect(() =>{
        let tracksParameters = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
        fetch(`https://api.spotify.com/v1/tracks?market=CA&ids=${trackIds}`, tracksParameters)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPlaylistTracks(data.tracks)
        })
        .catch(err => console.log(err))
    },[])

    console.log(playlistTracks);
    console.log(playlistTracks.length);

    return (
        <Wrapper>
            {!playlist
            ?"Loading..."
            :<PlaylistInfo>
                <PlaylistName>{playlist.name}</PlaylistName>
                <PlaylistOwner>{(playlist.owner).display_name}</PlaylistOwner>
                <PlaylistLink href={(playlist.external_urls).spotify} target="_blank">Check Playlist on Spotify</PlaylistLink>
                {playlistTracks.length === 0 || playlistTracks.length === undefined
                ?<Message>Playlist is empty</Message>
                :<PlaylistDiv>
                {(Object.values(playlistTracks)).map((track) => {
                    return (
                    <TrackDiv key={Math.floor(Math.random()*14000000000)}>
                        <AlbumImg src={((track.album).images[0]).url}/>
                        <TrackName>{track.name}</TrackName>
                        <Link href={(track.external_urls).spotify} target="_blank">Check Track on Spotify</Link>
                        <SecondTrackLink to={`/track/${track.id}`} state={{track: track}}>Check Track on Melodica</SecondTrackLink>
                        <Link href={((track.artists[0]).external_urls).spotify} target="_blank">Artist: {(track.artists[0]).name}</Link>
                        <Link href={((track.album).external_urls).spotify} target="_blank">Album: {(track.album).name}</Link>
                    </TrackDiv>
                    )})}
                </PlaylistDiv>}
            </PlaylistInfo>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;

const PlaylistInfo = styled.div`
`;

const Message = styled.p`
    display: flex;
    justify-content: center;
    padding: 5px;
`;

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

const TrackName = styled.h3`
    
`;

const SecondTrackLink = styled(NavLink)`
    padding: 2px;
    display: block;
    :hover {
        color: #4EDEF0;
    }
`

const Link = styled.a`
    padding: 2px;
    display: block;
    :hover {
        color: #4EDEF0;
    }
`;

export default CustomPlaylist;