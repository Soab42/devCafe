import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
function CodeViewer({ text }) {
  const code = `function greet(name) {
    console.log("Hello, " + name);
  }`;

  return (
    <div>
      <CodeView code={text} language="javascript" />
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
