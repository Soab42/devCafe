import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco, darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeDisplay = () => {
  const code = `function greet(name) {
  return 'Hello, ' + name + '!';
}`;

  return (
    <div>
      <h2>Sample Code:</h2>
      <SyntaxHighlighter language="javascript" style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
