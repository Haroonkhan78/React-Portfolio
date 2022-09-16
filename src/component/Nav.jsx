import React from 'react';
import {useState} from 'react';
import './nav.css';


const Nav = () => {
 
    const[navActive, setNav] = useState(" ");

    return (
         <nav>
             <a href="#" className="active" onClick={()=>setNav('#')} className={navActive === '#'? 'active': ''}>Home</a>
             <a href="#about" onClick={()=>setNav('#about')} className={navActive === '#about'? 'active': ''}>About</a>
             <a href="#experience" onClick={()=>setNav('#experience')} className={navActive === '#experience'? 'active': ''}>Experiece</a>
             <a href="#services" onClick={()=>setNav('#services')} className={navActive === '#services'? 'active': ''}>Services</a>
             <a href="#contact" onClick={()=>setNav('#contact')} className={navActive === '#contact'? 'active': ''} >Contact</a>
         </nav>
    )
}

export default Nav;
