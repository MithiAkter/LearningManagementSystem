import {Link} from 'react-router-dom';
import './HtmlSidebar.css';


function HtmlSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn HTML</Link>
                <Link to="/html-basics" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Introduction</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Introduction</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Editors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Comments</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Basics</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Paragraphs</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Elements</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Tags</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Introduction</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Introduction</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Editors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Comments</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Basics</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Paragraphs</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Elements</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Tags</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Elements</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Tags</Link>
            </div>
        </div>
        
    </div>

)
}
export default HtmlSidebar;