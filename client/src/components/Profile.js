import {useEffect, useState, useContext} from 'react';
import { Link, useNavigate, NavLink } from "react-router-dom";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from "styled-components"

const Profile = () => {
    const {user, token, currentPlaylist, setCurrentPlaylist, playlists, setPlaylists, favoriteTracks} = useContext(ArtistsTracksContext);
    const navigate = useNavigate();

    

        // creating playlist
        const createPlaylist = () => {
            const playlistParameters = {
                method: "POST",
                body: JSON.stringify({
                    name: "My Melodica Playlist",
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
                setPlaylists((previousPlaylist) => [...previousPlaylist, data])
            })
            console.log(currentPlaylist);
            navigate(`/playlist/${currentPlaylist.id}`)
        }

        // console.log(playlists);


    return (
        <Wrapper>
                <ProfileImage src={(user.images[0]).url}/>
                <ProfileName>{user.display_name}</ProfileName>
            <ProfileInfo>
                <ProfileLink href={(user.external_urls).spotify} target="_blank">To Spotify Profile</ProfileLink>
                <NewPlaylist onClick={createPlaylist}>+ Create Playlist</NewPlaylist>
            </ProfileInfo>
            {favoriteTracks.map((track) => {
                return (
                    <FavoriteSongs key={Math.floor(Math.random()*14000000000)}>
                        <AlbumImg src={((track.album).images[0]).url}/>
                        <TrackName>{track.name}</TrackName>
                        <TrackLink href={(track.external_urls).spotify} target="_blank">Check Track on Spotify</TrackLink>
                        <SecondTrackLink to={`/track/${track.id}`} state={{track: track}}>Check Track on Melodica</SecondTrackLink>
                        <ArtistLink href={((track.artists[0]).external_urls).spotify} target="_blank">Artist: {(track.artists[0]).name}</ArtistLink>
                        <AlbumLink href={((track.album).external_urls).spotify} target="_blank">Album: {(track.album).name}</AlbumLink>
                    </FavoriteSongs>
            )})}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    background-color: #222222;
    display: flex;
    justify-content: center;
`;

const ProfileInfo = styled.div`
    position: absolute;
    margin-top: 310px;;
`;

const ProfileImage = styled.img`
    border-radius: 100%;
    width: 250px;
    position: absolute;
    margin-top: 10px;
    padding: 5px;
    border: 2px solid #38E8FF ;
`;

const ProfileName = styled.h2`
    font-size: 30px;
    margin-top: 270px;
`;

const ProfileLink = styled.a`
    padding: 2px;
    display: block;
    :hover {
        color: #38E8FF;
    }
`;

const NewPlaylist = styled.button`
    background-color: #2EC0D2;
    border: none;
    border-radius: 3px;
    padding: 2px;
`;

const FavoriteSongs = styled.div`
    position: absolute;
    margin-top: 360px;;
    width: 550px;
    padding: 10px;
    border: 1px solid #38E8FF;
    border-radius: 15px;
`;

const AlbumImg = styled.img`
    float: left;
    padding: 5px;
    margin-right: 5px;
    width: 150px;
    border-radius: 15px;
`;

const TrackName = styled.h3`
    
`;

const TrackLink = styled.a`
    padding: 2px;
    display: block;
    :hover {
        color: #38E8FF;
    }
`;

const SecondTrackLink = styled(NavLink)`
    padding: 2px;
    display: block;
    :hover {
        color: #38E8FF;
    }
`

const ArtistLink = styled.a`
    padding: 2px;
    display: block;
    :hover {
        color: #38E8FF;
    }
`;

const AlbumLink = styled.a`
    padding: 2px;
    display: block;
    :hover {
        color: #38E8FF;
    }
`;

export default Profile;