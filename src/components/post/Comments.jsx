/* eslint-disable react/prop-types */
import { useState } from "react";
import CommentForm from "../form/CommentForm";

export default function Comments({ comments, answerId, status }) {
  // console.log(answerId);
  const [showComment, setShowComment] = useState(5);

  return (
    <div className="text-gray-500">
      <div
        className="text-sm shadow-sm p-1 my-1 shadow-green-400/20 pl-4 flex 
      items-center"
      >
        Comments
      </div>
      <div className="flex flex-col gap-1 mb-2">
        {comments &&
          Object?.values(comments)
            ?.slice(-showComment)
            .map((comment, i) => {
              return (
                <div key={i} className="bg-slate-600/20 p-2 mt-0.5 flex gap-2">
                  <span className="text-green-600 flex">
                    {comment.author.name}:
                  </span>

                  {comment.text}
                </div>
              );
            })}
        {comments && Object?.values(comments).length > showComment && (
          <button onClick={() => setShowComment((prev) => prev + 5)}>
            show more comments
          </button>
        )}
      </div>
      {!status && <CommentForm answerId={answerId} />}
    </div>
  );
}
