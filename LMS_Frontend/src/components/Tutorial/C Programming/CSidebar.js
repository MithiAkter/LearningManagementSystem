import React from 'react';
import { Link } from 'react-router-dom';

import './CSidebar.css';


function CSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn C Programming</Link>
                <a href="#c-basics" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Introduction</a>
                <a href="#learn-c" className='list-group-item list-group-item-action list-group-item-success mt-1'>Why Learn C?</a>
                <a href="#c-difference" className='list-group-item list-group-item-action list-group-item-success mt-1'>Difference between C and C++</a>
                <a href="#c-syntax" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Syntax</a>
                <a href="#c-exaple-explanation" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Example explained</a>
                <a href="#c-ide" className='list-group-item list-group-item-action list-group-item-success mt-1'>C IDE(Test)</a>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Constants</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Operators</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Booleans</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C If ... Else</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Switch</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C While Loop</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C For Loop</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Break and Continue</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Arrays</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Strings</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C User Input</Link>
            </div>
        </div>
        
    </div>

)
}
export default CSidebar;