import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prisma-dark.css.css";
function CodeViewer({ text }) {
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
      <code className={`language-${language} text-xs`}>{code}</code>
    </pre>
  );
}
