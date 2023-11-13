/* eslint-disable react/prop-types */
import Post from "./post/Post";
import CodeEditor from "./editor/CodeEditor";
import CodeViewer from "./editor/CodeVIewer";
export default function Content() {
  const text =
    "This is some text.#code <html>This is the content to be captured.</html> #endcode More text here. #code <html>Another code block. #endcode Final text.</html>";

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
  console.log(chunks);

  return (
    <div>
      {chunks.map((chunk, index) => {
        if (pattern.test(chunk)) {
          // If the chunk is markup, render it as code
          return <p key={index}>html</p>;
        } else {
          // If the chunk is plain text, render it as plain text
          return <span key={index}>{chunk}</span>;
        }
      })}
    </div>
  );
};
