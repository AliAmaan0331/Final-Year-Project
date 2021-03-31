import React from 'react';
import web from "./C1.png";

import './About.css';
const About = () =>{
    return (
        <>
        <div className="mainbod">
           <header className="about">
               About
           </header>
           <main className="content">
              <p>
              <div><span className="comma">"</span>Welcome to <span className="aamdani">Aamdani.com</span>, your number one freelancing website of Pakistan.
              We're dedicated to giving you the very best of the </div> <div>services, with a focus on more earning opportunities, efficient withdrawals, customer care and uniqueness. Founded in 2021, by four undergraduate students from GIKI, </div>
              <div>Aamdani has come a long way from its beginnings in Room 102, Hostel 4, GIKI, Pakistan. When we first started out, our passion was to create more job opportunities</div>
              <div> in Pakistan, promote freelancing industry in Pakistan, promote early bird earing and also to promote startups in Pakistan.</div>
              <div>We now serve customers all over Pakistan with more efficient and easy digital transaction methods to provide ease to do freelancing.</div>
              <div>We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.<span className="comma">"</span></div>
              <div>Sincerely,</div>
              <div>Aamdani.com</div>
              </p>
           </main>
           </div>
        </>
    );
};
export default About;