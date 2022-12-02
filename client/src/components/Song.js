import { useContext, useEffect, useState } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from "styled-components"

const Song = () => {
    const {tracks} = useContext(ArtistsTracksContext);


    return (
        <h1>Songs</h1>
    )
}

export default Song;