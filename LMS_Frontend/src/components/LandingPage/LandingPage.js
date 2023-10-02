import React from 'react';
import {useRef} from 'react';
import {Link} from 'react-router-dom';

import './FaQ_question.css';
import './animation.css'; //  CSS file
import './features.css'; // CSS file
import './global.css'; // CSS file
import './hoMe.css'; // CSS file
import './services.css'; // CSS file
import './contact_us.css'; // CSS file

import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaJava } from 'react-icons/fa';


function LandingPage(){

  // contact-us 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qy64z95', 'template_5apeh6m', form.current, '8I_xO_gChaqRasE-D')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  // contact-us end

  // form reset
  const handleReset = () => {
    form.current.reset();
  };
 // form reset end
  return(
      <div>
         {/* Home Starts */}
        <section id="home">
            <div  id='home-title'><h2 id="animated-text">Learn Programming, Grow your knowledge</h2></div>
            <p id="slide-up">"Welcome to the world of programming!
            It's a superpower that lets you change the way we live, transport us to other worlds & connect people across the globe.
            Get ready to explore the exciting journey of turning your ideas into digital reality through the magic of code."</p>

            <div id="slide-up" className="btn">
              <Link className="blue" to="/learn-more">
                Learn More
              </Link>
              <a className="yellow" href="/">
                Visit Courses
              </a>
            </div>
        </section>
        {/* Home ends */}


        {/* features starts */}
        <section id="features">
          <h1 className='feature-title' id="animated-text" >Our Features</h1>
          <p>Explore a World of Knowledge,  dive into the art of programming and gain the skills to turn your ideas into 
            reality where creativity meets technology, and you become the master of your digital universe.</p>
          <div className="fea-base">
            <div className="fea-box">
              <FontAwesomeIcon icon={faStar} />
              <h3>Learn With Content</h3>
              <p>Our platform, offers an array of text-based materials, including insightful articles, 
                comprehensive documents, and downloadable PDFs. Join us as we delve deep into the world 
                of textual content,fostering a community of lifelong learners dedicated to expanding their horizons</p>
            </div>
            <div className="fea-box">
              <FontAwesomeIcon icon={faStar} />
              <h3>Learn with Online Course</h3>
              <p>Dive into engaging audio and video lessons, explore interactive content, 
                and access a treasure trove of learning materials, including downloadable PDFs. 
                Our platform is your gateway to a dynamic educational experience, offering flexibility, 
                accessibility,and a wide array of resources to support your learning journey.</p>
            </div>
            <div className="fea-box">
              <FontAwesomeIcon icon={faStar} />
              <h3>Learn With Test</h3>
              <p>Elevate your learning through comprehensive assessments and tests. 
                Our platform provides you with a robust testing environment, 
                where you can evaluate your knowledge, track your progress, 
                and gain insights into your strengths and areas for improvement.</p>
            </div>
          </div>
        </section>
      {/* features ends */}

        {/* Services starts*/}
        <section id="services">
        <div className="service-container">
            <h1 className='services-title' id="animated-text" >Our Services</h1>
                <div className="custom-card-container">

                <div className="custom-card">
                    <FaJava className="icon java" />
                    <h3>Java</h3>
                    <p>Develop Android apps and enterprise-level solutions with structured Java courses, exercises, and expert guidance.</p>


                  </div>

                <div className="custom-card">
                    <FaHtml5 className="icon html5" />
                    <h3>HTML5</h3>
                    <p>Master web structure with structured tutorials, exercises, and community support.</p>


                  </div>

                  <div className="custom-card">
                    <FaCss3 className="icon css3" />
                    <h3>CSS3</h3>
                    <p>Create captivating web designs through in-depth guides, practical exercises, and responsive design tutorials.</p>


                  </div>

                  <div className="custom-card">
                    <FaJs className="icon js" />
                    <h3>JavaScript</h3>
                    <p>Enhance web interactivity with JavaScript courses, coding exercises, and exercises into DOM manipulation and API integration.</p>


                  </div>

                  <div className="custom-card">
                    <FaReact className="icon react" />
                    <h3>React</h3>
                    <p>Build dynamic web applications and UI components with comprehensive React tutorials, exercises, and a vibrant React community.</p>


                  </div>

                  <div className="custom-card">
                    <FaPython className="icon python" />
                    <h3>Python</h3>
                    <p>Explore Python's versatility with comprehensive courses, coding challenges, and a supportive learning community.</p>


                  </div>
                </div>
              </div>
        </section>
        {/* Service End */}

          {/* Contact Us starts*/}
          <section id='contact-us' >
          <div className="contai-ner">
          <h1 className='contact-title' id="animated-text" >Contact With Us</h1>
              <div className="content">
                <div className="left-side">
                  <div className="address details">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="topic">Address</div>
                    <div className="text-one">Naraynganj Sadar,</div>
                    <div className="text-two">Naraynganj 1400</div>
                  </div>
                  <div className="phone details">
                    <i className="fas fa-phone-alt"></i>
                    <div className="topic">Phone</div>
                    <div className="text-one">01881490188</div>
                    {/* <div className="text-two">01*********8</div> */}
                  </div>
                  <div className="email details">
                    <i className="fas fa-envelope"></i>
                    <div className="topic">Email</div>
                    <div className="text-one">mithilakona@gmail.com</div>
                    <div className="text-two">mithiakter.19100004@gmail.com</div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="topic-text">Send us a message</div>
                  <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="input-box">
                    <input type="text" name="from_name" placeholder="Enter your name"/>
                  </div>
                  <div className="input-box">
                    <input type="email" name="from_name" placeholder="Enter your email"/>
                  </div>
                  <div className="input-box message-box">
                  <textarea placeholder='Send us a message' name="message" id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className="button">
                    <input type="submit" value="Send" />
                    <input type="reset" value="Reset" onClick={handleReset} />
                  </div>
                </form>
              </div>
              </div>
            </div>
          </section>
          {/* Contact Us end */}

          {/* fAQ Starts*/}
            <section id='FaQ-accordian' >
           
            <div className="accordion">
            <h1 className='accordion-title' id="animated-text" >Frequently Asked Question</h1>
                    {/* ITEM-1 */}
                    <div className="accordion-item">
                      <input type="checkbox" id="item-1" />
                      <label for="item-1" className="accordion-header">
                        <span className='item-span'>Question: What's the best programming language for beginners?</span>
                        <span className="arrow">
                          <i className="fa-solid fa-caret-right"></i>
                        </span>
                      </label>
                      <div className="accordion-content">
                        <p>
                        Answer: Python is an excellent choice for beginners 
                        due to its simplicity and readability.
                        </p>
                      </div>
                    </div>

                    {/* ITEM-1 */}
                    <div className="accordion-item">
                      <input type="checkbox" id="item-2" />
                      <label for="item-2" class="accordion-header">
                        <span className='item-span'>Question: How do I stay motivated when learning to code?</span>
                        <span className="arrow">
                          <i className="fa-solid fa-caret-right"></i>
                        </span>
                      </label>
                      <div className="accordion-content">
                        <p>
                        Answer: Set goals, build projects, 
                        and engage with a programming community to stay motivated.
                        </p>
                      </div>
                    </div>

                    {/* ITEM-1 */}
                    <div className="accordion-item">
                      <input type="checkbox" id="item-3" />
                      <label for="item-3" className="accordion-header">
                        <span className='item-span'>Question: Where can I find online programming courses?</span>
                        <span className="arrow">
                          <i className="fa-solid fa-caret-right"></i>
                        </span>
                      </label>
                      <div className="accordion-content">
                        <p>
                        Answer: You can explore a variety of online programming courses, 
                        including those offered on our website.
                         Check out our platform for a wide range of coding tutorials and resources 
                         to enhance your programming skills.
                        </p>
                      </div>
                    </div>
                  </div>
            </section>
          {/* fAQ ends*/}
    </div>   
    );
  }
export default LandingPage;
