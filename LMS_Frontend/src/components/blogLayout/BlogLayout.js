import React from 'react';
import { Link } from 'react-router-dom';
import './blogLayout.css';
function BlogLayout() {
  return ( 
  <div className="sidenav">
        <div class="row">
            
                <div className='blog_header'>Our Blogs</div>
            
          <div class="left-column">
            <div class="car_d">
            <h2 className='first-header'>DevOps Best Practices</h2>
            <h5  className='second-header' >Streamline Your Development Pipeline, Nov 22, 2023</h5>
            <a href="#DevOps"><img src="blog/blog1.jpg" alt="blog1"/></a>
            <p className='para'>Some text..</p>
            <p className='para' >Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco. <a href="#DevOps">Learn More..</a> </p>
            </div>
            <div class="car_d">
            <h2 className='first-header'>Web Security Essentials</h2>
            <h5 className='second-header'>Protecting Your Online Projects, Nov 22, 2023</h5>
            <Link to="/blog-post"><img src="blog/blog2.jpg" alt="blog2"/></Link>
            <p className='para'>Some text..</p>
            <p className='para'>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco. <Link to="/blog-post">Learn More..</Link> </p>
            </div>
          </div>

          <div class="right-column">
            <div class="car_d">
              <h2 className='first-header'>The Art of Debugging</h2>
              <Link to="/blog-post"><img src="blog/blog3.jpg" alt="blog1"/></Link>
              <p className='para'>Solving Common Programming Issues..</p>
            </div>
            <div class="car_d">
              <h3 className='second-header'>Popular Post</h3>
              <Link to="/blog-post"><img src="blog/blog4.jpg" alt="popular"/></Link>
              <Link to="/blog-post"><img src="blog/blog5.jpg" alt="popular"/></Link>
              <Link to="/blog-post"><img src="blog/blog6.jpg" alt="popular"/></Link>

            </div>
            <div class="car_d">
            <Link to="/blog-post" className="link-style"><h3 id='follow' >Follow Me</h3>
            </Link>
            
              <p className='para'>Building a Career in Tech: Tips for Aspiring Developers!...</p>
            </div>
          </div>
        </div>
    </div>
   );
}

export default BlogLayout;