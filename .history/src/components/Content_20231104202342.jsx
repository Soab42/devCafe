/* eslint-disable react/prop-types */
import { postData, randomIcons } from "./post/postData";
import CodeViewer from "./editor/CodeVIewer";
import { FullDate } from "../utils/Date";
import Title from "./post/Title";
import Tag from "./post/Tag";
import Comments from "./post/comments";
// const day = require("dayjs");
export default function Content() {
  const text = postData[0];
  // console.log(text);
  return (
    <div className="flex flex-col gap-1">
      {/* post title */}
      <Title title={text.title} />
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
      <div className="flex-center  gap-2 bg-slate-600">
        <div className="w-10 h-10 bg-black flex-center">{randomIcons()}</div>
        <div>
          <div>{text.author}</div>
          <div>Asked On {FullDate(text.time)}</div>
        </div>
      </div>
      <div
        className="title bg-slate-500 pl-4 flex 
      items-center"
      >
        <Comments />
      </div>
      <div className="answer">
        <div
          className="title bg-slate-500 pl-4 flex 
        items-center"
        >
          Answer
        </div>
        {text.answer.map((ans) => {
          return (
            <div key={ans.time}>
              <div>{ans.text}</div>
              <div>
                <div className="flex-center  gap-2 bg-slate-600">
                  <div className="w-10 h-10 bg-black flex-center">
                    {randomIcons()}
                  </div>
                  <div>
                    <div>{ans.author}</div>
                    <div>Asked On {FullDate(ans.time)}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
