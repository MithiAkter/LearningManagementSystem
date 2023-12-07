import {Link} from 'react-router-dom';
import './HtmlSidebar.css';


function HtmlSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn HTML</Link>
                <a href="#html-basics" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Introduction</a>
                <a href="#html-output" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Output(test)</a>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Editors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Basics</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Elements</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Elements</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Attributes</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Headings</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Paragraphs</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Styles</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Formatting</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Quotations</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Colors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Styles - CSS</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Links</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Images</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Favicon</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Page Title</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Tables</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>HTML Lists</Link>
            </div>
        </div>
        
    </div>

)
}
export default HtmlSidebar;