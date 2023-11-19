// import React from "react";

import { useState } from "react";
import ProblemsInput from "../components/ask/Problems";
import Suggestions from "../components/ask/Suggestions";
import Title from "../components/ask/Title";
import TitleInput from "../components/ask/TitleInput";
import TryInput from "../components/ask/Try";

export default function AddQuestion() {
  const [inputSwitch, setInputSwitch] = useState(0);
  // console.log(inputSwitch);
  return (
    <div className="suggestions p-4 flex flex-col gap-4 ">
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
          <TryInput setInputSwitch={setInputSwitch} inputSwitch={inputSwitch} />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        {inputSwitch == 3 && <Title infoNo={inputSwitch} />}
        <div>
          <TitleInput
            setInputSwitch={setInputSwitch}
            inputSwitch={inputSwitch}
          />
        </div>
      </section>{" "}
      <section className="flex flex-col gap-4">
        {inputSwitch == 3 && <Title infoNo={inputSwitch} />}
        <div>
          <TitleInput
            setInputSwitch={setInputSwitch}
            inputSwitch={inputSwitch}
          />
        </div>
      </section>
    </div>
  );
}
