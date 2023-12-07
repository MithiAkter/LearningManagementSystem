import React from 'react';
import { Link } from 'react-router-dom';

import './CssSidebar.css';


function CssSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn CSS</Link>
                <a href="#css-introduction" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Introduction</a>
                <a href="#css-example" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Example</a>
                <a href="#test-div" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Syntax(test)</a>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Selectors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>How To Add CSS</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Comments</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Colors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Backgrounds</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Borders</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Margins</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Padding</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Text</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Fonts</Link>

                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Icons</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Links</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Lists</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>CSS Tables</Link>
            </div>
        </div>
        
    </div>

)
}
export default CssSidebar;