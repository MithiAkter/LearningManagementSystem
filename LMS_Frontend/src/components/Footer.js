import './Footer.css';
function Footer() {
    return (
          <footer className="py-5 border-top mt-5">
            
                <div>
                    <h3>Top Languages</h3>
                    <li>Python</li>
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                </div>
                <div>
                    <h3>Explore</h3>
                    <li>Course Catalog</li>
                    <li>Job Opportunities</li>
                    <li>Our Instructors</li>
                    <li>Terms & Policies</li>

                </div>
                <div>
                    <h3>Key Features</h3>
                    <li>Learn Languages</li>
                    <li>Challenges</li>
                    <li>Resources</li>
                    <li>Practice</li>
                </div>
                <div>
                    <h3>Learning Resources</h3>
                    <li>Code Examples</li>
                    <li>Tutorials</li>
                    <li>Community Forums</li>
                    <li>Technical Support</li>
                </div>

            <div>
                <h3>Newsletter</h3>
                <p>Stay updated with the latest programming trends</p>
                <div className="subscribe">
                    <input type="text" placeholder="Your Email address"/>
                    <a href="#" className="yellow">SUBSCRIBE</a>

                </div>
            </div>
            <div className="copyright">
                <h5 id="copyright" style={{color: '#5f7185' }}>Copyright ©2023 All rights Reserved | This project is made by Mithi Akter</h5>
                <div className="pro-links">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
           
        </footer> 
    );
  }
  
  export default Footer;
//   <footer className="text-muted py-5 border-top mt-5">
//   <div className="container">
//       <p className="float-end mb-1">
//       <a href="#">Back to top</a>
//       </p>
//       <p className="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p>
//       <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.1/getting-started/introduction/">getting started guide</a>.</p>
//   </div>
// </footer> 