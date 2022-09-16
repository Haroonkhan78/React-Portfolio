import React from 'react';
import './port.css';
import port1 from '../images/port1.PNG';
import port2 from '../images/port2.PNG';
import port3 from '../images/port3.PNG';


const data = [
    {
        id: 1,
        image: port1,
        title: 'This is the title',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/19367715-Cloud-Kitchen-Kitchen-interface'
    },

    {
        id: 2,
        image: port2,
        title: 'Creative Design Agency Landing Page Website',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/19365923-Das-Gr-ne-Creative-Design-Agency-Landing-Page-Website'
    },

    {
        id: 3,
        image: port3,
        title: 'landing page, hero, identity, management',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/19363684-contracted-landing-page-hero-identity-management'
    },

    {
        id: 4,
        image: port3,
        title: 'Creative Design Agency Landing Page Website',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/19365923-Das-Gr-ne-Creative-Design-Agency-Landing-Page-Website'
    },

    {
        id: 5,
        image: port1,
        title: 'This is the title',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/19367715-Cloud-Kitchen-Kitchen-interface'
    },

    {
        id: 6,
        image: port2,
        title: 'Creative Design Agency Landing Page Website',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/19365923-Das-Gr-ne-Creative-Design-Agency-Landing-Page-Website'
    },
];

const Port = () => {
    return (
        <section id="portfolio">
            <h5>Reacent Work</h5>
            <h2>portfolio</h2>

           <div className="container port_container">

             {
                 data.map(({id,image,title,github,demo})=>{
                     return(
                        <article key={id} className="port_item">
                        <div className="port_img">
                            <img src={image} alt="image"></img>
                        </div>
                     <h3>{title}</h3>
                        <div className="butns">
                        <a href={github} className="btn" target="_blank">Github</a>
                        <a href={demo} className="btn btn_primary" target="_blank">Demo</a>
                        </div>
                        </article>
                     );
                    
                    
                 })
             }
               
           </div>

        </section>
    )
}

export default Port;
