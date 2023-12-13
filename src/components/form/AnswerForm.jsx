import { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../../database/addAnswer";
import { addSingleData } from "../../feature/data/singleDataSlice";
import { getSinglePost } from "../../database/getSinglePost";
import { getUserInfo } from "../../utils/selector/getUserInfo";
import { IoInformation, IoInformationCircle, IoReader } from "react-icons/io5";
import Error from "../utils/Error";
export default function AnswerForm() {
  const [error, setError] = useState();
  const { userId, postId } = useSelector((state) => state.singleData);
  const { user } = useSelector(getUserInfo);
  // const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  // console.log(singleContent);

  const inputRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputRef?.current.value) {
      addAnswer(user, userId, postId, inputRef.current.value);

      const newData = await getSinglePost(userId, postId);
      dispatch(addSingleData({ ...newData, userId: userId, postId: postId }));
      // console.log("newData", newData);
      inputRef.current.value = null;
    } else {
      setError("Please write Something");
    }
  };
  const handleAddText = () => {
    // Add your desired text at the end of the current value
    if (user) {
      inputRef.current.value += `
    ##
        // paste your code here.....
    ##`;
    }
  };
  return (
    <form onSubmit={handleSubmit} className="relative">
      <textarea
        className="w-full h-20 bg-inherit ring-1 p-1"
        ref={inputRef}
        disabled={!user}
        onChange={() => setError(false)}
        // required
      />
      <div className="flex gap-10 item-center justify-between pr-2">
        <button
          type="submit"
          className="w-32 rounded bg-blue-500/60 text-gray-800 h-8 mt-1 hover:text-black font-bold"
          disabled={!user || error}
        >
          Submit Your Answer
        </button>
        {error && <Error error={error} />}
        {!user && (
          <div className="flex-center text-red-500 absolute bg-slate-600/40  backdrop-blur-sm w-full h-20 top-0">
            Please login to give answer
          </div>
        )}
        <div
          className="flex-center gap-2 text-center hover:bg-purple-400/10 px-2 cursor-pointer"
          onClick={handleAddText}
        >
          ##<code className="bg-slate-300/50 px-2 text-black">code</code>##
        </div>
      </div>
    </form>
  );
}
