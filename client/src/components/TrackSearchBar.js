import { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from 'styled-components';

const TrackSearchBar = () => {
    const [value, setValue] = useState("");
    const {tracks} = useContext(ArtistsTracksContext);
    const listDisplayer = [""];
    const trackNames = [];
    
    // accessing track names
    if (tracks !== [] && tracks !== undefined){
        tracks.map((artist, index) => {
            (Object.values(artist))[0].map((track, index) => {
                trackNames.push(track.name)
            })
        })
    }

    // returning every name
    const filteredSuggestions = trackNames.filter((trackName) =>{
        if ((trackName).toLowerCase().includes(value.toLowerCase()) && value.length > 1){
            return(
                trackName
                )
        }                   
    })
    
    return (
        <Wrapper>
            <Input
                type = "text"
                value = {value}
                onChange = {(ev) => setValue(ev.target.value)}
                placeholder = "Search a track"
            />
            <Button onClick={() => setValue("")}>Clear</Button>
            { listDisplayer.map(() => {
                if (value.length > 1 && filteredSuggestions.length > 0) {
                return (
                <Ul>
                    {filteredSuggestions.map((suggestion) => {
                        // accessing selected track id and info
                        let trackId = "";
                        let trackInfo = [];
                        if (tracks !== [] && tracks !== undefined){
                            tracks.map((artist, index) => {
                                console.log((Object.values(artist))[0]);
                                (Object.values(artist))[0].map((track, index) => {
                                    if ((track.name).includes(suggestion)){
                                        trackId = track.id;
                                        trackInfo = track;
                                    }
                                })
                            })
                        }
                        return(
                            <NavLink to={`/track/${trackId}`} state={{track: trackInfo}}>
                            <Li key={Math.floor(Math.random()*14000000000)}>
                                <span key={Math.floor(Math.random()*14000000000)}>
                                    {(suggestion).substr(0, (suggestion).indexOf(value.slice(-1)) + 1)}
                                    <Prediction>
                                        {(suggestion).substr((suggestion).indexOf(value.slice(-1)) + 1)}
                                    </Prediction>
                                </span>
                            </Li>
                            </NavLink>
                        )
                    })}
                </Ul>)}
            })}
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
    margin-right: 10px;
    ::placeholder {
        color: #C3C3C3;
    }
`;

const Button = styled.button`
    background-color:#2EC0D2;
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

const TrackLink = styled(NavLink)`
    
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

export default TrackSearchBar