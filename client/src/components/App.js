import React from "react";
import {useEffect, useState, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from "styled-components";
import Home from "./Home";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles"
import Profile from "./Profile";
import Playlist from "./Playlist";
import Song from "./Song";
import Exploration from "./Exploration";
import AfricaRegions from "./AfricaRegions";
import AsiaRegions from "./AsiaRegions";
import EuropeRegions from "./EuropeRegions";
import NorthAmericaRegions from "./NorthAmericaRegions";
import SouthAmericaRegions from "./SouthAmericaRegions";
import OceaniaRegions from "./OceaniaRegions";

const App = () => {
    return(
        <Router>
            <GlobalStyles/>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/explore" element={<Exploration/>}/>
                    <Route path="/playlist" element={<Playlist/>}/>
                    <Route path="/track/:track" element={<Song/>}/>
                    <Route path="/Explore/Africa" element={<AfricaRegions/>}/>
                    <Route path="/Explore/Asia" element={<AsiaRegions/>}/>
                    <Route path="/Explore/Europe" element={<EuropeRegions/>}/>
                    <Route path="/Explore/North-America" element={<NorthAmericaRegions/>}/>
                    <Route path="/Explore/South-America" element={<SouthAmericaRegions/>}/>
                    <Route path="/Explore/Oceania" element={<OceaniaRegions/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;