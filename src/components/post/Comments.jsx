/* eslint-disable react/prop-types */
import CommentForm from "../components/CommentForm";

export default function Comments({ comments, answerId }) {
  // console.log(answerId);
  return (
    <div className="text-gray-500">
      <div
        className="text-sm shadow-sm p-1 my-1 shadow-green-400/20 pl-4 flex 
      items-center"
      >
        Comments
      </div>
      <div className="flex flex-col gap-1">
        {comments &&
          Object?.values(comments)?.map((comment, i) => {
            return (
              <div key={i} className="bg-slate-600/20 p-2 mt-0.5 flex gap-2">
                <span className="text-green-600 flex">
                  {comment.author.name}:
                </span>
                {comment.text}
              </div>
            );
          })}
      </div>
      <CommentForm answerId={answerId} />
    </div>
  );
}
