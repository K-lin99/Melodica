import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";

const AsiaRegions = () => {
    const {setContinent, setRegion} = useContext(ArtistsTracksContext);

    const fetchAuthors = (event, region) => {
        setContinent("Asia")
        setRegion(region)
    }
    
    return (
    <Wrapper>
        <button onClick={event => fetchAuthors(event, "MiddleEast")}>Middle Eastern</button>
        <button onClick={event => fetchAuthors(event, "CentralAsia")}>Central Asian</button>
        <button onClick={event => fetchAuthors(event, "SouthAsia")}>South-East Asian</button>
        <button onClick={event => fetchAuthors(event, "EastAsia")}>East Asian</button>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default AsiaRegions;