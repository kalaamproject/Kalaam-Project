import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { HashRouter, Routes, Route } from "react-router-dom";
import News from "../../components/News/News";
import About from "../../components/About/About";
import Sponser from "../../components/Sponser/Sponser";
import Contact from "../../components/Contact/Contact";
import Donate from "../../components/Donate/Donate";

const Main = () => {
    return(
        <div>
            <HashRouter>

                <NavBar></NavBar>
                <div className="content"></div>
                    <Routes>
                        <Route exact path="/" element={<News/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/sponser" element={<Sponser/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/donate" element={<Donate/>}/>
                    </Routes>
                <h1>Main</h1>
                {/* <Background /> */}
            </HashRouter>
        </div>
    )
}

export default Main;