import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeDisplay = () => {
  const code = `function greet(name) {
  return 'Hello, ' + name + '!';
}`;

  return (
    <div>
      <h2>Sample Code:</h2>
      <SyntaxHighlighter language="javascript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
