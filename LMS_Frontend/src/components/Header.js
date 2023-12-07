import React from 'react';
import './Header.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
function Header() {
    const [searchString,setsearchString]=useState({
        'search':''
    });
    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    const studentLoginStatus=localStorage.getItem('studentLoginStatus')

    //Change Input Value
    const handleChange=(event)=>{
        setsearchString({
            ...searchString,
            [event.target.name]:event.target.value
        });
    }
    const searchCourse=()=>{
        if (searchString.search!=''){
            window.location.href='/search/'+searchString.search
        }
        
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{fontSize: '20px',backgroundColor: '#1d3158' }}>
                <div className="container-fluid">{/* for the whole page navbar-container-fluid */}
                    <Link className="navbar-brand" to="/landing-page" style={{color:'#999' }}>NextStep : Connects Programmers Globally</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link" aria-current="page" to="/home-page">Home</Link>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown3" role="button" 
                                data-bs-toggle="dropdown" aria-expanded="false">
                                    Tutorial
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                    <li><Link className="dropdown-item" to="/html-home">Html</Link></li>
                                    <li><Link className="dropdown-item" to="/css-home">Css</Link></li>
                                    <li><Link className="dropdown-item" to="/js-home">JavaScript</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="/python-home">Python</Link></li>
                                    <li><Link className="dropdown-item" to="/c-home">C</Link></li>
                                    <li><Link className="dropdown-item" to="/cpp-home">C++</Link></li>
                                    <li><Link className="dropdown-item" to="/java-home">Java</Link></li> 
                                </ul>
                            </li>
                           
                            <Link className="nav-link" to="/all-courses">Courses</Link>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown2" role="button" 
                                data-bs-toggle="dropdown" aria-expanded="false">
                                    Teacher
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {teacherLoginStatus!='true' && 
                                        <>
                                        <li><Link className="dropdown-item" to="/teacher-login">Login</Link></li>
                                        <li><Link className="dropdown-item" to="/teacher-register">Register</Link></li>
                                        </>
                                    }
                                    {teacherLoginStatus=='true' && 
                                        <>
                                        <li><Link className="dropdown-item" to="/teacher-dashboard">Dashboard</Link></li>
                                        <li><Link className="dropdown-item" to="/teacher-logout">Logout</Link></li>
                                        </>
                                    }
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown3" role="button" 
                                data-bs-toggle="dropdown" aria-expanded="false">
                                    User
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {studentLoginStatus!='true' && 
                                        <>
                                        <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
                                        <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
                                        </>
                                    }
                                    {studentLoginStatus=='true' && 
                                        <>
                                        <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
                                        <li><Link className="dropdown-item" to="/user-logout">Logout</Link></li>
                                        </>
                                    }
                                </ul>
                            </li>
                            
                            <Link className="nav-link" to="/about-us">About Us</Link>
                            <Link className="nav-link" to="/blog-post">Blog</Link>

                            {/* searchbar */}
                            <form className="customSearchForm d-flex">
                                <input name='search' onChange={handleChange} className="form-control me-2" type="search" placeholder="Search by Course Title" aria-label="Search"/>
                                <button onClick={searchCourse} className="btn btn-srch" type="button">Search</button>
                            </form>
 
                        </div>
                    </div>
                </div>
            </nav>
        
    );
  }
  
  export default Header;
  