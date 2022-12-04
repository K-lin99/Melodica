import {useContext, useEffect, useState} from 'react';
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { ArtistsTracksContext } from "./ArtistsTracksContext";

const Header = () => {
    const { tracks, token, setToken, refreshToken, setRefreshToken } = useContext(ArtistsTracksContext)
    console.log(tracks);

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

    return (
        <Wrapper>
            <Link to="/">Home</Link>
            {!token ?
                    <LoginAnchor href={"https://accounts.spotify.com/authorize?client_id=b674889abfbe424cb4e47fe8af7f8148&response_type=code&redirect_uri=http://localhost:8000/callback&scope=user-read-private%20playlist-modify-private&state=32tC6PnkJ6agSoj2"}>Login
                        to Spotify</LoginAnchor>
                    : <ConditionalWrapper>
                        <LogoutButton onClick={logout}>Logout</LogoutButton>
            <ConditionalLink to="/profile">Profile</ConditionalLink>
            <ConditionalLink to ="/explore">Explore</ConditionalLink>
            {tracks.length < 5
            ?""
            :<Link to="/playlist">+ Playlist</Link>}
                    </ConditionalWrapper>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 1px solid #4EDEF0;
    padding: 2px;
    display: flex;
    justify-content: center;
`;

const ConditionalWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LoginAnchor = styled.a`
    position: absolute;
    margin-left: 90%;
    margin-top: 4px;
    width: 120px;
    :hover {
        color: #38E8FF;
    }
`;

const LogoutButton = styled.button`
    position: absolute;
    margin-left: 44%;
    background-color:#2EC0D2;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

const Link = styled(NavLink)`
    padding: 5px;
    :hover {
        color: #38E8FF;
    }
`;

const ConditionalLink = styled(NavLink)`
    padding: 5px;
    :hover {
        color: #38E8FF;
    }
`;

export default Header