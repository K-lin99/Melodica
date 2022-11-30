import React from "react";
import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ArtistsTracksContext } from "./ArtistsTracksContext";
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
    const [token, setToken] = useState("")
    const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI, REACT_APP_AUTH_ENDPOINT, REACT_APP_RESPONSE_TYPE } = process.env

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    useEffect(() => {
        // getting API access Token
        let authParameters = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=client_credentials&client_id=" + REACT_APP_CLIENT_ID + "&client_secret=" + REACT_APP_CLIENT_SECRET
        }
        fetch("https://accounts.spotify.com/api/token", authParameters)
            .then(res => res.json())
            .then(data => setToken(data.access_token))
            .catch(err => console.log(err))
    }, [])

    console.log(token);
    
    return(
        <Router>
            <GlobalStyles/>
            <Wrapper>
            {!token ?
                    <a onClick={<ArtistsTracksContext token={token}/>}href={`${REACT_APP_AUTH_ENDPOINT}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=${REACT_APP_RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
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