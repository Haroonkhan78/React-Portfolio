import React from 'react';
import './about.css';
import aimg from '../images/test7.jpg';

const About = () => {
    return (
         <section id="about">

             <h5>To Know</h5>
             <h2>About Me</h2>

             <div className="container about_container">
                 <div className="about_me">
                     <div className="about_img">
                         <img src={aimg} alt="aboutimg"/>
                     </div>
                 </div>


                <div className="content">
                    <div className="about-cards">

                      <article className="about_card">
                          <h5>Experience</h5>
                          <small>1+ years working</small>
                      </article>

                      <article className="about_card">
                          <h5>Clients</h5>
                          <small>100+ Worldwide</small>
                      </article>

                      <article className="about_card">
                          <h5>Projects</h5>
                          <small>30+ Completed</small>
                      </article>

                    </div>

                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi minus facere adipisci eos officia deserunt accusamus odit unde corporis?
                       Recusandae laboriosam dicta ea non, maxime corrupti hic reprehenderit nobis consequuntur?</p>

                       <a href="#contact" className="btn">Let's Talk</a>

                </div>

             </div>

         </section>
    )
}

export default About;
