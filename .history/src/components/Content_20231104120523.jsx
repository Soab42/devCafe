/* eslint-disable react/prop-types */
import Post from "./post/Post";
import CodeEditor from "./editor/CodeEditor";
import CodeViewer from "./editor/CodeVIewer";
export default function Content() {
  const text = `This is some text. #code function CodeView({ code, language }) {
    useEffect(() => {
      Prism.highlightAll();
    }, []);
  
    return (
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    );
  }#endcode`;

  return (
    <div>
      {/* <Post />
      <CodeEditor />
      <CodeViewer /> */}
      {<TextWithMarkup text={text} />}
    </div>
  );
}

const TextWithMarkup = ({ text }) => {
  // Define the regex pattern
  const pattern = /#code(.*?)#endcode/g;
  // Split the text into chunks using the regular expression
  const chunks = text.split(pattern);
  // console.log(chunks);

  return (
    <div>
      {chunks.map((chunk, index) => {
        const text = chunk.replace(/\s+code/g, "code");

        if (text.startsWith("code")) {
          const modifiedText = chunk.replace(/\s+code/g, "");
          // If the chunk is markup, render it as code
          return <CodeViewer key={index} text={modifiedText} />;
        } else {
          // If the chunk is plain text, render it as plain text
          return <span key={index}>{text}</span>;
        }
      })}
    </div>
  );
};
