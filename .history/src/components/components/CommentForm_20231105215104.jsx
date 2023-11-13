import React from "react";

export default function CommentForm() {
  return (
    <div className="p-2">
      <form className="flex-center gap-2 ">
        <textarea
          name="comment"
          id="comment"
          className="w-[80%]  text-black p-1"
        />
        <button
          type="submit"
          className="btn  h-8 w-20  ring-green-400 hover:opacity-50 duration-200 text-black hover:bg-green-300"
        >
          Add
        </button>
      </form>
    </div>
  );
}
