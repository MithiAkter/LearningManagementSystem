import React from 'react';
import './AboutUs.css';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
function AboutUs(){
    
  // title
  useEffect(()=>{
    document.title='About Us';
});
    return(
        <div className="wrapper">

        <div className="background-container">
            <div className="bg-1"></div>
            <div className="bg-2"></div>
    
        </div>
        <div className="about-container">
            
            <div className="image-container">
                <img src="a.png" alt="about"/>
                
            </div>

            <div className="text-container">
                <h1>About us</h1>
                <p style={{ textAlign: 'justify', fontStyle: 'italic', color:'rgb(35,35,85)'}}>Whether you want to learn or to share what you know, you’ve come to the right place.
                    As a global destination for online learning, 
                    we empower organizations and individuals with flexible and effective skill development. 
                </p>
                <p style={{ textAlign: 'justify', fontStyle: 'italic'}}>Our mission is simple: To provide a dynamic platform for learning 
                    and mastering programming languages and technologies.<br />We believe that 
                    coding is more than lines of text; it's a gateway to creativity, 
                    problem-solving, 
                    and innovation. Our goal is to foster a community of lifelong 
                    learners who are not just fluent in code but can use it to bring 
                    their ideas to life.
                </p>
                <Link to="/learn-more">Learn More</Link>
            </div>
            
        </div>
    </div>
    
    )
}
export default AboutUs;



