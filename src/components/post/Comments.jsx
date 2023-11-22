/* eslint-disable react/prop-types */
import CommentForm from "../components/CommentForm";

export default function Comments({ comments }) {
  return (
    comments.length >= 0 && (
      <div className="text-gray-500">
        <div
          className="text-sm shadow-sm p-1 my-1 shadow-green-400/20 pl-4 flex 
      items-center"
        >
          Comments
        </div>
        <div className="flex flex-col gap-1">
          {comments.map((comment, i) => {
            return (
              <div key={i} className="bg-slate-600/20 p-1 mt-0.5">
                <span className="text-green-600">{comment.author}: </span>
                {comment.text}
              </div>
            );
          })}
        </div>
        <CommentForm />
      </div>
    )
  );
}
