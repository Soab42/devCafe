import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  docco,
  darcula,
  a11yDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeDisplay = () => {
  const code = "<div>hi</div>";

  return (
    <div className="text-[10px]">
      <h2>Sample Code:</h2>
      <SyntaxHighlighter language="javascript" style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
