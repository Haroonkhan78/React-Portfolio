import React from 'react';
import './service.css';

const Service = () => {
    return (
       <section id="services">
           
           <h5>What I offer</h5>
           <h2>Services</h2>

           <div className="container service_container">
               <article className="service">
                   <div className='head'>
                       <h3>UI/UX</h3>
                   </div>

                   <ul className="service_list">
                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>

                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>

                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>

                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>

                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>

                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>
                   </ul>

               </article>

                {/* web development section*/}
                <article className="service">
                   <div className='head'>
                       <h3>Web development</h3>
                   </div>

                   <ul className="service_list">
                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>

                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>

                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>

                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>

                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>

                     <li>
                      <i className="fas fa-check" ></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </li>
                   </ul>
                   
               </article>
           </div>

       </section>
    )
}

export default Service
