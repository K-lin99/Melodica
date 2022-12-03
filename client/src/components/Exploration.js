import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import africa from "../assets/Africa.png";
import asia from "../assets/Asia.png";
import europe from "../assets/Europe.png";
import northAmerica from "../assets/NorthAmerica.png";
import southAmerica from "../assets/SouthAmerica.png";
import oceania from "../assets/Oceania.png";
import SearchBar from "./SearchBar";

const Exploration = () => {


    return (
        <Wrapper>
            <SearchBar/>
            <h1>Select a Continent You'd Like to Explore</h1>
            <Link to="/explore/africa"><Africa src={africa}/></Link>
            <Link to="/explore/asia"><Asia src={asia}/></Link>
            <Link to="/explore/europe"><Europe src={europe}/></Link>
            <Link to="/explore/north-america"><NorthAmerica src={northAmerica}/></Link>
            <Link to="/explore/south-america"><SouthAmerica src={southAmerica}/></Link>
            <Link to="/explore/oceania"><Oceania src={oceania}/></Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #2E2E2E;
    width: 100%;
    height: 100%;
`;

const Africa = styled.img`
    position: absolute;
    margin-top: 250px;
    margin-left: 565px;
    width: 300px;
`;

const Asia = styled.img`
    position: absolute;
    margin-top: 90px;
    margin-left: 750px;
    width: 460px;
`;

const Europe = styled.img`
    position: absolute;
    margin-top: 77px;
    margin-left: 585px;
    width: 270px;
`;

const NorthAmerica = styled.img`
    position: absolute;
    margin-top: 70px;
    margin-left: 170px;
    width: 460px;
`;

const SouthAmerica = styled.img`
    position: absolute;
    margin-top: 318px;
    margin-left: 326px;
    width: 215px;
`;

const Oceania = styled.img`
    position: absolute;
    margin-top: 400px;
    margin-left: 1070px;
    width: 250px;
`;



export default Exploration