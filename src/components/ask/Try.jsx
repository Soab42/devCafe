import React, { useRef } from "react";

export default function Try({ setInputSwitch, inputSwitch }) {
  const inputRef = useRef();
  const handleAddText = () => {
    // Add your desired text at the end of the current value
    inputRef.current.value += `
      ##
          // paste your code here.....
      ##`;
  };
  return (
    <div
      className={`backdrop-blur-xl shadow-xl p-2 flex flex-col gap-2 rounded-sm ${
        inputSwitch < 2 && "opacity-30"
      }`}
    >
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
        name="try"
        ref={inputRef}
        disabled={inputSwitch < 2}
        className="w-full h-24 bg-inherit ring-1 rounded-md outline-none text-slate-300/70  p-2"
      />

      {inputSwitch == 2 && (
        <div className="flex justify-between">
          <button
            className="px-4 p-1 rounded-md bg-green-600/40 opacity-80 text-slate-300/80 hover:opacity-100 duration-400 w-32"
            onClick={() => setInputSwitch(3)}
          >
            Next
          </button>
          <div
            className="flex-center gap-2 text-center hover:bg-purple-400/10 px-2 cursor-pointer"
            onClick={handleAddText}
          >
            ##<code className="bg-slate-300/50 px-2 text-black">code</code>##
          </div>
        </div>
      )}
    </div>
  );
}
