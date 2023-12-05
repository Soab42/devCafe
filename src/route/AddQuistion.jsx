// import React from "react";

import { useState } from "react";
import ProblemsInput from "../components/ask/Problems";
import Suggestions from "../components/ask/Suggestions";
import Title from "../components/ask/Title";
import TitleInput from "../components/ask/TitleInput";
import TryInput from "../components/ask/Try";
import TagsInput from "../components/ask/Tags";
// import ReviewInput from "../components/ask/ReviewQuistion";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../database/addData";
import { singleQuestionsRouteOn } from "../feature/route/routeSlice";
import { addSingleData } from "../feature/data/singleDataSlice";
import useLocalStorage from "../common/hooks/useLocalStorage";
import { getUserInfo } from "../utils/selector/getUserInfo";
import { openModal } from "../feature/loginModal/modalSlice";
import Error from "../components/utils/Error";
export default function AddQuestion() {
  const [inputSwitch, setInputSwitch] = useState(0);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector(getUserInfo);
  // const mood = useSelector((state) => state.mood.mood);
  const [_, setSingleDataValue] = useLocalStorage("singleData", undefined);
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addLoading());

    if (user) {
      const form = e.target;
      const inputs = form.getElementsByTagName("input");
      const textareas = form.getElementsByTagName("textarea");
      const tagDiv = form.querySelectorAll('[name="tags"]');

      // Convert HTMLCollection to array and use reduce to create formData object
      const formData = [...inputs, ...textareas].reduce((acc, input) => {
        acc[input.name] = input.value;
        return acc;
      }, {});

      const tags = [...tagDiv].reduce((acc, tag) => {
        acc.push(tag.innerHTML);
        return acc;
      }, []);
      // console.log(formData);
      const uploadData = addData({ ...formData, tags }, user);
      if (uploadData) {
        // console.log(uploadData);
        setSingleDataValue(uploadData);
        dispatch(addSingleData(uploadData));
        dispatch(singleQuestionsRouteOn());
      }
    } else {
      dispatch(openModal());
      setError("Please login to Ask A Question");
    }
  };
  // console.log(inputSwitch);
  return (
    <div className="">
      <form
        className="suggestions p-4 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Suggestions />
        <section className="flex flex-col gap-4">
          {inputSwitch == 0 && <Title infoNo={inputSwitch} />}
          <div>
            <TitleInput
              setInputSwitch={setInputSwitch}
              inputSwitch={inputSwitch}
            />
          </div>
        </section>{" "}
        <section className="flex flex-col gap-4">
          {inputSwitch == 1 && (
            <Title infoNo={inputSwitch} setInputSwitch={setInputSwitch} />
          )}
          <div className="">
            <ProblemsInput
              setInputSwitch={setInputSwitch}
              inputSwitch={inputSwitch}
            />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          {inputSwitch == 2 && (
            <Title infoNo={inputSwitch} setInputSwitch={setInputSwitch} />
          )}
          <div>
            <TryInput
              setInputSwitch={setInputSwitch}
              inputSwitch={inputSwitch}
            />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          {inputSwitch == 3 && <Title infoNo={inputSwitch} />}
          <div>
            <TagsInput
              setInputSwitch={setInputSwitch}
              inputSwitch={inputSwitch}
            />
          </div>
        </section>
        {/* <section className="flex flex-col gap-4">
          {inputSwitch == 4 && <Title infoNo={inputSwitch} />}
          <div>
            <ReviewInput
              setInputSwitch={setInputSwitch}
              inputSwitch={inputSwitch}
            />
          </div>
        </section> */}
        <section className="flex  gap-4">
          <button
            className={`px-4 p-1 rounded-md bg-sky-600/40 opacity-80 text-slate-300/80 hover:opacity-100 duration-400 w-48 z-20 ${
              inputSwitch !== 4 && "opacity-30 hover:opacity-30"
            }`}
            disabled={inputSwitch !== 4}
            type="submit"
          >
            Post Your Question
          </button>
          <div className="w-full">
            <Error error={error} />
          </div>
        </section>
      </form>
    </div>
  );
}
