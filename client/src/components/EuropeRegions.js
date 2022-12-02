import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";

const EuropeRegions = () => {
    const {setContinent, setRegion} = useContext(ArtistsTracksContext);

    const fetchAuthors = (event, region) => {
        setContinent("Europe")
        setRegion(region)
    }
    
    return (
    <Wrapper>
        <button onClick={event => fetchAuthors(event, "WesternEurope")}>Western European</button>
        <button onClick={event => fetchAuthors(event, "NorthernEurope")}>North European</button>
        <button onClick={event => fetchAuthors(event, "EasternEurope")}>Eastern European</button>
        <button onClick={event => fetchAuthors(event, "NorthMediterranean")}>Mediterranean</button>
        <button>Back to Exploration</button>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default EuropeRegions;