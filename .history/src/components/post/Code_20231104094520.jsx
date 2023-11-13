import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  docco,
  darcula,
  a11yDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeDisplay = ({ code }) => {
  return (
    code && (
      <div className="text-[10px] mt-2 mb-2">
        <SyntaxHighlighter language="html" style={darcula}>
          {code}
        </SyntaxHighlighter>
      </div>
    )
  );
};

export default CodeDisplay;
