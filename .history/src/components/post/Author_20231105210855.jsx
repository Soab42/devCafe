import React from "react";
import { randomIcons } from "./postData";
import { FullDate } from "../../utils/Date";

export default function Author({ author, time,ans }) {
  return (
    <div className="flex-center  gap-2 bg-slate-600">
      <div className="w-10 h-10 bg-black flex-center">{randomIcons()}</div>
      <div>
        <div className="text-blue-400">{author}</div>
        <div>
          {ans ? Ans on:Asked On} <span className="text-blue-400/70">{FullDate(time)} </span>
        </div>
      </div>
    </div>
  );
}
