import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import west from "../assets/Middle-East.jpeg";
import central from "../assets/Central-Asia.jpg";
import east from "../assets/East-Asia.jpg";
import south from "../assets/South-Asia.jpg";
import TrackSearchBar from "./TrackSearchBar";

const AsiaRegions = () => {
    const {setContinent, setRegion } = useContext(ArtistsTracksContext);

    const fetchAuthors = (event, region) => {
        setContinent("Asia")
        setRegion(region)
    }

    return (
    <Wrapper>
        <SearchDiv>
            <TrackSearchBar/>
        </SearchDiv>
        <WestDiv>
            <Img src={west}/>
            <Description>Discover different styles from the Middle East!</Description>
            <MusicStyles>Including Arabic, Turkish, Israeli and Persian styles</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "West-Asia")}>Discover</Button>
        </WestDiv>
        <CentralDiv>
            <Img src={central}/>
            <Description>Discover musical folk from Central Asia!</Description>
            <MusicStyles>Including various styles from different Turkic people</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Central-Asia")}>Discover</Button>
        </CentralDiv>
        <SouthDiv>
            <Img src={south}/>
            <Description>Discover different folk styles from Southern Asia!</Description>
            <MusicStyles>Including styles from India, Pakistan, Thailand, Burma and Cambodia</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "South-Asia")}>Discover</Button>
        </SouthDiv>
        <EastDiv>
            <Img src={east}/>
            <Description>Discover the variations of East Asian music!</Description>
            <MusicStyles>Including Chinese, Japanese, Korean, Vietnamese and Philippino styles</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "East-Asia")}>Discover</Button>
        </EastDiv>
        <Link to="/explore"><BackButton>Back to Exploration</BackButton></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 165vh;
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
    margin-top: 1350px;
    background-color: #2EC0D2;
    border-radius: 10px;
    cursor: pointer;
`;

const WestDiv = styled.div`
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

const EastDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid #4EDEF0 ;
    border-radius: 20px;
    margin-top: 1010px;
    width: 550px;
    filter: blur(2px);
    :hover {
        filter: blur(0px);
        transition: 0.5s ease-in-out;
    }
`;

export default AsiaRegions;