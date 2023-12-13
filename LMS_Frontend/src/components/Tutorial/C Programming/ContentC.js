import React from 'react';
import './ContentC.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentC() {
  const codeString = `#include <stdio.h>
int main() {
    printf("Hello World!");
return 0;
  }`;

  const codeBlockStyle = {
    borderRadius: '20px', // Adjust the border radius value as needed
    overflow: 'hidden', // Prevent content from overflowing the rounded corners
  };

  return (
        <div className="sidenav">
            <div className="c-page">
                <header>
                <h1 id='c-content-title1' >C Programming</h1>
                </header>

                <section id='c-basics'>
                    <div id='c-content-title2' ><h2 >C Introduction</h2></div> 
                    <ul>
                        <li>C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.</li>
                        <li>It is a very popular language, despite being old. The main reason for its popularity is because 
                            it is a fundamental language in the field of computer science.</li>
                        <li>C is strongly associated with UNIX, as it was developed to write the UNIX operating system.</li>
                    </ul>
                </section>

                <section id='learn-c'>
                    <div id='c-content-title2' ><h2 >Why Learn C?</h2></div> 
                    <ul>
                        <li>It is one of the most popular programming language in the world</li>
                        <li>If you know C, you will have no problem learning other popular programming 
                            languages such as Java, Python, C++, C#, etc, as the syntax is similar</li>
                        <li>C is very fast, compared to other programming languages, like Java and Python</li>
                        <li>C is very versatile; it can be used in both applications and technologies</li>
                    </ul>
                </section>

                <section id='c-difference'>
                    <div id='c-content-title2' ><h2 >Difference between C and C++</h2></div> 
                    <ul>
                        <li>C++ was developed as an extension of C, and both languages have almost the same syntax</li>
                        <li>The main difference between C and C++ is that C++ support classes and objects, 
                            while C does not</li>
                    </ul>
                </section>

                <section id='c-syntax'>
                <div id='c-content-title2' ><h2 >C Syntax</h2></div>
                <p>C programming Syntax:</p> 
                <div style={codeBlockStyle}>
                    <SyntaxHighlighter language="c" style={darcula}>
                    {codeString}
                    </SyntaxHighlighter>
                </div>
                </section>

                <section id='c-exaple-explanation'>
                    <div id='c-content-title2' ><h2 >Example explained</h2></div> 
                    <ul>
                        <li>Line 1: #include stdio.h is a header file library that lets us work with input and output functions, such as printf() (used in line 4). Header files add functionality to C programs.</li>
                        <li>Line 2: A blank line. C ignores white space. But we use it to make the code more readable.</li>
                        <li>Line 3: Another thing that always appear in a C program, is main(). This is called a function. Any code inside its curly brackets {} will be executed. </li>
                        <li>Line 4: printf() is a function used to output/print text to the screen. In our example it will output "Hello World!". </li>
                        <br />
                        <p>Note that: Every C statement ends with a semicolon ;</p>
                        <p>Note: The body of int main() could also been written as:int main() "printf("Hello World!");return 0;" </p>
                        <p>Remember: The compiler ignores white spaces. However, multiple lines makes the code more readable.</p>
                        <li>Line 5: return 0 ends the main() function.</li>
                        <li>Line 6: Do not forget to add the closing curly bracket to actually end the main function.</li>
                    </ul>
                </section>

                <section id='c-ide'>
                    <div id='c-content-title2' ><h2 >C IDE</h2></div> 
                    <ul>
                        <li>An IDE (Integrated Development Environment) is used to edit AND compile the code.</li>
                        <li>Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C code.</li>
                    </ul>
                </section>
                
            </div>
    </div>
    );
}

export default ContentC;
