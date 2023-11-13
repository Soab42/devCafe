import React from "react";

export default function Comments({ comments }) {
  return (
    comments.length > 0 && (
      <div>
        <div
          className="text-sm bg-slate-500 pl-4 flex 
      items-center"
        >
          Comments
        </div>
        <div className="flex flex-col gap-1">
          {comments.map((comment, i) => {
            return (
              <div key={i} className="bg-slate-600/20 p-1">
                <span>{comment.author}: </span>
                {comment.text}
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}
