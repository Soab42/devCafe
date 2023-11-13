import React from "react";

export default function Comments({ comments }) {
  return (
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
            <div key={i}>
              {comment.author}:{comment.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
