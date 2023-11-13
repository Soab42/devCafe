import React, { useState } from "react";
import { useSelector } from "react-redux";
import Terminal from "../LoginModal";
export default function CommentForm() {
  const accessToken = useSelector((state) => state.users.accessToken);
  const [show, setShow] = useState(false);
  return (
    <div className="p-2">
      {!show ? (
        <span className="" onClick={() => setShow(true)}>
          Add a comment
        </span>
      ) : accessToken ? (
        <form className={`flex-center gap-2`}>
          <textarea
            name="comment"
            id="comment"
            className="w-[80%] p-1 bg-inherit ring-1"
          />
          <button
            type="submit"
            className="btn  h-8 w-20  ring-green-400 ring-1 shadow-md shadow-green-400/30 text-gray-400  duration-200 hover:text-black hover:bg-green-300/70"
          >
            Add
          </button>
        </form>
      ) : (
        <Terminal show={show} />
      )}
    </div>
  );
}
