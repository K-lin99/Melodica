import React from "react";
import {useEffect, useState, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ArtistsTracksContext } from "./ArtistsTracksContext";
import styled from "styled-components";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles"
import Profile from "./Profile";
import Playlists from "./Playlists";
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
    const {token, setToken, refreshToken, setRefreshToken} = useContext(ArtistsTracksContext);
    const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI, REACT_APP_AUTH_ENDPOINT, REACT_APP_RESPONSE_TYPE } = process.env
    const scopes = "user-read-private"

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    // passing access and refresh tokens from the BE
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setToken(urlParams.get("access_token"));
        setRefreshToken(urlParams.get("access_token"));
        console.log(token);
        console.log(refreshToken);
    },[])
    

    return(
        <Router>
            <GlobalStyles/>
            <Wrapper>
            {!token ?
                    <a href={"https://accounts.spotify.com/authorize?client_id=b674889abfbe424cb4e47fe8af7f8148&response_type=code&redirect_uri=http://localhost:8000/callback&scope=user-read-private%20playlist-modify-private&state=32tC6PnkJ6agSoj2"}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/explore" element={<Exploration/>}/>
                    <Route path="/explore/regions" element={<Regions/>}/>
                    <Route path="/playlists" element={<Playlists/>}/>
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

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

export default App;