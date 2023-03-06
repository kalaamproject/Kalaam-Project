import React from "react";
import backgroundImage from "../../image/backgroundImage.png";

console.log(backgroundImage)

const Background = () => {
    return (
    <img className="backgroundImage" src={backgroundImage} alt="afghan child" />
    )
}

export default Background;