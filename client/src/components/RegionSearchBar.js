import {useEffect, useState, useContext} from 'react';
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from 'styled-components';

const RegionSearchBar = () => {
    const [value, setValue] = useState("");
    const listDisplayer = [""];
    const {setContinent, setRegion} = useContext(ArtistsTracksContext);
    const [continents, setContinents] = useState([])
    const regionNames = [];
    let mergedRegionNames = [];

    // getting continents and regions data
    useEffect(() => {
        fetch("/continents")
        .then(response => response.json())
        .then(data => setContinents(data.data))
        .catch(err => console.log(err))
    },[])

    // accessing region names
    if (continents.length !== 0) {
        continents.forEach((continent) => {
            regionNames.push(Object.keys(continent.Region))
        })    
        mergedRegionNames = (regionNames.flat(1));
    }

    // retuning every region
    const filteredSuggestions = mergedRegionNames.filter((region) => {
        if ((region).toLowerCase().includes(value.toLowerCase()) && value.length > 1){
            return(
                region
            )
        }
    })

    // function to fetch region authors on click
    const fetchAuthors = (event, continent, region) => {
        setContinent(continent)
        setRegion(region)
    }

    return (
        <Wrapper>
            <Input
                type = "text"
                value = {value}
                onChange = {(ev) => setValue(ev.target.value)}
                placeholder = "Search region to create playlist"
            />
            <Button onClick={() => setValue("")}>Clear</Button>
            { listDisplayer.map(() => {
                if (value.length > 1 && filteredSuggestions.length > 0) {
                return (
                <Ul>
                    {filteredSuggestions.map((suggestion) => {
                        // accessing selected region's continent
                        let continent = "";
                        if (continents !== []) {
                            continents.forEach((cont, index) => {
                                if((Object.keys(continents[index].Region)).includes(suggestion)){
                                    continent = (continents[index].Continent).replace(",", "");
                                }
                            })
                        }
                        return(
                            <Li
                            key={Math.floor(Math.random()*14000000000)}
                                onClick={event => fetchAuthors(event, `${continent}`, `${suggestion}`)}
                            >
                                <span key={Math.floor(Math.random()*14000000000)}>
                                    {(suggestion).substr(0, (suggestion).indexOf(value.slice(-1)) + 1)}
                                    <Prediction>
                                        {(suggestion).substr((suggestion).indexOf(value.slice(-1)) + 1)}
                                    </Prediction>
                                </span>
                            </Li>
                        )
                    })}
                </Ul>)}
            })
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: absolute;
`;

const Input = styled.input`
    border: 3px solid #434343;
    border-radius: 5px;
    background-color: #656565;
    width: 250px;
    height: 35px;
    margin-right: 30px;
    ::placeholder {
        color: #C3C3C3;
    }
`;

const Button = styled.button`
    background-color:  #2EC0D2;
    color: white;
    height: 35px;
    width: 70px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;

const Ul = styled.ul`
    margin-top: 10px;
    padding: 5px;
    border: 1px solid black;
    box-shadow: 5px 10px 5px black ;
`;

const Li = styled.li`
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #2EC0D2;
    }
`;

const Prediction = styled.span`
    font-weight: bold;
`;

export default RegionSearchBar;