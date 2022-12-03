import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";

const AfricaRegions = () => {
    const {setContinent, setRegion} = useContext(ArtistsTracksContext);

    const fetchAuthors = (event, region) => {
        setContinent("Africa")
        setRegion(region)
    }

    return (
    <Wrapper>
        <button onClick={event => fetchAuthors(event, "South-Mediterranean")}>North African</button>
        <button onClick={event => fetchAuthors(event, "Sub-Sahara")}>Sub-Saharan</button>
        <button onClick={event => fetchAuthors(event, "South-Africa")}>South African</button>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default AfricaRegions;