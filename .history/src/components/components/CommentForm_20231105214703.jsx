import React from "react";

export default function CommentForm() {
  return (
    <div>
      <form>
        <textarea name="comment" id="comment" className="w-[80%]" />
        <button type="submit" />
      </form>
    </div>
  );
}
