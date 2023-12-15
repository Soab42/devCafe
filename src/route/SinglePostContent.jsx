/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Answer from "../components/post/Answer";
import Author from "../components/post/Author";
import Tag from "../components/post/Tag";
import TextWithMarkup from "../components/code/TextWithMarkup";
import Title from "../components/post/Title";
import Comments from "../components/post/comments";
import useLocalStorage from "./../common/hooks/useLocalStorage";
import {
  allQuestionsRouteOn,
  addQuestionRouteOn,
} from "../feature/route/routeSlice";
import { GrMoreVertical } from "react-icons/gr";
import { IoMdOptions } from "react-icons/io";
import { SiCkeditor4, SiStopstalk } from "react-icons/si";
import { MdClose, MdOutlineDeleteSweep, MdStop } from "react-icons/md";
import { useState } from "react";
// import { useEffect } from "react";

// const day = require("dayjs");
export default function SinglePostContent() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const text = useSelector((state) => state.singleData);
  const user = useSelector((state) => state.users.user);
  const [_, setRoute] = useLocalStorage("route", undefined);

  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }
  if (isEmptyObject(text)) {
    // console.log("not have text");
    dispatch(allQuestionsRouteOn());
    setRoute("all");
  }
  // console.log("text", text);
  return (
    <div className="flex flex-col gap-2 relative pb-4 pt-1">
      {/* post title */}
      <div className={`h-7 text-yellow-600 flex text-xl relative`}>
        {user?.name === text?.author?.name && (
          <button
            className={`${show && "rotate-90"} duration-300`}
            onClick={() => setShow(!show)}
          >
            <IoMdOptions />
          </button>
        )}
      </div>
      <div
        id={"option"}
        className={`absolute animate-in gap-2 left-8 top-2 text-xs ${
          show ? "flex" : "hidden"
        }`}
      >
        <div className="h-5 flex-center text-slate-800 rounded gap-1 hover:opacity-100 opacity-80 bg-green-300 px-2 cursor-pointer">
          <SiCkeditor4 />
          Edit
        </div>
        <div className="flex-center text-slate-800 rounded gap-1 hover:opacity-100 opacity-80 px-1 bg-slate-400 cursor-pointer">
          <SiStopstalk />
          Close
        </div>
        <div className="flex-center text-slate-800 rounded gap-1 hover:opacity-100 opacity-80 px-1 bg-red-500 cursor-pointer">
          <MdOutlineDeleteSweep />
          Delete
        </div>
      </div>

      <Title title={text?.title} />
      <button
        className="btn hover:bg-blue-400/20 shadow-md hover:shadow-lg duration-300 text-slate-400 absolute right-5 shadow-blue-400/20 hover:text-black font-bold ring-1 w-24 h-8"
        onClick={() => dispatch(addQuestionRouteOn())}
      >
        Ask Question
      </button>
      {/* tags */}
      <div className="flex gap-2 p-1 w-full flex-wrap">
        {text?.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <hr />
      {/* main post content  */}

      {<TextWithMarkup text={text?.post?.problem} />}
      {<TextWithMarkup text={text?.post?.try} />}
      {/* author  */}
      <Author author={text?.author} time={text?.time} />
      <div className="h-2"></div>
      <Comments comments={text?.comment || []} />
      <div className="h-2"></div>

      <Answer answer={text?.answer || []} />
    </div>
  );
}
