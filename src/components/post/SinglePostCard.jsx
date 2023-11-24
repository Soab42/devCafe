/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { singleQuestionsRouteOn } from "../../feature/route/routeSlice";
import { formatDate } from "../../utils/Date";
import { addSingleData } from "../../feature/data/singleDataSlice";
import useLocalStorage from "../../common/hooks/useLocalStorage";
export default function SinglePostCard({ data }) {
  const [singleDataValue, setSingleDataValue] = useLocalStorage(
    "singleData",
    undefined
  );
  const [routeValue, setRouteValue] = useLocalStorage("route", undefined);

  const dispatch = useDispatch();
  const setQuestion = () => {
    setRouteValue("single");
    dispatch(addSingleData(data));
    setSingleDataValue(data);
    dispatch(singleQuestionsRouteOn());
  };
  return (
    <div
      className="card hover:backdrop-blur-sm hover:shadow-xl duration-100 cursor-pointer"
      onClick={setQuestion}
    >
      <div className="flex flex-col gap-2 justify-center">
        <h3 className="title font-bold">
          <p>{data?.title}</p>
        </h3>
        <div className="text-justify line-clamp-2 capitalize">
          {data?.post.problem}
        </div>
        <div className="flex justify-between items-end">
          <div className="">
            <ul className="flex gap-2 p-1">
              {data?.tags.map((tag) => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-1">
            <div className="gravatar-wrapper-16">
              <img
                src={data?.author.photoURL}
                alt="Gawain's user avatar"
                width="16"
                height="16"
                className="s-avatar--image"
              />
            </div>

            <div className="flex">
              <button className="text-blue-600">{data?.author.name}</button>
            </div>

            <time>
              asked{" "}
              <span className="font-semibold text-pink-400/60">
                {formatDate(data?.time)}
              </span>
            </time>
          </div>
        </div>
      </div>
      <div className="mt-2 border-b-2 border-dotted opacity-10"></div>
    </div>
  );
}
