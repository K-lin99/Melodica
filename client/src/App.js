import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles"


const App = () => {
    return(
        <Router>
            <Wrapper>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Wrapper>
        </Router>
    )
}

const Wrapper = styled.div``;

export default App;