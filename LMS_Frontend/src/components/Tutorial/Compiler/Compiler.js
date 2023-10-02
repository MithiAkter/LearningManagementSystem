import React, { useState } from 'react';

function Compiler() {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [lang, setLang] = useState('C');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleCompile = async () => {
    try {
      // Simulate code execution (Replace with your API call)
      const response = await executeCode(code, input, lang);

      if (response.error) {
        setError(response.error);
        setOutput('');
      } else {
        setError('');
        setOutput(response.output);
      }
    } catch (error) {
      setError('An error occurred while compiling the code.');
      setOutput('');
    }
  };

  const executeCode = async (code, input, lang) => {
    // Simulate API call (Replace with your API logic)
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate API response
        if (lang === 'C' || lang === 'C++') {
          resolve({ output: 'C/C++ Output' });
        } else if (lang === 'Python') {
          resolve({ output: 'Python Output' });
        } else {
          resolve({ error: 'Unsupported language' });
        }
      }, 2000); // Simulate a delay for API response
    });
  };

  return (
    <div>
      <center>
        <h1>Online IDE</h1>
        <h3>Code</h3>
        <textarea
          rows="13"
          cols="100"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
        <br />
        <h3>Input</h3>
        <textarea
          rows="10"
          cols="100"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <br />
        Language :
        <select
          name="lang"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="Python">Python</option>
        </select>
        <br />
        <button onClick={handleCompile}>Compile Code</button>
        {error && <div>Error: {error}</div>}
        <h2>Output:</h2>
        <pre>{output}</pre>
      </center>
    </div>
  );
}

export default Compiler;
