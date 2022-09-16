import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="logo_f">SPARK</a>

            <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#serivce">Service</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact"></a></li>
            </ul>

           <div className="copy_right">
               <small>&copy; SPARK. All right reserved</small>
           </div>


        </footer>
    )
}

export default Footer;
