import React from "react";
import backgroundImage from "../../image/backgroundImage.png";
import "./Background.css";

console.log(backgroundImage)

const Background = () => {
    return (
        <div className="backgroundContainer">
            <img className="backgroundImage" src={backgroundImage} alt="afghan child" />
        </div>
    )
}

export default Background;