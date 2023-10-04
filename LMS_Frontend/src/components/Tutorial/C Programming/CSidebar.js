import React from 'react';
import { Link } from 'react-router-dom';

import './CSidebar.css';


function CSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn C Programming</Link>
                <a href="#c-basics" className='list-group-item list-group-item-action list-group-item-success mt-1'>C</a>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Syntax</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Selectors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Editors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>How To Add C</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Comments</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Colors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Backgrounds</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Borders</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Margins</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Padding</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Text</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Fonts</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Icons</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Links</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Lists</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>C Tables</Link>
            </div>
        </div>
        
    </div>

)
}
export default CSidebar;