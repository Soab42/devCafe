import React from "react";
import { randomIcons } from "./postData";
import { FullDate } from "../../utils/Date";

export default function Author({ author, time }) {
  return (
    <div className="flex-center  gap-2 bg-slate-600">
      <div className="w-10 h-10 bg-black flex-center">{randomIcons()}</div>
      <div>
        <div className="text-blue-400">{author}</div>
        <div>
          Asked On <span className="text-slate-300/70">{FullDate(time)} </span>
        </div>
      </div>
    </div>
  );
}
