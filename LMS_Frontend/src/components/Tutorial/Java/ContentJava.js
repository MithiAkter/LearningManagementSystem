import React from 'react';
import './ContentJava.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ContentJava() {
  const codeString = `public class Main {
    public static void main(String[] args) {
      System.out.println("Hello World");
    }
  }
  `;

  const codeBlockStyle = {
    borderRadius: '15px', //border radius
    overflow: 'hidden', // Prevent content from overflowing the rounded corners
  };

  return (
        <div className="sidenav">
            <div className="java-page">
                <header>
                <h1 id='java-content-title1' >Java Programming</h1>
                </header>

                <section id='java-learning'>
                    <div id='java-content-title2' ><h2 >Learn Java</h2></div> 
                    <ul>
                        <li>Java is a popular programming language.</li>
                        <li>Java is used to develop mobile apps, web apps, desktop apps, games and much more.</li>
                    </ul>
                </section>

                <section id='java-introduction'>
                    <div id='java-content-title2' ><h2 >Java Introduction</h2></div>
                    <ul>
                        <p>What is Java?<br />
                            Java is a popular programming language, created in 1995.<br />
                            It is owned by Oracle, and more than 3 billion devices run Java.<br />
                            It is used for:
                        </p>
                        <li>Mobile applications (specially Android apps)</li>
                        <li>Desktop applications</li>
                        <li>Web applications</li>
                        <li>Web servers and application servers</li>
                        <li>Games</li>
                        <li>Database connection.And much, much more!</li>
                    </ul>
                </section>

                <section id='java-use'>
                    <div id='java-content-title2' ><h2>Why Use Java?</h2></div>
                    <ul>
                        <li>Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
                        <li>It is one of the most popular programming language in the world</li>
                        <li>It has a large demand in the current job market</li>
                        <li>It is easy to learn and simple to use</li>
                        <li>It is open-source and free</li>
                        <li>It is secure, fast and powerful</li>
                        <li>It has a huge community support (tens of millions of developers)</li>
                        <li>Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs</li>
                        <li>As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa</li>
                    </ul>
                </section>

                <section id='java-syntax'>
                <div id='java-content-title2' ><h2 >Java Syntax</h2></div> 
                <p>We used the following code to print "Hello World" to the screen:</p>
                <div style={codeBlockStyle}>
                    <SyntaxHighlighter language="java" style={darcula}>
                    {codeString}
                    </SyntaxHighlighter>
                </div>
                </section>


                <section id='java-example-explained'>
                    <div id='java-content-title2' ><h2>Example explained</h2></div> 
                    <ul>
                        <li>Every line of code that runs in Java must be inside a class. In our example, 
                            we named the class Main. A class should always start with an uppercase first letter.</li>
                        <p>Note: Java is case-sensitive: "MyClass" and "myclass" has different meaning.</p>
                        <li>The name of the java file must match the class name. When saving the file, 
                            save it using the class name and add ".java" to the end of the filename. To run the example above on your computer, make sure that Java is properly installed: 
                            Go to the Get Started Chapter for how to install Java. </li><br />
                        <p>The output should be:</p>
                        <p>Hello World </p>
                    </ul>
                </section>

                <section id='java-comments'>
                    <div id='java-content-title2' ><h2 >Java Comments</h2></div> 
                    <p id='java-paragraph'>
                        Comments can be used to explain Java code, and to make it more readable. 
                        It can also be used to prevent execution when testing alternative code.
                    </p>
                    <h3>Single-line Comments:</h3>
                    <p>Single-line comments start with two forward slashes (//).</p>
                    <p>Any text between // and the end of the line is ignored by Java (will not be executed).</p>
                    <p>Single-line comments start with two forward slashes (//).</p>
                    <h3>Java Multi-line Comments:</h3>
                    <p>Multi-line comments start with /* and ends with */.</p>
                    <p>Any text between /* and */ will be ignored by Java.</p>
                    <p>Single or multi-line comments?</p>
                    <p>It is up to you which you want to use. Normally, we use // for short comments, and /* */ for longer.</p>
                </section>

                <section id='java-variable'>
                    <div id='java-content-title2' ><h2>Java Variables</h2></div>
                    <p>Variables are containers for storing data values. </p>
                    <p>In Java, there are different types of variables, for example:</p>
                    <ul>
                        <li>String - stores text, such as "Hello". String values are surrounded by double quotes</li>
                        <li>int - stores integers (whole numbers), without decimals, such as 123 or -123</li>
                        <li>float - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
                        <li>char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
                        <li>boolean - stores values with two states: true or false</li>
                    </ul>
                </section>

            
            </div>
    </div>
    );
}

export default ContentJava;
