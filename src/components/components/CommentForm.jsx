import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../feature/loginmodal/modalSlice";
import { getSinglePost } from "../../database/getSinglePost";
import { addSingleData } from "../../feature/data/singleDataSlice";
import { addComment } from "../../database/addComment";
export default function CommentForm({ answerId }) {
  const accessToken = useSelector((state) => state.users.accessToken);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [openModalState, setOpenModalState] = useState(false);

  const { userId, postId } = useSelector((state) => state.singleData);

  const user = useSelector((state) => state.users.user);

  const inputRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    addComment(user, userId, postId, inputRef.current.value, answerId);

    const newData = await getSinglePost(userId, postId);
    dispatch(addSingleData({ ...newData, userId: userId, postId: postId }));
    // console.log("newData", newData);
    inputRef.current.value = null;
  };

  const handleSelection = () => {
    if (accessToken) {
      setShow(true);
    } else {
      dispatch(openModal());
      setOpenModalState(true);
    }
  };
  return (
    <div className="p-2   ">
      {!show ? (
        <div className="flex gap-10">
          <span
            className="cursor-pointer rounded-md w-32 bg-slate-400/20 p-2"
            onClick={handleSelection}
          >
            Add a comment
          </span>
          {openModalState && (
            <div className="flex-center text-red-300">
              Please login to comment
            </div>
          )}
        </div>
      ) : (
        accessToken && (
          <form className={`flex-center gap-2`} onSubmit={handleSubmit}>
            <textarea
              name="comment"
              id="comment"
              ref={inputRef}
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
