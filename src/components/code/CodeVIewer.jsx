import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-twilight.css";
import { TiClipboard, TiTick } from "react-icons/ti";
function CodeViewer({ text }) {
  // console.log(text);
  // Replace spaces with newline characters
  const formattedCode = text.replace(/     /g, "\n");
  // const formattedCode = text.replace(/ {3,}/g, "\n");

  return (
    <div className="opacity-80">
      <CodeView code={formattedCode} language="javascript" />
    </div>
  );
}

export default CodeViewer;

function CodeView({ code, language }) {
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 5000);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="relative">
      <button
        className="absolute px-1 right-5 text-slate-300 ring-1 gap-1 rounded-sm backdrop-blur-md"
        onClick={handleCopy}
      >
        {copy ? (
          <div className="flex-center gap-1 p-1 w-16 text-sky-400">
            <TiTick />
            copied
          </div>
        ) : (
          <div className="flex-center gap-1 p-1 w-16">
            <TiClipboard />
            copy
          </div>
        )}
      </button>
      <code className={`language-${language} text-xs`}>{code}</code>
    </pre>
  );
}
