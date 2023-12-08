import React from 'react';
import { Link } from 'react-router-dom';

import './PythonSidebar.css';


function PythonSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn Python</Link>
                <a href="#python-basics" className='list-group-item list-group-item-action list-group-item-success mt-1'>What is Python?</a>
                <a href="#python-definition" className='list-group-item list-group-item-action list-group-item-success mt-1'>What can Python do?</a>
                <a href="#python-syntax" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Syntax</a>
                <a href="#python-variables" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Variables</a>
                <a href="#python-comments" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Comments</a>
                <a href="#test" className='list-group-item list-group-item-action list-group-item-success mt-1'>Good to know(Test)</a>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Constants</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Operators</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Booleans</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python If ... Else</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Switch</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python While Loop</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python For Loop</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Break and Continue</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Arrays</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Strings</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python User Input</Link>
            </div>
        </div>
        
    </div>

)
}
export default PythonSidebar;