import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './LearnMore.css';
function LearnMore() {



  // title
  useEffect(()=>{
    document.title='Learn More';
});
  return (
    <section id='sectionn'>
      <div className="image"></div>

      <div className="con-tent">
        <h2 className='mid-text'>Learn More..</h2>
        <span></span>

        <ul className='learn-moretext' >
             Welcome to our programming learning platform!
             We are dedicated to helping you become a proficient programmer. 
             Whether you're a beginner or an experienced coder, our platform is 
             designed to elevate your programming skills.

        </ul>
        

        <p><strong>What We Offer</strong></p>

        <ul>
        <li className='learn-moretext' ><strong>Comprehensive Tutorials:</strong> Access easy-to-follow tutorials covering a variety of programming languages, from Python and JavaScript to Java and C++.</li>
        
        <li className='learn-moretext'><strong>Community Support:</strong> Join our active programming community to ask questions, share knowledge, and collaborate with fellow learners.</li>
        
        <li className='learn-moretext'><strong>Stay Updated:</strong> Stay current with the latest programming trends and technologies through our regularly updated content.</li>
        </ul>

        <p><strong>Why Choose Us</strong></p>

        <ul>
        <li className='learn-moretext'><strong>Expert Instructors:</strong> Learn from industry experts with years of experience who are passionate about teaching.</li>
        
        <li className='learn-moretext'><strong>Flexible Learning:</strong> Study at your own pace, fitting your learning into your schedule.</li>
        
        <li className='learn-moretext'><strong>Interactive Practice:</strong> Engage with coding challenges and quizzes to reinforce your knowledge.</li>
        </ul>

        <p><strong>Connect With Us</strong></p>

        <ul className='learn-moretext'>If you have any questions or need assistance, feel free to reach out 
            to our support team. We're here to help you succeed.</ul>
        {/* <ul className="links">
          <li>
            <a href="#">work</a>
          </li>

          <div className="vertical-line"></div>

          <li>
            <a href="#">service</a>
          </li>

          <div className="vertical-line"></div>

          <li>
            <a href="#">contact</a>
          </li>
        </ul> */}

        <ul className="icons">
                <li>
                <a href="https://www.facebook.com">
                    <i className="icon-facebook"><FaFacebook /></i>
                </a>
                </li>
                <li>
                <a href="https://www.twitter.com">
                    <i className="icon-twitter"><FaTwitter /></i>
                </a>
                </li>
                <li>
                <a href="https://www.github.com">
                    <i className="icon-github"><FaGithub /></i>
                </a>
                </li>
                <li>
                <a href="https://www.pinterest.com">
                    <i className="icon-pinterest"><FaPinterest /></i>
                </a>
                </li>
      </ul>
      </div>
    </section>
  );
}

export default LearnMore;
