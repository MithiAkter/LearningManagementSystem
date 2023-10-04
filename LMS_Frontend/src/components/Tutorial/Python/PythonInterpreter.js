import React, { useState } from 'react';
import './PythonInterpreter.css';
function PythonInterpreter() {

  return (
      <div className="iframe-contai-ner">
        <iframe src="https://trinket.io/embed/python/3d8d7ce66b?toggleCode=true" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
      </div>
      
  );
}

export default PythonInterpreter;
