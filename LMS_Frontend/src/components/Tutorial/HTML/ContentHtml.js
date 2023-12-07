
import './ContentHtml.css';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentHtml() {
    const codeString = `
    <!DOCTYPE html>
    <html>
        <head><title>Page Title</title></head>

        <body>
            <h1>My First Heading</h1>
            <p>My first paragraph.</p>
        </body>

    </html> 
    `;
  
    const codeBlockStyle = {
      borderRadius: '20px', // border radius 
      overflow: 'hidden', // Prevent content from overflowing the rounded corners
    };
  
    return (
        <div className="sidenav">
            <div className="html-page">
                <header>
                    <h1 className='html-content-title1' >HTML - HyperText Markup Language</h1>
                </header>
                <section id="html-basics">
                    <div id='html-content-title2'><h2 >HTML Introduction</h2></div>
                    <p id='html-paragraph'>
                        HTML is the standard markup language for creating Web pages.
                    </p>
                </section>
                <section>
                    <div id='html-content-title2'><h2 >What is HTML?</h2></div> 
                    <ul>
                        <li>HTML stands for Hyper Text Markup Language.</li>
                        <li>HTML is the standard markup language for creating Web pages.</li>
                        <li>HTML describes the structure of a Web page.</li>
                        <li>HTML consists of a series of elements.</li>
                        <li>HTML elements tell the browser how to display the content.</li>
                        <li>HTML elements label pieces of content such as "this is a heading", 
                            "this is a paragraph", "this is a link", etc.</li>
                    </ul>
                </section>
                <section>
                    <div id='html-content-title2'><h2 >HTML Basics</h2></div>
                    <p id='html-paragraph'>
                        <div style={codeBlockStyle}>
                            <SyntaxHighlighter language="html" style={darcula}>
                            {codeString}
                            </SyntaxHighlighter>
                        </div>
                    </p>
                </section>
                <section id="html-output">
                    <div id='html-content-title2'><h2 >Output(test-div)</h2></div>
                    <ul>
                        <h1 style={{ textAlign: 'justify',color:"black",marginTop: '20px' }}>My First Heading</h1>
                        <p>My first paragraph.</p>
                    </ul>
                </section>
                
            </div>
    </div>
    );
}

export default ContentHtml;
