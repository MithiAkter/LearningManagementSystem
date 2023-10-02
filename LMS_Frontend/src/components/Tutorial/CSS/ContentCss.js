import React from 'react';
import './ContentCss.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentCss() {
  const codeString = `// Your code here
  <h1> Hello World! Good Morning! :) </h1>
  <h1> Hello World! Good Morning! :) </h1>
  <h1> Hello World! Good Morning! :) </h1>`;

  const codeBlockStyle = {
    borderRadius: '35px', // Adjust the border radius value as needed
    overflow: 'hidden', // Prevent content from overflowing the rounded corners
  };

  return (
        <div className="sidenav">
            <div className="css-page">
                <header>
                <h1 id='css-content-title1' >Css - Cascading Style Sheets</h1>
                </header>
                <section>
                <div id='css-content-title2' ><h2 >CSS Introduction</h2></div> 
                <div style={codeBlockStyle}>
                    <SyntaxHighlighter language="html" style={darcula}>
                    {codeString}
                    </SyntaxHighlighter>
                </div>
                <p id='css-paragraph'>
                    Css is the standard markup language for creating web pages. It describes the structure and content of a web page using a system of elements and tags.
                </p>
                </section>
                <section>
                    <div id='css-content-title2' ><h2 >CSS Syntax</h2></div> 
                    <ul>
                        <li>Css documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='css-content-title2' ><h2 >CSS Selectors</h2></div> 
                    <p id='css-paragraph'>
                        Css is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section >
                    <div id='css-content-title2' ><h2 >How To Add CSS</h2></div> 
                    <ul>
                        <li>Css documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='css-content-title2' ><h2 >CSS Comments</h2></div> 
                    <p id='css-paragraph'>
                        Css is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='css-content-title2' ><h2 >CSS Colors</h2></div> 
                    <ul>
                        <li>Css documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='css-content-title2' ><h2 >CSS Backgrounds</h2></div> 
                    <p id='css-paragraph'>
                        Css is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='css-content-title2' ><h2 >CSS Borders</h2></div> 
                    <ul>
                        <li>Css documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section id="html-basics">
                    <div id='css-content-title2' ><h2 >CSS Margins</h2></div> 
                    <ul>
                        <li>Css documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='css-content-title2' ><h2 >CSS Padding</h2></div> 
                    <p id='css-paragraph'>
                        Css is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                
                <section id="css-basics">
                    <div id='css-content-title2' ><h2 >This is test div</h2></div> 
                    <p id='css-paragraph'>
                        Css is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='css-content-title2' ><h2 >CSS Box Model</h2></div> 
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
