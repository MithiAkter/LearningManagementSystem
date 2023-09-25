
import './ContentCss.css';
import React, { useState } from 'react';

function ContentCss() {
    return (
        <div className="sidenav">
            <div className="css-page">
                <header>
                    <h1>Css - Cascading Style Sheets</h1>
                </header>
                <section>
                    <h2>Introduction to Css</h2>
                    <p>
                        Css is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <h2>Css Basics</h2>
                    <ul>
                        <li>Css documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <h2>Introduction to Css</h2>
                    <p>
                        Css is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section id="html-basics">
                    <h2>Css Basics</h2>
                    <ul>
                        <li>Css documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                {/* Add more sections with content as needed */}
            </div>
    </div>
    );
}

export default ContentCss;
