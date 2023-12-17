import React, { useState } from "react";

export default function Problems({
  setInputSwitch,
  inputSwitch,
  initialValue,
}) {
  const [problem, setProblems] = useState(initialValue);
  return (
    <div
      className={`backdrop-blur-xl shadow-xl p-2 flex flex-col gap-2 rounded-sm ${
        inputSwitch < 1 && "opacity-30"
      }`}
    >
      <div>
        <p className="text-sm font-semibold text-orange-600/70">
          What are the details of your problem?
        </p>
        <p className="text-slate-600 text-[11px]">
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </p>
      </div>
      <textarea
        type="text"
        name="problems"
        onChange={(e) => setProblems(e.target.value)}
        disabled={inputSwitch < 1}
        value={initialValue}
        className="w-full h-24 bg-inherit ring-1 rounded-md outline-none text-slate-300/70  p-2"
      />

      {inputSwitch === 1 && (
        <button
          className="px-4 p-1 rounded-md bg-green-600/40 opacity-80 text-slate-300/80 hover:opacity-100 duration-400 w-32"
          onClick={() => setInputSwitch(2)}
          disabled={!problem}
        >
          Next
        </button>
      )}
    </div>
  );
}
