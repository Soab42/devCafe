import React from "react";

export default function CommentForm() {
  return (
    <div className="p-2">
      <form className="flex gap-2">
        <textarea name="comment" id="comment" className="w-[80%]" />
        <button
          type="submit"
          className="btn bg-green-300 h-10 w-20 hover:opacity-50 duration-200 text-black"
        >
          Add
        </button>
      </form>
    </div>
  );
}
