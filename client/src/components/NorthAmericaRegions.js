import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { useContext } from "react";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import america from "../assets/America.jpg";
import canada from "../assets/Canada.jpg";
import native from "../assets/Native.png";
import centralAmerica from "../assets/Central-America.jpg";


const NorthAmericaRegions = () => {
    const {setContinent, setRegion, artists, tracks } = useContext(ArtistsTracksContext);

    const fetchAuthors = (event, region) => {
        setContinent("North-America")
        setRegion(region)
    }

    console.log(artists);
    console.log(tracks);

    return (
    <Wrapper>
        <AmericaDiv>
            <Img src={america}/>
            <Description>Discover different musical styles from the USA!</Description>
            <MusicStyles>Including American folk, jazz, rock and country</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "America")}>Discover</Button>
        </AmericaDiv>
        <CanadaDiv>
            <Img src={canada}/>
            <Description>Discover different musical styles from Canada!</Description>
            <MusicStyles>Including English and French Canadian folk</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Canada")}>Discover</Button>
        </CanadaDiv>
        <NativeDiv>
            <Img src={native}/>
            <Description>Discover the music of the Native People!</Description>
            <MusicStyles>Including styles of various North American tribes</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Native")}>Discover</Button>
        </NativeDiv>
        <CentralAmericaDiv>
            <Img src={centralAmerica}/>
            <Description>Discover different folk styles from Central America</Description>
            <MusicStyles>Including Latino and Caribbean styles</MusicStyles>
            <Button onClick={event => fetchAuthors(event, "Central-America")}>Discover</Button>
        </CentralAmericaDiv>
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

const AmericaDiv = styled.div`
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

const CanadaDiv = styled.div`
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

const NativeDiv = styled.div`
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

const CentralAmericaDiv = styled.div`
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

export default NorthAmericaRegions;