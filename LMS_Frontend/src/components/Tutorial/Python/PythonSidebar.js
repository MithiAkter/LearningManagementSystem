import React from 'react';
import { Link } from 'react-router-dom';

import './PythonSidebar.css';


function PythonSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn Python</Link>
                <a href="#python-basics" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python</a>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Syntax</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Selectors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Editors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>How To Add Python</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Comments</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Colors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Backgrounds</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Borders</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Margins</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Padding</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Text</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Fonts</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Icons</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Links</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Lists</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Python Tables</Link>
            </div>
        </div>
        
    </div>

)
}
export default PythonSidebar;