import React from 'react';
import './ContentCPP.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentCPP() {
  const codeString = `#include <iostream>
  using namespace std;
  
  int main() {
    cout << "Hello World!";
    return 0;
  } `;

  const codeBlockStyle = {
    borderRadius: '10px', //border radius
    overflow: 'hidden', // Prevent content from overflowing the rounded corners
  };

  return (
        <div className="sidenav">
            <div className="cpp-page">
                <header>
                <h1 id='cpp-content-title1' >C++ Programming</h1>
                </header>

                <section id='cpp-introduction'>
                    <div id='cpp-content-title2' ><h2 >What is C++?</h2></div> 
                    <ul>
                        <li>C++ is a cross-platform language that can be used to create high-performance applications.</li>
                        <li>C++ was developed by Bjarne Stroustrup, as an extension to the C language.</li>
                        <li>C++ gives programmers a high level of control over system resources and memory.</li>
                        <li>The language was updated 4 major times in 2011, 2014, 2017, and 2020 to C++11, C++14, C++17, C++20.</li>
                        
                    </ul>
                </section>

                <section id='cpp-use'>
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

                <section id='cpp-difference'>
                    <div id='cpp-content-title2'><h2>Difference between C and C++</h2></div> 
                    <ul>
                        <li>C++ was developed as an extension of C, and both languages have almost the same syntax.</li>
                        <li>The main difference between C and C++ is that C++ support classes and objects, while C does not.</li>
                        
                    </ul>
                </section>

                <section id='cpp-getstart'>
                    <div id='cpp-content-title2'><h2>C++ Get Started</h2></div> 
                    <ul>
                        <li>C++ was developed as an extension of C, and both languages have almost the same syntax.</li>
                        <li>C++ was developed as an extension of C, and both languages have almost the same syntax.</li>
                        <li>The main difference between C and C++ is that C++ support classes and objects, while C does not.</li>
                        
                    </ul>
                </section>

                <section id='cpp-syntax'>
                <div id='cpp-content-title2' ><h2 >C++ Syntax</h2></div> 
                <div style={codeBlockStyle}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                    {codeString}
                    </SyntaxHighlighter>
                </div>
                </section>

                <section id='cpp-example'>
                    <div id='cpp-content-title2' ><h2 >Example explained</h2></div> 
                    <ul>
                        <li>Line 1: #include 'iostream' is a header file library that lets us work with input and output objects, 
                            such as cout (used in line 5). Header files add functionality to C++ programs.</li>
                        <li>Line 2: using namespace std means that we can use names for objects and variables from the standard library.</li>
                        <li>Line 3: A blank line. C++ ignores white space. But we use it to make the code more readable.</li>
                        <li>Line 4: Another thing that always appear in a C++ program, is int main(). This is called a function. Any code inside its curly brackets will be executed.</li>
                        <li>Line 5: cout (pronounced "see-out") is an object used together with the insertion operator to output/print text. In our example it will output "Hello World!".</li>
                        <br />
                        <p>Note: Every C++ statement ends with a semicolon ;.</p>
                        <br />
                        <p>Remember: The compiler ignores white spaces. However, multiple lines makes the code more readable.</p>
                        <li>Line 6: return 0 ends the main function.</li>
                        <li>Line 7: Do not forget to add the closing curly bracket to actually end the main function.</li>
                    </ul>
                </section>

                <section id='cpp-ide'>
                    <div id='cpp-content-title2'><h2 >C++ Install IDE</h2></div> 
                    <p id='cpp-paragraph'>
                        An IDE (Integrated Development Environment) is used to edit AND compile the code.
                    </p>
                    <p>
                        Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C++ code.
                    </p>
                    <p>
                        Note: Web-based IDE's can work as well, but functionality is limited.
                    </p>
                </section>

                
            </div>
    </div>
    );
}

export default ContentCPP;
