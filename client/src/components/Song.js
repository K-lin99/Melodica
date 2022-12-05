import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import {AiOutlineHeart} from "react-icons/ai"
import styled from "styled-components"

const Song = () => {
    const location = useLocation();
    const { favoriteTracks, setFavoriteTracks } = useContext(ArtistsTracksContext)
    const { track } = location.state
    const [isFavorite, setIsFavorite] = useState(false)

    // padding seconds to 2 digits if less than 10
    const padTo2Digits = (num) => {
        return num.toString().padStart(2, "0");
    }

    // converting milliseconds to minutes and seconds
    const MsToMinute = (ms) => {
        const minute = Math.floor(ms / 60000);
        const seconds = Math.round((ms % 60000)/ 1000);

        return seconds === 60
        ? `${minute + 1}:00`
        : `${minute}:${padTo2Digits(seconds)}`
    }

    const duration = MsToMinute(track.duration_ms)

    // storing liked tracks to favorite tracks array
    const AddToFavorite = () => {
        setIsFavorite(true)
        setFavoriteTracks((previousTrack) => [...previousTrack, track])
    }

    const removeFromFavorite = () => {
        setIsFavorite(false)
        const removal = favoriteTracks.filter(song => song !== track)
        setFavoriteTracks(removal);
    }

    return (
        <Wrapper>
                <AlbumImg src={((track.album).images[0]).url}/>
                <TrackName>{track.name}</TrackName>
                <Duration>· {duration}</Duration>
            <SongInfo>
                <TrackLink href={(track.external_urls).spotify} target="_blank">Check Track on Spotify</TrackLink>
                <ArtistLink href={((track.artists[0]).external_urls).spotify} target="_blank">Artist: {(track.artists[0]).name}</ArtistLink>
                <AlbumLink href={((track.album).external_urls).spotify} target="_blank">Album: {(track.album).name}</AlbumLink>
                {isFavorite === false
                ?<Favorite onClick={AddToFavorite}>Favorite Track</Favorite>
                :<Favorite onClick={removeFromFavorite}>Unfavorite Track</Favorite>}
            </SongInfo>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #222222;
    display: flex;
    justify-content: center;
`;

const SongInfo = styled.div`
    position: absolute;
    margin-top: 400px;
    width: 300px;  
    left: 50%;
    transform: translate(-50%);
`;

const AlbumImg = styled.img`
    position: absolute;
    margin-top: 10px;
    padding: 5px;
    width: 350px;
    border: 2px solid #4EDEF0 ;
`;

const TrackName = styled.h3`
    font-size: 30px;
    padding-bottom: 419px;
    margin-top: 364px;
`;

const TrackLink = styled.a`
    padding: 2px;
    text-align: center;
    display: block;
    :hover {
        color: #4EDEF0;
    }
`;

const ArtistLink = styled.a`
    padding: 2px;
    text-align: center;
    display: block;
    :hover {
        color: #4EDEF0;
    }
`;

const AlbumLink = styled.a`
    padding: 2px;
    text-align: center;
    display: block;
    :hover {
        color: #4EDEF0;
    }
    margin-bottom: 5px;
`;

const Duration = styled.p`
    font-size: 20px;
    padding-left: 10px;
    margin-top: 371px;
`;

const Favorite = styled.button`
    position: absolute;
    cursor: pointer;
    background-color:#2EC0D2;
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    left: 50%;
    transform: translate(-50%);
`;

const iconStyle = {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    color: "#4EDEF0"
}

export default Song;