import { useState } from "react";
import CodeEditor from "./CodeEditor";
import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
function CodeViewer() {
  const code = `function greet(name) {
    console.log("Hello, " + name);
  }`;

  return (
    <div>
      <h1>Code View Example</h1>
      <CodeView code={code} language="javascript" />
    </div>
  );
}

export default CodeViewer;

// Import a Prism.js theme

function CodeView({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}
