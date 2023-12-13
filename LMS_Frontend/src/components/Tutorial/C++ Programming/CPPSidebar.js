import React from 'react';
import { Link } from 'react-router-dom';

import './CPPSidebar.css';


function CPPSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn C++ Programming</Link>
                <a href="#cpp-introduction" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Introduction</a>
                <a href="#cpp-use" className='list-group-item list-group-item-action list-group-item-success mt-1'>Why Use C++</a>
                <a href="#cpp-difference" className='list-group-item list-group-item-action list-group-item-success mt-1'>Difference between C and C++</a>
                <a href="#cpp-getstart" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Get Started</a>
                <a href="#cpp-syntax" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Syntax</a>
                <a href="#cpp-example" className='list-group-item list-group-item-action list-group-item-success mt-1'>Example explained</a>
                <a href="#cpp-ide" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Install IDE (Test)</a>


                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Constants</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Operators</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Booleans</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ If ... Else</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Switch</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ While Loop</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ For Loop</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Break and Continue</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Arrays</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Strings</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ User Input</Link>
            </div>
        </div>
        
    </div>

)
}
export default CPPSidebar;