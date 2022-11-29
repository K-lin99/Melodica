import styled from "styled-components"
import { Link } from "react-router-dom";


const SouthAmericaRegions = () => {
    return (
    <Wrapper>
        <p>Brazilian</p>
        <p>Spanish</p>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default SouthAmericaRegions;