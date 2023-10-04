import React from 'react';
import './ContentPython.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentPython() {
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
            <div className="python-page">
                <header>
                <h1 id='python-content-title1' >Python</h1>
                </header>
                <section>
                <div id='python-content-title2' ><h2 >Python Introduction</h2></div> 
                <div style={codeBlockStyle}>
                    <SyntaxHighlighter language="html" style={darcula}>
                    {codeString}
                    </SyntaxHighlighter>
                </div>
                <p id='python-paragraph'>
                Python is the standard markup language for creating web pages. It describes the structure and content of a web page using a system of elements and tags.
                </p>
                </section>
                <section>
                    <div id='python-content-title2' ><h2 >Python Syntax</h2></div> 
                    <ul>
                        <li>python documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='python-content-title2' ><h2 >Python Selectors</h2></div> 
                    <p id='python-paragraph'>
                        python is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section >
                    <div id='python-content-title2' ><h2 >How To Add python</h2></div> 
                    <ul>
                        <li>python documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='python-content-title2' ><h2 >python Comments</h2></div> 
                    <p id='python-paragraph'>
                        python is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='python-content-title2' ><h2 >python Colors</h2></div> 
                    <ul>
                        <li>python documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='python-content-title2' ><h2 >python Backgrounds</h2></div> 
                    <p id='python-paragraph'>
                        python is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='python-content-title2' ><h2 >python Borders</h2></div> 
                    <ul>
                        <li>python documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section id="python-basics">
                    <div id='python-content-title2' ><h2 >python Margins</h2></div> 
                    <ul>
                        <li>python documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='python-content-title2' ><h2 >python Padding</h2></div> 
                    <p id='python-paragraph'>
                        python is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                
                <section id="python-basics">
                    <div id='python-content-title2' ><h2 >This is test div</h2></div> 
                    <p id='python-paragraph'>
                        python is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='python-content-title2' ><h2 >python Box Model</h2></div> 
                    <ul>
                        <li>python documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                {/* Add more sections with content as needed */}
            </div>
    </div>
    );
}

export default ContentPython;
