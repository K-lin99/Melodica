import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import brazil from "../assets/Brazil.jpg";
import southAmerica from "../assets/South-America.jpg";

const SouthAmericaRegions = () => {
    const {setContinent, setRegion, tracks } = useContext(ArtistsTracksContext);

    const fetchAuthors = (event, region) => {
        setContinent("South-America")
        setRegion(region)
    }

    console.log(tracks);

    return (
    <Wrapper>
        <BrazilDiv>
            <Img src={brazil}/>
            <Description>Discover different musical styles from Brazil!</Description>
            <MusicStyles>Including folk music from various Brazilian artists</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Brazilian-America")}>Discover</Button>
        </BrazilDiv>
        <SpanishDiv>
            <Img src={southAmerica}/>
            <Description>Discover different musical styles from Spanish South America!</Description>
            <MusicStyles>Including Latino music from all over South America</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Spanish-America")}>Discover</Button>
        </SpanishDiv>
        <Link to="/explore"><BackButton>Back to Exploration</BackButton></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`
`;

const Img = styled.img`
    position: relative;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    filter: brightness(70%);
    width: 500px;
    border-radius: 20px;
    z-index: 0;
    height: 300px;
`;

const Description = styled.p`
    position: absolute;
    text-align: center;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    width: 450px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

const MusicStyles = styled.p`
    position: absolute;
    text-align: center;
    font-size: 13px;
    z-index: 1;
    left: 50%;
    top: 58%;
    transform: translate(-50%);
    width: 450px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

const Button = styled.button`
    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translate(-50%);
    margin-top: 200px;
    background-color: #2EC0D2;
    border-radius: 10px;
    cursor: pointer;
`;

const BackButton = styled.button`
    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translate(-50%);
    margin-top: 700px;
    background-color: #2EC0D2;
    border-radius: 10px;
    cursor: pointer;
`;

const BrazilDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid #4EDEF0 ;
    border-radius: 20px;
    margin-top: 20px;
    width: 550px;
    filter: blur(2px);
    :hover {
        filter: blur(0px);
        transition: 0.5s ease-in-out;
    }
`;

const SpanishDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid #4EDEF0 ;
    border-radius: 20px;
    margin-top: 350px;
    width: 550px;
    filter: blur(2px);
    :hover {
        filter: blur(0px);
        transition: 0.5s ease-in-out;
    }
`;

export default SouthAmericaRegions;