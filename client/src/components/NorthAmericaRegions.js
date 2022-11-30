import styled from "styled-components"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";


const NorthAmericaRegions = () => {
    const {setContinent, setRegion} = useContext(ArtistsTracksContext);

    const fetchAuthors = (event, region) => {
        setContinent("NorthAmerica")
        setRegion(region)
    }

    return (
    <Wrapper>
        <button onClick={event => fetchAuthors(event, "America")}>American</button>
        <button onClick={event => fetchAuthors(event, "Canada")}>Canadian</button>
        <button onClick={event => fetchAuthors(event, "Native")}>Native</button>
        <button onClick={event => fetchAuthors(event, "CentralAmerica")}>Central American</button>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default NorthAmericaRegions;