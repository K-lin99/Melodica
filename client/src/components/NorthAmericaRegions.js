import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";


const NorthAmericaRegions = () => {
    const {setContinent, setRegion, currentPlaylist, artists, region} = useContext(ArtistsTracksContext);
    const navigate = useNavigate();

    const fetchAuthors = (event, region) => {
        setContinent("North-America")
        setRegion(region)

    }

    const navigateToPlaylist = () => {
        navigate(`/playlist/${currentPlaylist.id}`)
    }

    return (
    <Wrapper>
        {currentPlaylist !== ""
        ?<button onClick={navigateToPlaylist}>View Playlist</button>
        :""}
        <button onClick={event => fetchAuthors(event, "America")}>American</button>
        <button onClick={event => fetchAuthors(event, "Canada")}>Canadian</button>
        <button onClick={event => fetchAuthors(event, "Native")}>Native</button>
        <button onClick={event => fetchAuthors(event, "Central-America")}>Central American</button>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default NorthAmericaRegions;