import React from 'react';
// import './Header.css';
import {Link} from 'react-router-dom';
function Header() {
    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{fontSize: '18px' }}>
                <div className="container">
                    <Link className="navbar-brand" to="/landing-page">Programming Learning System</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>

                            <li className="nav-item dropdown">
                                <a style= {{fontSize: '18px'}} className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" 
                                data-bs-toggle="dropdown" aria-expanded="false">
                                    Tutorial
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/">C</Link></li>
                                    <li><Link className="dropdown-item" to="/">C++</Link></li>
                                    <li><Link className="dropdown-item" to="/">Python</Link></li>
                                    <li><Link className="dropdown-item" to="/">Java</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="/html-home">Html</Link></li>
                                    <li><Link className="dropdown-item" to="/css-home">Css</Link></li>
                                    <li><Link className="dropdown-item" to="/js-home">JavaScript</Link></li>
                                    
                                </ul>
                            </li>
                           
                            





                            {/* <Link className="nav-link" to="/contact">Accordian</Link> */}
                            <Link className="nav-link" to="/all-courses">Courses</Link>
                            <li className="nav-item dropdown">
                                <a style={{fontSize: '18px'}} className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" 
                                data-bs-toggle="dropdown" aria-expanded="false">
                                    Teacher
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {teacherLoginStatus!='true' && 
                                        <>
                                        <li><Link className="dropdown-item" to="/teacher-login">Login</Link></li>
                                        <li><Link className="dropdown-item" to="/teacher-register">Register</Link></li>
                                        </>
                                    }
                                    <li><Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
                                    <li><Link className="dropdown-item" to="/teacher-logout">Logout</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a style={{fontSize: '18px'}} className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" 
                                data-bs-toggle="dropdown" aria-expanded="false">
                                    User
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
                                    <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                                    <li><Link className="dropdown-item" to="/user-logout">Logout</Link></li>
                                </ul>
                            </li>
                            
                            <Link className="nav-link" to="/about-us">About Us</Link>
                            <Link className="nav-link" to="/blog-post">Blog</Link>
                            
                            
                        </div>
                    </div>
                </div>
            </nav>
        
    );
  }
  
  export default Header;
  