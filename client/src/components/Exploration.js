import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import africa from "../assets/Africa.png";
import asia from "../assets/Asia.png";
import europe from "../assets/Europe.png";
import northAmerica from "../assets/NorthAmerica.png";
import southAmerica from "../assets/SouthAmerica.png";
import oceania from "../assets/Oceania.png";

const Exploration = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Map>
                <h1>Select a Continent You'd Like to Explore</h1>
                <Africa onClick={navigate("/explore/africa")} src={africa}/>
                <Asia src={asia}/>
                <Europe src={europe}/>
                <NorthAmerica src={northAmerica}/>
                <SouthAmerica src={southAmerica}/>
                <Oceania src={oceania}/>
            </Map>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #2E2E2E;
`;

const Map = styled.div`
    background-color: #2E2E2E;
    min-height: 100%;
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