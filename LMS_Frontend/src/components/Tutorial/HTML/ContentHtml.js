
import './ContentHtml.css';
import React, { useState } from 'react';

function ContentHtml() {
    return (
        <div className="sidenav">
            <div className="html-page">
                <header>
                    <h1 id='html-content-title1' >HTML - HyperText Markup Language</h1>
                </header>
                <section>
                    <div id='html-content-title2'><h2 >Html Basics</h2></div>
                    <p id='html-paragraph'>
                        HTML (HyperText Markup Language) is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='html-content-title2'><h2 >Html Basics</h2></div> 
                    <ul>
                        <li>HTML documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='html-content-title2'><h2 >Html Basics</h2></div>
                    <p id='html-paragraph'>
                        HTML (HyperText Markup Language) is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section id="html-basics">
                    <div id='html-content-title2'><h2 >Test div</h2></div>
                    <ul>
                        <li>HTML documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                {/* Add more sections with content as needed */}
            </div>
    </div>
    );
}

export default ContentHtml;
