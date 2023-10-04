import React from 'react';
import './ContentC.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentC() {
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
            <div className="c-page">
                <header>
                <h1 id='c-content-title1' >C Programming</h1>
                </header>
                <section>
                <div id='c-content-title2' ><h2 >c Introduction</h2></div> 
                <div style={codeBlockStyle}>
                    <SyntaxHighlighter language="html" style={darcula}>
                    {codeString}
                    </SyntaxHighlighter>
                </div>
                <p id='c-paragraph'>
                c is the standard markup language for creating web pages. It describes the structure and content of a web page using a system of elements and tags.
                </p>
                </section>
                <section>
                    <div id='c-content-title2' ><h2 >c Syntax</h2></div> 
                    <ul>
                        <li>c documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='c-content-title2' ><h2 >c Selectors</h2></div> 
                    <p id='c-paragraph'>
                        c is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section >
                    <div id='c-content-title2' ><h2 >How To Add c</h2></div> 
                    <ul>
                        <li>c documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='c-content-title2' ><h2 >c Comments</h2></div> 
                    <p id='c-paragraph'>
                        c is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='c-content-title2' ><h2 >c Colors</h2></div> 
                    <ul>
                        <li>c documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='c-content-title2' ><h2 >c Backgrounds</h2></div> 
                    <p id='c-paragraph'>
                        c is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='c-content-title2' ><h2 >c Borders</h2></div> 
                    <ul>
                        <li>c documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section id="c-basics">
                    <div id='c-content-title2' ><h2 >c Margins</h2></div> 
                    <ul>
                        <li>c documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='c-content-title2' ><h2 >c Padding</h2></div> 
                    <p id='c-paragraph'>
                        c is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                
                <section id="c-basics">
                    <div id='c-content-title2' ><h2 >This is test div</h2></div> 
                    <p id='c-paragraph'>
                        c is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='c-content-title2' ><h2 >c Box Model</h2></div> 
                    <ul>
                        <li>c documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                {/* Add more sections with content as needed */}
            </div>
    </div>
    );
}

export default ContentC;
