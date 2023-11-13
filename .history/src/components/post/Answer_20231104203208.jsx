import React from "react";
import { randomIcons } from "./postData";
import { FullDate } from "../../utils/Date";
import Comments from "./comments";

export default function Answer({ answer }) {
  return (
    <div className="answer">
      <div
        className="title bg-slate-500 pl-4 flex 
  items-center"
      >
        Answer
      </div>
      {answer.map((ans) => {
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
              <Comments comments={ans.comment} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
