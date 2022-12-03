import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";

const EuropeRegions = () => {
    const {setContinent, setRegion, currentPlaylist} = useContext(ArtistsTracksContext);
    const navigate = useNavigate();

    const fetchAuthors = (event, region) => {
        setContinent("Europe")
        setRegion(region)
    }
    
    return (
    <Wrapper>
        <button onClick={event => fetchAuthors(event, "Western-Europe")}>Western European</button>
        <button onClick={event => fetchAuthors(event, "Northern-Europe")}>North European</button>
        <button onClick={event => fetchAuthors(event, "Eastern-Europe")}>Eastern European</button>
        <button onClick={event => fetchAuthors(event, "North-Mediterranean")}>Mediterranean</button>
        <button>Back to Exploration</button>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default EuropeRegions;