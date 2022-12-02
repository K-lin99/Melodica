import {useEffect, useState} from 'react';
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Header = () => {

    return (
        <Wrapper>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to ="/playlists">Playlists</Link>
            {/* {!token ?
                    <a href={`${REACT_APP_AUTH_ENDPOINT}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=${REACT_APP_RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>} */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #2E2E2E;
`;


const Link = styled(NavLink)`
`;

export default Header