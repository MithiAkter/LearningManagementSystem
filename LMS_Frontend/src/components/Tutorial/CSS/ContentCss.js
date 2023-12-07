import React from 'react';
import './ContentCss.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentCss() {
  const codeString = `p {
    color: red;
    text-align: center;
  }`;

  const codeBlockStyle = {
    borderRadius: '20px', // border radius 
    overflow: 'hidden', // Prevent content from overflowing the rounded corners
  };

  return (
        <div className="sidenav">
            <div className="css-page">
                <header>
                <h1 id='css-content-title1' >Css - Cascading Style Sheets</h1>
                </header>

                <section id='css-introduction'>
                    <div id='css-content-title2' ><h2 >CSS Introduction</h2></div> 
                    <ul>
                        <li>CSS is the language we use to style an HTML document.</li>
                        <li>CSS describes how HTML elements should be displayed.</li>
                    </ul>
                </section>

                <section id='css-example'>
                <div id='css-content-title2' ><h2 >CSS Example</h2></div> 
                <div style={codeBlockStyle}>
                    <SyntaxHighlighter language="css" style={darcula}>
                    {codeString}
                    </SyntaxHighlighter>
                </div>
                </section>

                <section>
                    <div id='css-content-title2' ><h2 >Example Explaines</h2></div> 
                    <ul>
                        <li>p is a selector in CSS (it points to the HTML element you want to style: p tag ).</li>
                        <li>color is a property, and red is the property value</li>
                        <li>text-align is a property, and center is the property value</li>
                    </ul>
                </section>

                <section>
                    <div id='css-content-title2' ><h2 >CSS Syntax</h2></div> 
                    <ul>
                        <img src="blog/css_selector.gif" alt="Description of the image" style={{ maxWidth: '100%', height: 'auto',marginTop: '10px' }} />
                        <li style={{marginTop: '30px' }}>The declaration block contains one or more declarations separated by semicolons.</li>
                        <li>Each declaration includes a CSS property name and a value, separated by a colon.</li>
                        <li>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</li>
                    </ul>
                </section>
                <section>
                    <div id='css-content-title2' ><h2 >CSS Selectors</h2></div> 
                    <p id='css-paragraph'>
                        A CSS selector selects the HTML element(s) you want to style.
                        CSS selectors are used to "find" (or select) the HTML elements you want to style.<br /><br />
                        We can divide CSS selectors into five categories:
                    </p>
                    <ul>
                        <li>Simple selectors (select elements based on name, id, class)</li>
                        <li>Combinator selectors (select elements based on a specific relationship between them)</li>
                        <li>Pseudo-class selectors (select elements based on a certain state)</li>
                        <li>Pseudo-elements selectors (select and style a part of an element)</li>
                        <li>Attribute selectors (select elements based on an attribute or attribute value)</li>
                    </ul>
                </section>
                <section >
                    <div id='css-content-title2' ><h2 >How To Add CSS</h2></div> 
                    <p>When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.</p>
                    <p>Three Ways to Insert CSS</p>
                    <ul>
                        <li>External CSS</li>
                        <li>Internal CSS</li>
                        <li>Inline CSS</li>
                    </ul>
                </section>

                <section id='test-div'>
                    <div id='css-content-title2' ><h2 >This is test div</h2></div> 
                    <p id='css-paragraph'>
                        Test div
                    </p>
                </section>
            </div>
    </div>
    );
}

export default ContentCss;
