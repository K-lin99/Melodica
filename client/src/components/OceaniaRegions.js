import styled from "styled-components"
import { Link } from "react-router-dom";


const OceaniaRegions = () => {
    return (
    <Wrapper>
        <p>Australian</p>
        <p>Aboriginal</p>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default OceaniaRegions;