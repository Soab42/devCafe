/* eslint-disable react/prop-types */
import { postData, randomIcons } from "./post/postData";
import CodeViewer from "./editor/CodeVIewer";
import { FullDate } from "../utils/Date";
import Title from "./post/Title";
import Tag from "./post/Tag";
import Comments from "./post/comments";
import Answer from "./post/Answer";
import Author from "./post/Author";
import TextWithMarkup from "./post/TextWithMarkup";
// const day = require("dayjs");
export default function Content() {
  const text = postData[0];
  // console.log(text);
  return (
    <div className="flex flex-col gap-2 relative pb-4">
      {/* post title */}

      <Title title={text.title} />
      <button className="btn hover:bg-blue-400/20 shadow-md hover:shadow-lg duration-300 text-slate-400 absolute right-5 shadow-blue-400/20 hover:text-black font-bold ring-1 w-24 h-8">
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
      <div className="h-2"></div>
      <Comments comments={text.comment} />
      <div className="h-2"></div>

      <Answer answer={text.answer} />
    </div>
  );
}
