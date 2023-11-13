import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../feature/loginmodal/modalSlice";
export default function CommentForm() {
  const accessToken = useSelector((state) => state.users.accessToken);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleSelection = () => {
    if (accessToken) {
      setShow(true);
    } else {
      dispatch(openModal());
    }
  };
  return (
    <div className="p-2">
      {!show ? (
        <span className="cursor-pont" onClick={handleSelection}>
          Add a comment
        </span>
      ) : (
        accessToken && (
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
        )
      )}
    </div>
  );
}
