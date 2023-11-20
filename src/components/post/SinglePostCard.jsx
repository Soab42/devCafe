/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { singleQuestionsRouteOn } from "../../feature/route/routeSlice";
import { FullDate } from "../../utils/Date";
import { addSingleData } from "../../feature/data/singleDataSlice";
import useLocalStorage from "../../common/hooks/useLocalStorage";
export default function SinglePostCard({ data }) {
  const [singleDataValue, setSingleDataValue] = useLocalStorage(
    "singleData",
    undefined
  );
  const dispatch = useDispatch();
  const setQuestion = () => {
    dispatch(singleQuestionsRouteOn());
    dispatch(addSingleData(data));
    setSingleDataValue(data);
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
        <div className="text-justify line-clamp-2">{data?.post}</div>
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
            <a
              href="/users/16298153/gawain"
              className="s-avatar s-avatar__16 s-user-card--avatar"
            >
              <div className="gravatar-wrapper-16">
                <img
                  src="https://www.gravatar.com/avatar/85e71ff0e414e6d20d57b318087e2641?s=32&amp;d=identicon&amp;r=PG&amp;f=y&amp;so-version=2"
                  alt="Gawain's user avatar"
                  width="16"
                  height="16"
                  className="s-avatar--image"
                />
              </div>
            </a>

            <div className="flex">
              <div className="s-user-card--link d-flex gs4">{data?.author}</div>
            </div>

            <time className="s-user-card--time">
              asked <span>{FullDate(data?.time)}</span>
            </time>
          </div>
        </div>
      </div>
      <div className="mt-2 border-b-2 border-dotted opacity-10"></div>
    </div>
  );
}
