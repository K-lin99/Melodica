import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import styled from "styled-components";
import Home from "./Home";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles"
import Profile from "./Profile";


const App = () => {
    return(
        <Router>
            <GlobalStyles/>
            <Wrapper>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </Wrapper>
        </Router>
    )
}

const Wrapper = styled.div``;

export default App;