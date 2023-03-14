import React from "react";

import "./NavBar.css"
import { NavLink } from "react-router-dom";

// const pages = ['News', 'About', 'Sponser', 'Contact', 'Donate'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




const NavBar = () => {

    return(
<div className="navbar">
        








           


                        <h1><a href="/"> Kalaam</a></h1>
                
                        <ul>
                            <li><NavLink exact to="/news">News</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/sponser">Sponser</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/donate">Donate</NavLink></li>
                        </ul>

                    
        </div>
    )
}
export default NavBar;