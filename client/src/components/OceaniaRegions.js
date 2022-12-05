import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import australia from "../assets/Australia.jpg";
import aboriginal from "../assets/Aboriginal.jpg";
import TrackSearchBar from "./TrackSearchBar";

const OceaniaRegions = () => {
    const {setContinent, setRegion, tracks } = useContext(ArtistsTracksContext);

    // setting region and continent state to fetch authors in context
    const fetchAuthors = (event, region) => {
        setContinent("Oceania")
        setRegion(region)
    }

    console.log(tracks);

    return (
    <Wrapper>
        <SearchDiv>
            <TrackSearchBar/>
        </SearchDiv>
        <AustraliaDiv>
            <Img src={australia}/>
            <Description>Discover different musical styles of Australia!</Description>
            <MusicStyles>Including folk music from Australia and New Zealand</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Australia")}>Discover</Button>
        </AustraliaDiv>
        <AboriginalDiv>
            <Img src={aboriginal}/>
            <Description>Discover the different musics of the Aboriginal People!</Description>
            <MusicStyles>Including Aboriginal styles of Australia, New Guinea and Indonesia</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Aboriginal")}>Discover</Button>
        </AboriginalDiv>
        <Link to="/explore"><BackButton>Back to Exploration</BackButton></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`
`;

const SearchDiv = styled.div`
    padding: 20px;
    position: absolute;
    width: 500px;
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

const AustraliaDiv = styled.div`
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

const AboriginalDiv = styled.div`
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

export default OceaniaRegions;