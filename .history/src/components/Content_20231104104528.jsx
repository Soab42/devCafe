import Post from "./post/Post";
import CodeEditor from "./editor/CodeEditor";
import CodeViewer from "./editor/CodeVIewer";
export default function Content() {
  return (
    <div>
      <Post />
      <CodeEditor />
      <CodeViewer />
    </div>
  );
}

const TextWithMarkup = ({ text }) => {
  // Split the text into chunks using a regular expression
  const chunks = text.split(/(\[.*?\])/); // Adjust the regex pattern as needed

  return (
    <div>
      {chunks.map((chunk, index) => {
        if (/^\[.*\]$/.test(chunk)) {
          // If the chunk is markup, render it as code
          return (
            <code key={index} dangerouslySetInnerHTML={{ __html: chunk }} />
          );
        } else {
          // If the chunk is plain text, render it as plain text
          return <span key={index}>{chunk}</span>;
        }
      })}
    </div>
  );
};
