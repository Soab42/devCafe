/* eslint-disable react/prop-types */
import { postData, randomIcons } from "./post/postData";
import CodeViewer from "./editor/CodeVIewer";
import { FullDate } from "../utils/Date";
import Title from "./post/Title";
import Tag from "./post/Tag";
import Comments from "./post/comments";
import Answer from "./post/Answer";
import Author from "./post/Author";
// const day = require("dayjs");
export default function Content() {
  const text = postData[0];
  // console.log(text);
  return (
    <div className="flex flex-col gap-2">
      {/* post title */}

      <Title title={text.title} />
      <button className="btn hover:bg-blue-400/20 shadow-md shadow-blue-400/20 hover:text-black ring-1 w-24 h-8">
        Ask Question
      </button>
      {/* tags */}
      <div className="flex gap-2 p-1">
        {text.tag.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <hr />
      {/* main post content  */}
      {<TextWithMarkup text={text.post} />}
      {/* author  */}
      <Author author={text.author} time={text.time} icon={text.icon} />

      <Comments comments={text.comment} />
      <Answer answer={text.answer} />
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
