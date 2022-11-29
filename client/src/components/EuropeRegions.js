import styled from "styled-components";
import { Link } from "react-router-dom";
import GetSongs from "./GetSongs";


const EuropeRegions = () => {

    

    return (
    <Wrapper>
        <button onClick={() => {<GetSongs/>}}>Western European</button>
        <p>North European</p>
        <p>Celtic</p>
        <p>Eastern European</p>
        <p>Balkan</p>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default EuropeRegions;