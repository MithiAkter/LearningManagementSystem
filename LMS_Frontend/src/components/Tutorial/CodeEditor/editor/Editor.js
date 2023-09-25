import React, { useState, useRef, useEffect } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import CodeMirror from 'codemirror'; // Import CodeMirror

export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props;
  const [open, setOpen] = useState(true);

  const textareaRef = useRef(null);
  const editor = useRef(null);

  // Initialize CodeMirror when the component mounts
  useEffect(() => {
    if (!editor.current) {
      editor.current = CodeMirror.fromTextArea(textareaRef.current, {
        lineWrapping: true,
        mode: language,
        theme: 'material',
        lineNumbers: true,
      });

      editor.current.on('change', (cm) => {
        onChange(cm.getValue());
      });
    }
  }, [language, onChange]);

  // Handle opening and closing the editor
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    if (editor.current) {
      editor.current.refresh(); // Refresh the editor layout when toggling
    }
  };

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={() => {}}
        style={{ display: 'none' }}
      />
    </div>
  );
}
