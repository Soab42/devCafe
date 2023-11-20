import React from "react";
import { randomIcons } from "./postData";
import { FullDate } from "../../utils/Date";

export default function Author({ author, time, ans }) {
  return (
    <div className="flex justify-end pr-10  gap-2 backdrop-blur-lg">
      <div className="w-10 h-10 bg-black flex-center">{randomIcons()}</div>
      <div>
        <div className="text-blue-400 font-bold">{author}</div>
        <div className="text-gray-500">
          {ans ? "Answered On" : "Asked On"}
          <span className="text-blue-400/70">{FullDate(time)} </span>
        </div>
      </div>
    </div>
  );
}
