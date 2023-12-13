import React from 'react';
import './ContentPython.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentPython() {
  const codeString = `>>> print("Hello, World!")
  Hello, World!`;

  const codeBlockStyle = {
    borderRadius: '15px', //border radius
    overflow: 'hidden', // Prevent content from overflowing the rounded corners
  };
  const codeString1 = `x = 5
y = "Hello, World!"`;

  const codeBlockStyle1 = {
    borderRadius: '15px', // border radius
    overflow: 'hidden', // Prevent content from overflowing the rounded corners
  };
  const codeString2 = `#This is a comment.
print("Hello, World!")`;

  const codeBlockStyle2 = {
    borderRadius: '15px', // border radius
    overflow: 'hidden', // Prevent content from overflowing the rounded corners
  };

  return (
        <div className="sidenav">
            <div className="python-page">
                <header>
                <h1 id='python-content-title1' >Python</h1>
                </header>

                <section id="python-basics">
                    <div id='python-content-title2' ><h2>What is Python?</h2></div> 
                    <p>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>
                    <p>It is used for:</p>
                    <ul>
                        <li>web development (server-side), </li>
                        <li>software development, </li>
                        <li>mathematics,</li>
                        <li>system scripting.</li>
                    </ul>
                </section>

                <section id="python-definition">
                    <div id='python-content-title2' ><h2 >What can Python do?</h2></div> 
                    <ul>
                        <li>Python can be used on a server to create web applications.</li>
                        <li>Python can be used alongside software to create workflows.</li>
                        <li>Python can connect to database systems. It can also read and modify files.</li>
                        <li>Python can be used to handle big data and perform complex mathematics.</li>
                        <li>Python can be used for rapid prototyping, or for production-ready software development.</li>
                    </ul>
                </section>

                <section id="python-syntax">
                <div id='python-content-title2' ><h2 >Python Syntax</h2></div>
                <p>Python syntax can be executed by writing directly in the Command Line:</p> 
                <div style={codeBlockStyle}>
                    <SyntaxHighlighter language="python" style={darcula}>
                    {codeString}
                    </SyntaxHighlighter>
                </div>
                </section>

                <section id="python-variables">
                    <div id='python-content-title2' ><h2 >Python Variables</h2></div>
                    <p>In Python, variables are created when you assign a value to it: </p>
                    <h2>Example:</h2>
                    <p>Variables in Python:</p>
                    <div style={codeBlockStyle1}>
                        <SyntaxHighlighter language="python" style={darcula}>
                        {codeString1}
                        </SyntaxHighlighter>
                    </div>
                    <p>Python has no command for declaring a variable.</p>
                </section>
                
                <section id="python-comments">
                    <div id='python-content-title2' ><h2 >Python Comments</h2></div> 
                    <p id='python-paragraph'>
                        Python has commenting capability for the purpose of in-code documentation.
                    </p>
                    <div style={codeBlockStyle2}>
                        <SyntaxHighlighter language="python" style={darcula}>
                        {codeString2}
                        </SyntaxHighlighter>
                    </div>
                </section>
                
                <section id="test">
                    <div id='python-content-title2' ><h2 >Good to know</h2></div> 
                    <ul>
                        <li>The most recent major version of Python is Python 3, which we shall be using in this tutorial. However, 
                            Python 2, although not being updated with anything other than security updates, is still quite popular.</li>
                        <li>It is possible to write Python in an Integrated Development Environment, such as Thonny, Pycharm, 
                            Netbeans or Eclipse which are particularly useful when managing larger collections of Python files.</li>
                        
                    </ul>
                </section>
                
            </div>
    </div>
    );
}

export default ContentPython;
