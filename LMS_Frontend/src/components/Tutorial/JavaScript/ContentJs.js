
import './ContentJs.css';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentJs() {
    const codeString = `document.getElementById("demo").innerHTML = "Hello JavaScript";`;
  
    const codeBlockStyle = {
      borderRadius: '15px', // border radius 
      overflow: 'hidden', // Prevent content from overflowing the rounded corners
    };
    return (
        <div className="sidenav">
            <div className="js-page">
                <header>
                    <h1 className='js-content-title1' >JavaScript</h1>
                </header>
                <section id='js-introduction'>
                    <div id='js-content-title2'><h2 >Js Introduction</h2></div>
                    <ul>
                        <li> JavaScript is the world's most popular programming language.</li>
                        <li>JavaScript is the programming language of the Web.</li>
                        <li>JavaScript is easy to learn.</li>
                    </ul>
                    
                </section>
                <section id='js-example'>
                    <div id='js-content-title2'><h2 >Js Example</h2></div> 
                    <ul>
                        <li>JavaScript Can Change HTML Content</li>
                        <li>One of many JavaScript HTML methods is getElementById().</li>
                    </ul>
                    <p>The example below "finds" an HTML element (with id="demo"), 
                        and changes the element content (innerHTML) to "Hello JavaScript":
                    </p>
                    <p id='html-paragraph'>
                        <div style={codeBlockStyle}>
                            <SyntaxHighlighter language="js" style={darcula}>
                            {codeString}
                            </SyntaxHighlighter>
                        </div>
                    </p>
                </section>
                
                <section id='js-output'>
                    <div id='js-content-title2'><h2 >JavaScript Output</h2></div>
                    <p>JavaScript Display Possibilities</p>
                    <p>JavaScript can "display" data in different ways:</p>
                    <ul>
                        <li>Writing into an HTML element, using innerHTML.</li>
                        <li>Writing into the HTML output using document.write().</li>
                        <li>Writing into an alert box, using window.alert().</li>
                        <li>Writing into the browser console, using console.log().</li>
                    </ul>
                </section>

                <section id='js-comment'>
                    <div id='js-content-title2'><h2 >JavaScript Comments</h2></div>
                    <p>JavaScript comments can be used to explain JavaScript code, and to make it more readable.</p>
                    <p>JavaScript comments can also be used to prevent execution, when testing alternative code.</p>
                </section>

                <section id="js-test">
                    <div id='js-content-title2'><h2 >Js Test div</h2></div>
                    <ul>
                        <li>JavaScript and Java are completely different languages, both in concept and design.</li>
                        <li>JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.</li>
                        <li>ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.</li>
                    </ul>
                </section>
            </div>
    </div>
    );
}

export default ContentJs;
