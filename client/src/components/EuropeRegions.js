import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import west from "../assets/West-Europe.jpg";
import north from "../assets/North-Europe.jpg";
import east from "../assets/East-Europe.jpg";
import mediterranean from "../assets/North-Mediterranean.jpeg";

const EuropeRegions = () => {
    const {setContinent, setRegion, tracks } = useContext(ArtistsTracksContext);
    const fetchAuthors = (event, region) => {
        setContinent("Europe")
        setRegion(region)
    }
    console.log(tracks);

    return (
    <Wrapper>
        <WestDiv>
            <Img src={west}/>
            <Description>Discover different folk styles from Western Europe!</Description>
            <MusicStyles>Including French, German, English and Celtic folk</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Western-Europe")}>Discover</Button>
        </WestDiv>
        <NorthDiv>
            <Img src={north}/>
            <Description>Discover musical folk from Scandinavia!</Description>
            <MusicStyles>Including Danish, Norwegian, Swedish, Finnish and Baltic folk</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Northern-Europe")}>Discover</Button>
        </NorthDiv>
        <EastDiv>
            <Img src={east}/>
            <Description>Discover the variations of Eastern European folk!</Description>
            <MusicStyles>Including styles of various Slavic people</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Eastern-Europe")}>Discover</Button>
        </EastDiv>
        <MediterraneanDiv>
            <Img src={mediterranean}/>
            <Description>Discover different folk styles from the North Mediterranean Sea!</Description>
            <MusicStyles>Including Romance and Greek styles</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "European-Mediterranean")}>Discover</Button>
        </MediterraneanDiv>
        <Link to="/explore"><BackButton>Back to Exploration</BackButton></Link>
    </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 165vh;
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

const NorthDiv = styled.div`
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

const EastDiv = styled.div`
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

const MediterraneanDiv = styled.div`
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

export default EuropeRegions;