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
import { useEffect } from "react";

// const day = require("dayjs");
export default function SinglePostContent() {
  const [singleDataValue, setSingleDataValue] = useLocalStorage(
    "singleData",
    undefined
  );
  const dispatch = useDispatch();
  const setRoute = () => dispatch(allQuestionsRouteOn());
  const text = useSelector((state) => state.singleData);
  // console.log(text);
  useEffect(() => {
    if (!singleDataValue) {
      dispatch(allQuestionsRouteOn());
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 relative pb-4 pt-1">
      <div className="route flex gap-1">
        <button className="underline text-sky-600" onClick={setRoute}>
          home
        </button>
        /<button className="text-sky-600">post</button>
      </div>
      {/* post title */}

      <Title title={text?.title} />
      <button
        className="btn hover:bg-blue-400/20 shadow-md hover:shadow-lg duration-300 text-slate-400 absolute right-5 shadow-blue-400/20 hover:text-black font-bold ring-1 w-24 h-8"
        onClick={() => dispatch(addQuestionRouteOn())}
      >
        Ask Question
      </button>
      {/* tags */}
      <div className="flex gap-2 p-1">
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
