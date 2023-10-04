import React from 'react';
import './ContentJava.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentJava() {
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
            <div className="java-page">
                <header>
                <h1 id='java-content-title1' >Java Programming</h1>
                </header>
                <section>
                <div id='java-content-title2' ><h2 >Java Introduction</h2></div> 
                <div style={codeBlockStyle}>
                    <SyntaxHighlighter language="html" style={darcula}>
                    {codeString}
                    </SyntaxHighlighter>
                </div>
                <p id='java-paragraph'>
                Java is the standard markup language for creating web pages. It describes the structure and content of a web page using a system of elements and tags.
                </p>
                </section>
                <section>
                    <div id='java-content-title2' ><h2 >Java Syntax</h2></div> 
                    <ul>
                        <li>Java documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='java-content-title2' ><h2 >Java Selectors</h2></div> 
                    <p id='java-paragraph'>
                        Java is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section >
                    <div id='java-content-title2' ><h2 >How To Add Java</h2></div> 
                    <ul>
                        <li>Java documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='java-content-title2' ><h2 >Java Comments</h2></div> 
                    <p id='java-paragraph'>
                        Java is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='java-content-title2' ><h2>Java Colors</h2></div> 
                    <ul>
                        <li>Java documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='java-content-title2' ><h2>Java Backgrounds</h2></div> 
                    <p id='java-paragraph'>
                        Java is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='java-content-title2' ><h2>Java Borders</h2></div> 
                    <ul>
                        <li>Java documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section id="java-basics">
                    <div id='java-content-title2' ><h2>Java Margins</h2></div> 
                    <ul>
                        <li>Java documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='java-content-title2' ><h2 >Java Padding</h2></div> 
                    <p id='java-paragraph'>
                        Java is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                
                <section id="java-basics">
                    <div id='java-content-title2' ><h2 >This is test div of Java</h2></div> 
                    <p id='java-paragraph'>
                        Java is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='java-content-title2' ><h2 >Java Box Model</h2></div> 
                    <ul>
                        <li>Java documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                {/* Add more sections with content as needed */}
            </div>
    </div>
    );
}

export default ContentJava;
