import React from 'react';
import { Link } from 'react-router-dom';

import './JavaSidebar.css';


function JavaSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn Java Programming</Link>
                <a href="#java-basics" className='list-group-item list-group-item-action list-group-item-success mt-1'>C</a>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Syntax</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Selectors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Editors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>How To Add Java</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Comments</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Colors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Backgrounds</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Borders</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Margins</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Padding</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Text</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Fonts</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Icons</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Links</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Lists</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>Java Tables</Link>
            </div>
        </div>
        
    </div>

)
}
export default JavaSidebar;