import {useEffect, useState, useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from "styled-components"

const Profile = () => {
    const {user, token, currentPlaylist, setCurrentPlaylist, playlists} = useContext(ArtistsTracksContext);
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
                playlists.push(data);
            })
            console.log(currentPlaylist);
            navigate(`/playlist/${currentPlaylist.id}`)
        }

        console.log(playlists);


    return (
        <Wrapper>
            <ProfileInfo>
                <ProfileImage src={(user.images[0]).url}/>
                <ProfileName>{user.display_name}</ProfileName>
                <ProfileLink href={(user.external_urls).spotify} target="_blank">Your Spotify Profile</ProfileLink>
            </ProfileInfo>
            <PlaylistsAndSongs>
                <button onClick={createPlaylist}>Create Playlist</button>

            </PlaylistsAndSongs>

        </Wrapper>
    )
};

const Wrapper = styled.div`

`;

const ProfileInfo = styled.div`

`;

const ProfileImage = styled.img`
    border-radius: 100%;
    width: 250px;
`;

const ProfileName = styled.h2`

`;

const ProfileLink = styled.a`

`;

const PlaylistsAndSongs = styled.div`

`;

export default Profile;