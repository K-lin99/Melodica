import styled from "styled-components"
import { Link } from "react-router-dom";

const AfricaRegions = () => {
    return (
    <Wrapper>
        <p>North African</p>
        <p>Sub-Saharan</p>
        <p>South African</p>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default AfricaRegions;