import { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from "styled-components"

const Profile = () => {
    const {user, token, playlists, setPlaylists, favoriteTracks} = useContext(ArtistsTracksContext);
    const [currentPlaylist, setCurrentPlaylist] = useState("")
    const [isAdded, setIsAdded] = useState(false)


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
                // setPlaylists((previousPlaylist) => [...previousPlaylist, data]);
            })
        }

        // adding track to playlist
        const addTrack = (event, trackID) => {
            const playlistParameters = {
                method: "POST",
                body: JSON.stringify({
                    uris: [trackID] ,
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
            .catch(err => console.log(err))
        }


    return (
        <Wrapper>
                <ProfileImage src={(user.images[0]).url}/>
                <ProfileName>{user.display_name}</ProfileName>
            <ProfileInfo>
                <ProfileLink href={(user.external_urls).spotify} target="_blank">To Spotify Profile</ProfileLink>
                <NewPlaylist onClick={createPlaylist}>+ Create Playlist</NewPlaylist>
            </ProfileInfo>
            <TrackInfo>
            <TrackTitle>Favorite Tracks</TrackTitle>
            {favoriteTracks.map((track) => {
                return (
                    <FavoriteSongs key={Math.floor(Math.random()*14000000000)}>
                        <AlbumImg src={((track.album).images[0]).url}/>
                        <TrackName>{track.name}</TrackName>
                        <TrackLink href={(track.external_urls).spotify} target="_blank">Check Track on Spotify</TrackLink>
                        <SecondTrackLink to={`/track/${track.id}`} state={{track: track}}>Check Track on Melodica</SecondTrackLink>
                        <ArtistLink href={((track.artists[0]).external_urls).spotify} target="_blank">Artist: {(track.artists[0]).name}</ArtistLink>
                        <AlbumLink href={((track.album).external_urls).spotify} target="_blank">Album: {(track.album).name}</AlbumLink>
                        <AddSong onClick={event => addTrack(event, `spotify:track:${track.id}`)}>Add to your playlist</AddSong>
                    </FavoriteSongs>
            )})}
            </TrackInfo>
        </Wrapper>
    )
};

const Wrapper = styled.div`
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

const TrackInfo = styled.div`
    position: absolute;
    margin-top: 352px;
`;

const TrackTitle = styled.h3`
    text-align: center;
    padding-top: 5px;
`

const NewPlaylist = styled.button`
    background-color: #2EC0D2;
    border: none;
    border-radius: 3px;
    padding: 2px;
    cursor: pointer;
`;

const FavoriteSongs = styled.div`
    margin-top: 20px;
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

const AddSong = styled.button`
    margin-top: 10px;
    background-color: #2EC0D2;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`;

const Message = styled.p`
    margin-top: 10px;
    background-color: #2EC0D2;
    text-align: center;
    border-radius: 3px;
    width: 100px;
    display: flex;
    justify-content: center;
`;

export default Profile;