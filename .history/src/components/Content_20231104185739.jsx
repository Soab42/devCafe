/* eslint-disable react/prop-types */
import Post from "./post/Post";
import CodeEditor from "./editor/CodeEditor";
import { postData, randomIcons } from "./post/postData";
import CodeViewer from "./editor/CodeVIewer";
export default function Content() {
  const text = postData[0];
  console.log(text);
  return (
    <div>
      {/* <Post />
      <CodeEditor />
      <CodeViewer /> */}
      {<TextWithMarkup text={text.post} />}
      <div>Asked {text.time.toISOString()}</div>
      <div className="flex-center w-20 gap-2 bg-slate-600">
        <div className="w-10 h-10 bg-black flex-center">{randomIcons()}</div>
        <div>
          <div>{text.author}</div>
        </div>
      </div>
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
          return (
            <span key={index} className="text-justify">
              {text}
            </span>
          );
        }
      })}
    </div>
  );
};
