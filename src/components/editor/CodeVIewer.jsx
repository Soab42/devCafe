import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.min.css";
function CodeViewer({ text }) {
  return (
    <div className="opacity-80">
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
      <code className={`language-${language} text-xs`}>{code}</code>
    </pre>
  );
}
