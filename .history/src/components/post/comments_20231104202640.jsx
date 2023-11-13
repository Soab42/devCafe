import React from "react";

export default function Comments({ comments }) {
  return (
    <div>
      <div
        className="title bg-slate-500 pl-4 flex 
      items-center"
      >
        Comments
      </div>
      <div>
        {comments.map((comment) => {
          return <div>{comment.author}</div>;
        })}
      </div>
    </div>
  );
}
