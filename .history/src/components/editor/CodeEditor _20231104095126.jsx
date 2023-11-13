import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript"; // Import a specific code language mode (e.g., JavaScript)

const CodeEditor = ({ code, onChange }) => {
  return (
    <div>
      <h2>Code Editor</h2>
      <CodeMirror
        value={code}
        onBeforeChange={(editor, data, value) => {
          // Handle changes to the code and pass them to the parent component
          onChange(value);
        }}
        options={{
          mode: "javascript", // Set the language mode
          theme: "default", // Set the code editor theme (you can customize this)
          lineNumbers: true, // Show line numbers
        }}
      />
    </div>
  );
};

export default CodeEditor;
