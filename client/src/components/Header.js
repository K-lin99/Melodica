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
    background-color: #222222;
    border: 1px solid #4EDEF0;
    padding: 2px;
`;


const Link = styled(NavLink)`
    padding: 5px;
    :hover {
        color: #38E8FF;
    }
`;

export default Header