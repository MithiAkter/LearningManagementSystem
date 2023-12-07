import {Link} from 'react-router-dom';
import './JsSidebar.css';


function JsSidebar(){
    return(
    <div className="card">
        
        <div className="sidenav list-group list-group-flush">
                <div className="custom-scrollbar">
                <Link to="/" className='list-group-item list-group-item-action list-group-item-dark text-center' style={{ fontWeight: 'bold' }}>Learn JavaScript</Link>
                <a href="#js-introduction" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Introduction</a>
                <a href="#js-example" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Example</a>
                <a href="#js-output" className='list-group-item list-group-item-action list-group-item-success mt-1'>JavaScript Output</a>
                <a href="#js-comment" className='list-group-item list-group-item-action list-group-item-success mt-1'>JavaScript Comments</a>
                <a href="#js-test" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Elements(test)</a>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Attributes</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Headings</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Paragraphs</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Styles</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Formatting</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Quotations</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Colors</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Styles - CSS</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Links</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Images</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Favicon</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Page Title</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Tables</Link>
                <Link to="/" className='list-group-item list-group-item-action list-group-item-success mt-1'>JS Lists</Link>
            </div>
        </div>
        
    </div>

)
}
export default JsSidebar;