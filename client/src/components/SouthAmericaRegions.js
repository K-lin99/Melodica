import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";

const SouthAmericaRegions = () => {
    const {setContinent, setRegion} = useContext(ArtistsTracksContext);

    const fetchAuthors = (event, region) => {
        setContinent("South-America")
        setRegion(region)
    }

    return (
    <Wrapper>
        <button onClick={event => fetchAuthors(event, "Portugese-Latino")}>Brazilian</button>
        <button onClick={event => fetchAuthors(event, "Spanish-Latino")}>Spanish</button>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default SouthAmericaRegions;