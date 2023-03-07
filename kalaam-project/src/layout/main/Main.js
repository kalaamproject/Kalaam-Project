import React from "react";
import NavBar from "../NavBar";
import { HashRouter, Routes, Route } from "react-router-dom";
import News from "../../pages/News";
import About from "../../pages/About";
import Sponser from "../../pages/Sponser";
import Contact from "../../pages/Contact";
import Donate from "../../pages/Donate";

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