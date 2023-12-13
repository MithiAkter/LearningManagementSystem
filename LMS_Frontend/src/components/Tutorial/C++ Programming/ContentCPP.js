import React from 'react';
import './ContentCPP.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentCPP() {
  const codeString = `// Your code here
  <h1> Hello World! Good Morning! :) </h1>
  <h1> Hello World! Good Morning! :) </h1>
  <h1> Hello World! Good Morning! :) </h1>`;

  const codeBlockStyle = {
    borderRadius: '20px', // Adjust the border radius value as needed
    overflow: 'hidden', // Prevent content from overflowing the rounded corners
  };

  return (
        <div className="sidenav">
            <div className="cpp-page">
                <header>
                <h1 id='cpp-content-title1' >C++ Programming</h1>
                </header>

                <section>
                    <div id='cpp-content-title2' ><h2 >What is C++?</h2></div> 
                    <ul>
                        <li>C++ is a cross-platform language that can be used to create high-performance applications.</li>
                        <li>C++ was developed by Bjarne Stroustrup, as an extension to the C language.</li>
                        <li>C++ gives programmers a high level of control over system resources and memory.</li>
                        <li>The language was updated 4 major times in 2011, 2014, 2017, and 2020 to C++11, C++14, C++17, C++20.</li>
                        
                    </ul>
                </section>

                <section>
                    <div id='cpp-content-title2' ><h2>Why Use C++</h2></div> 
                    <ul>
                        <li>C++ is one of the world's most popular programming languages.</li>
                        <li>C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.</li>
                        <li>C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.</li>
                        <li>C++ is portable and can be used to develop applications that can be adapted to multiple platforms.</li>
                        <li>C++ is fun and easy to learn!</li>
                        <li>As C++ is close to C, C# and Java, it makes it easy for programmers to switch to C++ or vice versa.</li>
                        
                    </ul>
                </section>

                <section>
                    <div id='cpp-content-title2'><h2>Difference between C and C++</h2></div> 
                    <ul>
                        <li>C++ was developed as an extension of C, and both languages have almost the same syntax.</li>
                        <li>The main difference between C and C++ is that C++ support classes and objects, while C does not.</li>
                        
                    </ul>
                </section>

                <section>
                    <div id='cpp-content-title2'><h2>C++ Get Started</h2></div> 
                    <ul>
                        <li>C++ was developed as an extension of C, and both languages have almost the same syntax.</li>
                        <li>C++ was developed as an extension of C, and both languages have almost the same syntax.</li>
                        <li>The main difference between C and C++ is that C++ support classes and objects, while C does not.</li>
                        
                    </ul>
                </section>

                <section>
                <div id='cpp-content-title2' ><h2 >Why Use C++?</h2></div> 
                <div style={codeBlockStyle}>
                    <SyntaxHighlighter language="html" style={darcula}>
                    {codeString}
                    </SyntaxHighlighter>
                </div>
                <p id='cpp-paragraph'>
                c++ is the standard markup language for creating web pages. It describes the structure and content of a web page using a system of elements and tags.
                </p>
                </section>

                <section>
                    <div id='cpp-content-title2' ><h2 >c++ Syntax</h2></div> 
                    <ul>
                        <li>c++ documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>

                <section>
                    <div id='cpp-content-title2' ><h2 >c++ Selectors</h2></div> 
                    <p id='cpp-paragraph'>
                        c++ is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>

                <section >
                    <div id='cpp-content-title2' ><h2 >How To Add c</h2></div> 
                    <ul>
                        <li>c++ documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='cpp-content-title2' ><h2 >c++ Comments</h2></div> 
                    <p id='cpp-paragraph'>
                        c++ is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='cpp-content-title2' ><h2 >c++ Colors</h2></div> 
                    <ul>
                        <li>c++ documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='cpp-content-title2' ><h2 >c++ Backgrounds</h2></div> 
                    <p id='cpp-paragraph'>
                        c++ is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='cpp-content-title2' ><h2 >c++ Borders</h2></div> 
                    <ul>
                        <li>c++ documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='cpp-content-title2' ><h2 >c++ Margins</h2></div> 
                    <ul>
                        <li>c++ documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                <section>
                    <div id='cpp-content-title2' ><h2 >c++ Padding</h2></div> 
                    <p id='cpp-paragraph'>
                        c++ is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                
                <section id="cpp-basics">
                    <div id='cpp-content-title2' ><h2 >This is test div</h2></div> 
                    <p id='cpp-paragraph'>
                        c++ is the standard markup language for creating web pages. It
                        describes the structure and content of a web page using a system of elements and tags.
                    </p>
                </section>
                <section>
                    <div id='cpp-content-title2' ><h2 >c++ Box Model</h2></div> 
                    <ul>
                        <li>c++ documents are composed of elements.</li>
                        <li>Elements are represented by opening and closing tags.</li>
                        <li>Common elements include &lt;p&gt;, &lt;h1&gt;, &lt;a&gt;, and more.</li>
                    </ul>
                </section>
                {/* Add more sections with content as needed */}
            </div>
    </div>
    );
}

export default ContentCPP;
