import {useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import { ArtistsTracksContext } from "./ArtistsTracksContext";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const {tracks} = useContext(ArtistsTracksContext);

    useEffect(() => {
        fetch("/continents")
        .then(response => response.json())
        .then(data => console.log(data))
    },[])


    const handleChange = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value)
    };

    // if (searchInput.length > 0) {
    //     tracks.filter((track) => {
    //         return track.name.match(searchInput)
    // })}

    return (
        <Wrapper>
            <input type="text" placeholder="Search" onChange={handleChange} value={searchInput}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`;

export default SearchBar;