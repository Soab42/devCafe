import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../feature/loginmodal/modalSlice";
import { FcCloseUpMode, FcHighPriority } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { deletePost } from "../database/deletePost";
import { allQuestionsRouteOn } from "../feature/route/routeSlice";
import { useState } from "react";
import { addSingleData } from "../feature/data/singleDataSlice";
export default function Confirm() {
  const confirm = useSelector((s) => s.mood);
  const singleData = useSelector((s) => s.singleData);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const confirmTask = async () => {
    const res = await deletePost(singleData);
    console.log(res);
    setSuccess(res);
    if (res) {
      setTimeout(() => {
        dispatch(closeModal());
        dispatch(addSingleData(undefined));
        dispatch(allQuestionsRouteOn());
        setSuccess(!success);
        setSuccess(!res);
      }, 1000);
    }
  };
  return (
    <div
      className={`fixed z-50 text-white/80 left-0 lg:text-[5rem]  w-screen h-screen bg-black/30 flex-center top-10 bottom-0 backdrop-blur-[1px]  ${
        confirm.mood === "confirm" ? "visible" : "hidden"
      }`}
    >
      {!success ? (
        <div className="w-[30rem] bg-sky-950 p-5 h-84 flex flex-col justify-between rounded-xl">
          <div>
            <div className="flex justify-between mb-2 items-start">
              <span className="text-[3rem]">
                <FcHighPriority />
              </span>
              <button
                className="text-2xl"
                onClick={() => dispatch(closeModal())}
              >
                <GrClose />
              </button>
            </div>
            <div className="font-bold text-2xl text-center mb-6">
              Do you want to delete this post?
            </div>
            {/* <div className=" py-2">
            <p className="text-xl leading-relaxed text-slate-500">
              Once You delete the post, you can not get back that post again!
            </p>
          </div> */}
            <div>
              <p className="text-lg  text-slate-500 text-justify">
                Once you delete a post, it cannot be recovered. Make sure you
                want to permanently remove the post.
              </p>
            </div>
          </div>
          <div className="button flex justify-end gap-2 text-lg mt-6">
            <button
              onClick={confirmTask}
              className="flex-center text-slate-200 px-6 py-2 bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => dispatch(closeModal())}
              className="flex-center text-slate-900 px-6 py-2 bg-slate-200"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="w-[30rem] bg-sky-950 p-5 h-84 flex-center  gap-4 rounded-xl text-[2rem]">
          <span className="text-[10rem]">
            <FcCloseUpMode />
          </span>
          Successfully Deleted!
        </div>
      )}
    </div>
  );
}
