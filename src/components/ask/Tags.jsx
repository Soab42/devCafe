import React, { useState } from "react";
import { allTags } from "../../utils/tags";
export default function TagsInput({ setInputSwitch, inputSwitch }) {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const selectTag = (tag) => {
    setTags((prev) => [...prev, tag]);
    setTag("");
  };
  const removeTag = (tagToRemove) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

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
      <div className="flex-center ring-1 rounded relative min-w-fit">
        <span className="flex ml-1 gap-1 min-w-fit">
          {tags.map((tag) => (
            <div
              className="ring-1 p-1 px-2 rounded-sm hover:bg-red-500 cursor-not-allowed bg-sky-400 capitalize min-w-fit"
              key={tag}
              name="tags"
              onClick={() => removeTag(tag)}
            >
              {tag}
            </div>
          ))}
        </span>
        <input
          type="text"
          onChange={(e) => setTag(e.target.value)}
          value={tag}
          disabled={inputSwitch < 3}
          className="w-full h-8 bg-inherit rounded-md outline-none text-slate-300/70 pl-4 "
        />
        {tag && (
          <div className="absolute p-2 max-h-24 rounded-md overflow-scroll bg-[#0f5443] w-full top-10 z-50 flex flex-wrap gap-1">
            {allTags
              .filter((ptag) => ptag.includes(tag))
              .map((tag) => (
                <span
                  key={tag}
                  className="p-1 px-2 bg-lime-400 rounded-md cursor-pointer"
                  onClick={() => selectTag(tag)}
                >
                  {tag}
                </span>
              ))}
          </div>
        )}
      </div>

      {inputSwitch == 3 && (
        <button
          className="px-4 p-1 rounded-md bg-green-600/40 opacity-80 text-slate-300/80 hover:opacity-100 duration-400 w-32"
          onClick={() => setInputSwitch(4)}
          disabled={tags.length <= 0}
        >
          Next
        </button>
      )}
    </div>
  );
}
