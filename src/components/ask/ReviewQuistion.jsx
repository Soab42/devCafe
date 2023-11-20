import React from "react";

export default function ReviewInput({ setInputSwitch, inputSwitch }) {
  return (
    <div
      className={`backdrop-blur-xl shadow-xl p-2 flex flex-col gap-2 rounded-sm ${
        inputSwitch < 4 && "opacity-30"
      }`}
    >
      <div>
        <p className="text-sm font-semibold text-orange-600/70">
          Review questions already on DevCafe to see if your question is a
          duplicate.
        </p>
        <p className="text-slate-600 text-[11px]">
          Clicking on these questions will open them in a new tab for you to
          review. Your progress here will be saved so you can come back and
          continue.
        </p>
      </div>
      <input
        disabled={inputSwitch < 4}
        type="text"
        name="duplicate"
        className="w-full h-8 bg-inherit ring-1 rounded-md outline-none text-slate-300/70 pl-4 capitalize"
      />

      {inputSwitch == 4 && (
        <button
          className="px-4 p-1 rounded-md bg-green-600/40 opacity-80 text-slate-300/80 hover:opacity-100 duration-400 w-44"
          onClick={() => setInputSwitch(5)}
        >
          Review Your Question
        </button>
      )}
    </div>
  );
}
