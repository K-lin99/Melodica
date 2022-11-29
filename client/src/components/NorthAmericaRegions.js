import styled from "styled-components"
import { Link } from "react-router-dom";


const NorthAmericaRegions = () => {

    
    
    return (
    <Wrapper>
        <p>American</p>
        <p>Canadian</p>
        <p>Native</p>
        <p>Central American</p>
        <Link to="/explore"><button>Back to Exploration</button></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default NorthAmericaRegions;