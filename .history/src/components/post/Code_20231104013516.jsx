import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  docco,
  darcula,
  a11yDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeDisplay = () => {
  const code = `function greet(name) {
  return 'Hello, ' + name + '!';
}`;

  return (
    <div className="text-[10px]">
      <h2>Sample Code:</h2>
      <SyntaxHighlighter language="java" style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
