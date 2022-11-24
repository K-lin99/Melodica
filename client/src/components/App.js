import React from "react";
import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
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


const App = () => {
    const CLIENT_ID = "b674889abfbe424cb4e47fe8af7f8148"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const [token, setToken] = useState("")

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    
        setToken(token)
    
    }, [])

    return(
        <Router>
            <GlobalStyles/>
            {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            <Wrapper>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/explore" element={<Exploration/>}/>
                    <Route path="/explore/regions" element={<Regions/>}/>
                    <Route path="/playlists" element={<Playlists/>}/>
                    <Route path="/song" element={<Song/>}/>
                </Routes>
                <Footer/>
            </Wrapper>
        </Router>
    )
}

const Wrapper = styled.div``;

export default App;