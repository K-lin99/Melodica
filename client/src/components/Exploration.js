import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import africa from "../assets/Africa.png";
import asia from "../assets/Asia.png";
import europe from "../assets/Europe.png";
import northAmerica from "../assets/NorthAmerica.png";
import southAmerica from "../assets/SouthAmerica.png";
import oceania from "../assets/Oceania.png";
import RegionSearchBar from "./RegionSearchBar";

const Exploration = () => {
    return (
        <Wrapper>
            <SearchDiv>
                <RegionSearchBar/>
            </SearchDiv>
            <Title>Select a Continent You'd Like to Explore</Title>
            <Link to="/Explore/Africa"><Africa src={africa}/></Link>
            <Link to="/Explore/Asia"><Asia src={asia}/></Link>
            <Link to="/Explore/Europe"><Europe src={europe}/></Link>
            <Link to="/Explore/North-America"><NorthAmerica src={northAmerica}/></Link>
            <Link to="/Explore/South-America"><SouthAmerica src={southAmerica}/></Link>
            <Link to="/Explore/Oceania"><Oceania src={oceania}/></Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #222222;
    width: 100%;
    height: 100%;
`;

const SearchDiv = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;

const Africa = styled.img`
    position: absolute;
    margin-top: 210px;
    margin-left: 765px;
    width: 300px;
`;

const Asia = styled.img`
    position: absolute;
    margin-top: 50px;
    margin-left: 950px;
    width: 460px;
`;

const Europe = styled.img`
    position: absolute;
    margin-top: 37px;
    margin-left: 785px;
    width: 270px;
`;

const NorthAmerica = styled.img`
    position: absolute;
    margin-top: 40px;
    margin-left: 370px;
    width: 460px;
`;

const SouthAmerica = styled.img`
    position: absolute;
    margin-top: 268px;
    margin-left: 526px;
    width: 215px;
`;

const Oceania = styled.img`
    position: absolute;
    margin-top: 350px;
    margin-left: 1270px;
    width: 250px;
`;


export default Exploration;