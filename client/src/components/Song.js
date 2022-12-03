import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from "styled-components"

const Song = () => {
    const {tracks} = useContext(ArtistsTracksContext);
    const location = useLocation();
    const { track } = location.state
    
    console.log(track);


    return (
        <h1>Songs</h1>
    )
}

export default Song;