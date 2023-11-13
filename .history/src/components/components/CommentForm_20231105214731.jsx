import React from "react";

export default function CommentForm() {
  return (
    <div>
      <form className="flex gap-2">
        <textarea name="comment" id="comment" className="w-[80%]" />
        <button type="submit" className="btn">
          add
        </button>
      </form>
    </div>
  );
}
