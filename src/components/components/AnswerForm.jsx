import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../../database/addAnswer";
import { addSingleData } from "../../feature/data/singleDataSlice";
import { getSinglePost } from "../../database/getSinglePost";
import { getUserInfo } from "../../utils/selector/getUserInfo";
export default function AnswerForm() {
  const { userId, postId } = useSelector((state) => state.singleData);
  const { user } = useSelector(getUserInfo);
  // const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  // console.log(singleContent);

  const inputRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    addAnswer(user, userId, postId, inputRef.current.value);

    const newData = await getSinglePost(userId, postId);
    dispatch(addSingleData({ ...newData, userId: userId, postId: postId }));
    // console.log("newData", newData);
    inputRef.current.value = null;
  };
  return (
    <form onSubmit={handleSubmit} className="relative">
      <textarea
        className="w-full h-20 bg-inherit ring-1 p-1"
        ref={inputRef}
        disabled={!user}
      />
      <div className="flex gap-10 item-center">
        <button
          type="submit"
          className="w-32 rounded bg-blue-500/60 text-gray-800 h-8 mt-1 hover:text-black font-bold"
          disabled={!user}
        >
          Submit Your Answer
        </button>
        {!user && (
          <div className="flex-center text-red-500 absolute bg-slate-600/40  backdrop-blur-sm w-full h-20 top-0">
            Please login to give answer
          </div>
        )}
      </div>
    </form>
  );
}
