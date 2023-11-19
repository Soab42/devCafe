import React from "react";

export default function Try({ setInputSwitch, inputSwitch }) {
  return (
    <div className="backdrop-blur-xl shadow-xl p-2 flex flex-col gap-2 rounded-sm">
      <div>
        <p className="text-sm font-semibold text-orange-600/70">
          What did you try and what were you expecting?
        </p>
        <p className="text-slate-600 text-[11px]">
          Describe what you tried, what you expected to happen, and what
          actually resulted. Minimum 20 characters.
        </p>
      </div>
      <textarea
        type="text"
        className="w-full h-24 bg-inherit ring-1 rounded-md outline-none text-slate-300/70 pl-4 capitalize"
      />

      {inputSwitch == 2 && (
        <button
          className="px-4 p-1 rounded-md bg-green-600/40 opacity-80 text-slate-300/80 hover:opacity-100 duration-400 w-32"
          onClick={() => setInputSwitch(2)}
        >
          Next
        </button>
      )}
    </div>
  );
}
