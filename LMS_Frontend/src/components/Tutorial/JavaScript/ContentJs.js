
import './ContentJs.css';
import React, { useState } from 'react';

function ContentJs() {
    return (
        <div className="sidenav">
            <div className="js-page">
                <header>
                    <h1 className='js-content-title1' >JavaScript</h1>
                </header>
                <section>
                    <div id='js-content-title2'><h2 >Js Introduction</h2></div>
                    <p id='js-paragraph'>
                        Js is the standard language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='js-content-title2'><h2 >Js Editors</h2></div> 
                    <ul>
                        <li>Js documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='js-content-title2'><h2 >js Basics</h2></div>
                    <p id='js-paragraph'>
                        Js is the standard language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section id="js-basics">
                    <div id='js-content-title2'><h2 >Js Test div</h2></div>
                    <ul>
                        <li>Js is the standard language for creating web pages. documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                {/* Add more sections with content as needed */}
            </div>
    </div>
    );
}

export default ContentJs;
