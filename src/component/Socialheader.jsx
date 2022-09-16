import React from 'react';
import insta from "../images/instagram.png";
import face from "../images/facebook.png";
import linke from "../images/linkedin.png";

const Socialheader = () => {
    return (
        <div className="social_icons">
            <a href="#" target="_blank" className="text-light"><span><img src={insta} alt="insta"/></span></a>
    <a href="#" target="_blank"><span>{face}</span></a>
    <a href="#" target="_blank"><span>{linke}</span></a>
            
        </div>
    )
}

export default Socialheader;
