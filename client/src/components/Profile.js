import { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from "styled-components"

const Profile = () => {
    const { playlists, setPlaylists, user, token, favoriteTracks, currentPlaylist, setCurrentPlaylist, addedTracks, setAddedTracks} = useContext(ArtistsTracksContext);
    // const [tracksNum, setTracksNum] = useState(null)

        // creating playlist
        const createPlaylist = () => {
            const playlistParameters = {
                method: "POST",
                body: JSON.stringify({
                    name: `My Melodica Playlist ${playlists.length}`,
                    public: false}), 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            }
            fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, playlistParameters)
            .then(response => response.json())
            .then(data => {
                setAddedTracks([]);
                setCurrentPlaylist(data);
                setPlaylists((previousPlaylist) => [...previousPlaylist, data]);
            })
        }

        // // removing playlist
        // const deletePlaylist = () => {
        //     const playlistParameters = {
        //         method: "DELETE",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": "Bearer " + token
        //         }
        //     }
        //     fetch(`https://api.spotify.com/v1/playlists/${currentPlaylist.id}/followers`, playlistParameters)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         setCurrentPlaylist("");
        //         setPlaylists(playlists.filter((playlist) => {
        //             return playlist !== (createPlaylist)
        //         }))
        //     })
        // }

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
                setAddedTracks((previousTrack) => [...previousTrack, trackID.replace("spotify:track:", "")])
            })
            .catch(err => console.log(err))
        }

        // removing track from playlist
        const removeTrack = (event, trackID) => {
            const playlistParameters = {
                method: "DELETE",
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
                setAddedTracks(addedTracks.filter((track) => {
                    return track !== ((trackID.replace("spotify:track:", "")))
                }))
            })
            .catch(err => console.log(err))
        }

        // useEffect(() => {
        //     const playlistParameters = {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": "Bearer " + token
        //         }
        //     }
        //     fetch(`https://api.spotify.com/v1/playlists/${currentPlaylist.id}/tracks`, playlistParameters)
        //     .then(response => response.json())
        //     .then(data => {
        //         setTracksNum((data.items).length);
        //     })
        //     .catch(err => console.log(err))
        // },[addedTracks])

        console.log(addedTracks);
        console.log(playlists);
        // console.log(tracksNum);


    return (
        <Wrapper>
                <ProfileImage src={(user.images[0]).url}/>
                <ProfileName>{user.display_name}</ProfileName>
            <ProfileInfo>
                <Link href={(user.external_urls).spotify} target="_blank">To Spotify Profile</Link>
                <NewPlaylist onClick={createPlaylist}>+ Create Playlist</NewPlaylist>
                {/* <DeletePlaylist onClick={deletePlaylist}>- Delete Playlist</DeletePlaylist> */}
            </ProfileInfo>
            <TrackInfo>
                <Title>Favorite Tracks</Title>
                {favoriteTracks.map((track) => {
                    return (
                        <FavoriteSongs key={Math.floor(Math.random()*14000000000)}>
                            <AlbumImg src={((track.album).images[0]).url}/>
                            <TrackName>{track.name}</TrackName>
                            <Link href={(track.external_urls).spotify} target="_blank">Check Track on Spotify</Link>
                            <SecondTrackLink to={`/track/${track.id}`} state={{track: track}}>Check Track on Melodica</SecondTrackLink>
                            <Link href={((track.artists[0]).external_urls).spotify} target="_blank">Artist: {(track.artists[0]).name}</Link>
                            <Link href={((track.album).external_urls).spotify} target="_blank">Album: {(track.album).name}</Link>
                            {!addedTracks.includes(track.id)
                            ?<AddSong onClick={event => addTrack(event, `spotify:track:${track.id}`)}>Add to playlist</AddSong>
                            :<AddSong onClick={event => removeTrack(event, `spotify:track:${track.id}`)}>Remove from playlist</AddSong>}
                        </FavoriteSongs>
                )})}
            </TrackInfo>
            <PlaylistsInfo>
                <Title>Created Playlists</Title>
                {playlists.map((playlist) => {
                    console.log(playlist);
                    return(
                        <PlaylistDiv key={Math.floor(Math.random()*14000000000)}>
                            <PlaylistName to={`/playlist/${playlist.id}`} state={{playlist: playlist, trackIds: addedTracks}}>{playlist.name}</PlaylistName>
                        </PlaylistDiv>
                    )
                })}
            </PlaylistsInfo>
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
    text-align: center;
    width: 300px;
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

const TrackInfo = styled.div`
    position: absolute;
    margin-top: 372px;
    right: 49.8%;
    width: 600px;
    border-right: 2px solid #38E8FF;
    border-top: 2px solid #38E8FF;
`;

const Title = styled.h3`
    text-align: center;
    padding-top: 5px;
`

const NewPlaylist = styled.button`
    background-color: #2EC0D2;
    border: none;
    border-radius: 3px;
    margin-top: 5px;
    padding: 4px;
    cursor: pointer;
`;

const DeletePlaylist = styled.button`
    background-color: #2EC0D2;
    border: none;
    border-radius: 3px;
    margin-top: 5px;
    padding: 4px;
    cursor: pointer;
`;

const FavoriteSongs = styled.div`
    margin-top: 20px;
    margin-right: 20px;
    width: 550px;
    height: 172px;
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

const SecondTrackLink = styled(NavLink)`
    padding: 2px;
    display: block;
    :hover {
        color: #38E8FF;
    }
`;

const Link = styled.a`
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

const PlaylistsInfo = styled.div`
    position: absolute;
    margin-top: 372px;
    width: 600px;
    left: 50.2%;
    border-top: 2px solid #38E8FF;
`;

const PlaylistDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const PlaylistName = styled(NavLink)`
    padding: 10px;
    border: 1px solid #38E8FF;
    border-radius: 15px;
    margin-top: 10px;
    color: white;
    :hover {
        color: #38E8FF;
    }
`;

export default Profile;