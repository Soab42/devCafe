import React from "react";
import { randomIcons } from "./postData";
import { FullDate } from "../../utils/Date";
import Comments from "./comments";
import Author from "./Author";
import AnswerForm from "../components/AnswerForm";

export default function Answer({ answer }) {
  return (
    <div className="answer flex flex-col gap-1 text-slate-400">
      <div
        className="title shadow-sm p-1 shadow-sky-500/20 pl-4 flex 
  items-center"
      >
        Answer
      </div>
      {answer.map((ans, i) => {
        return (
          <div key={ans.time} className="flex flex-col gap-1 mt-1">
            <div className="font-bold text-xl">#{i + 1}</div>
            <div>{ans.text}</div>
            <div className="h-2"></div>
            <Comments comments={ans.comment} />
            <div className="h-2"></div>

            <div>
              <Author
                author={ans.author}
                time={ans.time}
                icon={ans.icon}
                ans={true}
              />
            </div>
            <hr />
            <div className="h-5"></div>
          </div>
        );
      })}
      <div className="anserForm">
        <AnswerForm />
      </div>
    </div>
  );
}
