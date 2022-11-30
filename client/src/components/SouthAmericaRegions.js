import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";

const SouthAmericaRegions = () => {
    const {setContinent, setRegion} = useContext(ArtistsTracksContext);

    const fetchAuthors = (event, region) => {
        setContinent("SouthAmerica")
        setRegion(region)
    }

    return (
    <Wrapper>
        <button onClick={event => fetchAuthors(event, "Brazil")}>Brazilian</button>
        <button onClick={event => fetchAuthors(event, "Spanish")}>Spanish</button>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default SouthAmericaRegions;