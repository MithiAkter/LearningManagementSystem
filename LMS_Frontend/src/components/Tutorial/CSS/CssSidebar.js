import React from 'react';
import { Link } from 'react-router-dom';

import './CssSidebar.css';


function CssSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn CSS</Link>
                <a href="#css-basics" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS</a>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Introduction</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Introduction</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Editors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Comments</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Basics</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Elements</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Tags</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Introduction</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Introduction</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Editors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Comments</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Basics</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Elements</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Tags</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Elements</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Tags</Link>
            </div>
        </div>
        
    </div>

)
}
export default CssSidebar;