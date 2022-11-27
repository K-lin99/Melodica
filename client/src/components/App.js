import React from "react";
import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import styled from "styled-components";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles"
import Profile from "./Profile";
import Playlist from "./Playlists";
import Song from "./Song";
import Exploration from "./Exploration";
import Regions from "./Regions";
import AfricaRegions from "./AfricaRegions";
import AsiaRegions from "./AsiaRegions";
import EuropeRegions from "./EuropeRegions";
import NorthAmericaRegions from "./NorthAmericaRegions";
import SouthAmericaRegions from "./SouthAmericaRegions";
import OceaniaRegions from "./OceaniaRegions";


const App = () => {
    
    // getting tracks
    const getTracks = async () => {
        let tracksParameters = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                
            }
        }
        fetch("https://api.spotify.com/v1/tracks?market=CA&ids=5hNHkrt2vJaABjgAHOdyQG%2C6YjnTgoNTiRKIcSGcFRZwE", tracksParameters)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    
    getTracks();

    return(
        <Router>
            <GlobalStyles/>
            <Wrapper>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/explore" element={<Exploration/>}/>
                    <Route path="/explore/regions" element={<Regions/>}/>
                    <Route path="/:playlist" element={<Playlist/>}/>
                    <Route path="/:song" element={<Song/>}/>
                    <Route path="/explore/africa" element={<AfricaRegions/>}/>
                    <Route path="/explore/asia" element={<AsiaRegions/>}/>
                    <Route path="/explore/europe" element={<EuropeRegions/>}/>
                    <Route path="/explore/north-america" element={<NorthAmericaRegions/>}/>
                    <Route path="/explore/south-america" element={<SouthAmericaRegions/>}/>
                    <Route path="/explore/oceania" element={<OceaniaRegions/>}/>
                </Routes>
                <Footer/>
            </Wrapper>
        </Router>
    )
}

const Wrapper = styled.div``;

export default App;