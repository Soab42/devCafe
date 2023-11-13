/* eslint-disable react/prop-types */
import Post from "./post/Post";
import CodeEditor from "./editor/CodeEditor";
import CodeViewer from "./editor/CodeVIewer";
export default function Content() {
  const text =
    "This is some text. #code <html>This is the content to be captured.</html> #endcode More text here. #code <html>Another code block. #endcode Final text.</html>";

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
  // Split the text into chunks using a regular expression
  const chunks = text.split(pattern); // Adjust the regex pattern as needed

  const pattern = r'#code(.*?)#endcode';
  return (
    <div>
      {chunks.map((chunk, index) => {
        if (/^\.*\]$/.test(chunk)) {
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
