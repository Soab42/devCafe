/* eslint-disable react/prop-types */
import Post from "./post/Post";
import CodeEditor from "./editor/CodeEditor";
import CodeViewer from "./editor/CodeVIewer";
export default function Content() {
  text = "This is some text. #code This is the content to be captured. #endcode More text here. #code Another code block. #endcode Final text."

  pattern = r'#code(.*?)#endcode'

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
  const chunks = text.split(/(\[.*?\])/); // Adjust the regex pattern as needed

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
