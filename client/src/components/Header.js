import {useEffect, useState} from 'react';
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Header = () => {
    // const [token, setToken] = useState("")
    // const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI, REACT_APP_AUTH_ENDPOINT, REACT_APP_RESPONSE_TYPE } = process.env
    // console.log(REACT_APP_AUTH_ENDPOINT);

    // const logout = () => {
    //     setToken("")
    //     window.localStorage.removeItem("token")
    // }

    // useEffect(() => {
    //     // getting API access Token
    //     let authParameters = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded"
    //         },
    //         body: "grant_type=client_credentials&client_id=" + REACT_APP_CLIENT_ID + "&client_secret=" + REACT_APP_CLIENT_SECRET
    //     }
    //     fetch("https://accounts.spotify.com/api/token", authParameters)
    //         .then(res => res.json())
    //         .then(data => setToken(data.access_token))
    //         .catch(err => console.log(err))
    // }, [])

    // console.log(token);

    return (
        <Wrapper>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
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