import React from 'react';
import { Link } from 'react-router-dom';

import './CPPSidebar.css';


function CPPSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn C++ Programming</Link>
                <a href="#cpp-basics" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Introduction</a>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Syntax</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Output (Print Text)</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Comments</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Variables</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C++ Data Types</Link>

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