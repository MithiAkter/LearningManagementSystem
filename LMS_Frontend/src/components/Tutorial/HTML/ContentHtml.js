
import './ContentHtml.css';
import React, { useState } from 'react';

function ContentHtml() {
    return (
        <div className="sidenav">
            <div className="html-page">
                <header>
                    <h1>HTML - HyperText Markup Language</h1>
                </header>
                <section>
                    <h2>Introduction to HTML</h2>
                    <p>
                        HTML (HyperText Markup Language) is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <h2>HTML Basics</h2>
                    <ul>
                        <li>HTML documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <h2>Introduction to HTML</h2>
                    <p>
                        HTML (HyperText Markup Language) is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section id="html-basics">
                    <h2>HTML Basics</h2>
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
