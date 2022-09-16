import React from 'react';
import Header from './component/Header';
import Nav from './component/Nav';
import About from './component/About';
import Exp from './component/Exp';
import Service from './component/Service'
import Port from './component/Port';
import Contact from './component/Contact';
import Footer from './component/Footer';


const App = () => {
    return (
           <>
             <Header/>
             <Nav/>
             <About/>
             <Exp/>
             <Service/>
             <Port/>
             <Contact/>
             <Footer/>
           </>
    )
}

export default App;
