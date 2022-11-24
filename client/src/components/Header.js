import styled from "styled-components"
import { NavLink } from "react-router-dom"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

const Header = () => {
    return (
        <div>
            <LoginButton/>
            <LogoutButton/>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

const Link = styled(NavLink)`
`;

export default Header