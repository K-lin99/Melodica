import styled from "styled-components"
import { Link } from "react-router-dom";


const AsiaRegions = () => {
    return (
    <Wrapper>
        <p>Middle Eastern</p>
        <p>Central Asian</p>
        <p>South-East Asian</p>
        <p>East Asian</p>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default AsiaRegions;