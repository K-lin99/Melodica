import styled from "styled-components"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import north from "../assets/South-Mediterranean.jpeg";
import central from "../assets/Central-Africa.jpg";
import south from "../assets/South-Africa.jpg";
import TrackSearchBar from "./TrackSearchBar";

const AfricaRegions = () => {
    const {setContinent, setRegion } = useContext(ArtistsTracksContext);

    // setting region and continent state to fetch authors in context
    const fetchAuthors = (event, region) => {
        setContinent("Africa")
        setRegion(region)
    }

    return (
    <Wrapper>
        <SearchDiv>
            <TrackSearchBar/>
        </SearchDiv>
        <NorthDiv>
            <Img src={north}/>
            <Description>Discover the music of the South Mediterranean!</Description>
            <MusicStyles>Including musical styles of various Arabic cultures</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "African-Mediterranean")}>Discover</Button>
        </NorthDiv>
        <CentralDiv>
            <Img src={central}/>
            <Description>Discover musical folk from Central Africa!</Description>
            <MusicStyles>Including music from Senegal, Congo, Kenya, Nigeria and Cameroon</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Central-Africa")}>Discover</Button>
        </CentralDiv>
        <SouthDiv>
            <Img src={south}/>
            <Description>Discover the styles of Southern Africa!</Description>
            <MusicStyles>Including styles from Southern Africa and Madagascar</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "South-Africa")}>Discover</Button>
        </SouthDiv>
        <Link to="/explore"><BackButton>Back to Exploration</BackButton></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 125vh;
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
    margin-top: 1015px;
    background-color: #2EC0D2;
    border-radius: 10px;
    cursor: pointer;
`;

const NorthDiv = styled.div`
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

const CentralDiv = styled.div`
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

const SouthDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid #4EDEF0 ;
    border-radius: 20px;
    margin-top: 680px;
    width: 550px;
    filter: blur(2px);
    :hover {
        filter: blur(0px);
        transition: 0.5s ease-in-out;
    }
`;

export default AfricaRegions;