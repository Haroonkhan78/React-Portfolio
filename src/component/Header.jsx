import React from 'react';
import Btnheader from './Btnheader';
import './header.css';
import  imge from "../images/pic9.png"


const Header = () => {
    return (
        <>
              
              <header>
                  
                  <div className="container header_container">
                      <h5>Hello I am</h5>
                      <h1>Julia Rash</h1>
                      <h5 className="text-light">Front-end Developer</h5>
                      <Btnheader/>

                      <div className="main">
                          <img src={imge} alt="image" />
                      </div>

                      <a href="#contact"  className="scroll_down">Scroll Down</a>

             

                  </div>

              </header>

        </>
         )
}

export default Header;
