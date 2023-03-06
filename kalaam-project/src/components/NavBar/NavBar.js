import React from "react";
import { NavLink } from "react-router-dom";




const NavBar = () => {
    return(
        <div className="navbar">
            <h1>Kalaam</h1>
            <ul>
                <li><NavLink exact to="/">News</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/sponser">Sponser</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/donate">Donate</NavLink></li>
            </ul>

        </div>
    )
}


export default NavBar;