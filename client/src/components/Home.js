import React from "react";
import styled from "styled-components";
import background from "../assets/Home-Backround.jpg"
import { NavLink } from "react-router-dom"

const Home = () =>{
    return (
        <Wrapper>
            <HomeBackground src={background}/>
            <HomeTitle>Explore the Musical Riches of our World </HomeTitle>
            <SiteGoal>The purpose of this website is to provide you the opportunity to discover traditional folk music from all over the World in an easy and fun way.</SiteGoal>
            <Link to="/explore">Start Exploring</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #2E2E2E;
`;

const HomeBackground = styled.img`
    position: absolute;
    width: 100%;
    height: 96%;
    filter: blur(2px);
    z-index: 0;
    background-color: #2E2E2E;
`;

const HomeTitle = styled.h1`
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    z-index: 1;
`;

const SiteGoal = styled.p`
    position: absolute;
    font-size: 20px;
    width: 450px;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    z-index: 1;
`;

const Link = styled(NavLink)`
    position: absolute;
    font-size: 25px;
    top: 60%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    z-index: 1;
`;

export default Home;