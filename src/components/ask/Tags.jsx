import React from "react";

export default function TagsInput({ setInputSwitch, inputSwitch }) {
  return (
    <div
      className={`backdrop-blur-xl shadow-xl p-2 flex flex-col gap-2 rounded-sm ${
        inputSwitch < 3 && "opacity-30"
      }`}
    >
      <div>
        <p className="text-sm font-semibold text-orange-600/70">Tags</p>
        <p className="text-slate-600 text-[11px]">
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </p>
      </div>
      <input
        type="text"
        name="tags"
        disabled={inputSwitch < 3}
        className="w-full h-8 bg-inherit ring-1 rounded-md outline-none text-slate-300/70 pl-4 "
      />

      {inputSwitch == 3 && (
        <button
          className="px-4 p-1 rounded-md bg-green-600/40 opacity-80 text-slate-300/80 hover:opacity-100 duration-400 w-32"
          onClick={() => setInputSwitch(4)}
        >
          Next
        </button>
      )}
    </div>
  );
}
