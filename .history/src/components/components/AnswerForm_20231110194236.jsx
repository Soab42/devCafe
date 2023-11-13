import React from "react";

export default function AnswerForm() {
  return (
    <div>
      <textarea className="w-full h-20 bg-inherit ring-1 p-1" />
      <button
        type="submit"
        className="w-20 bg-blue-500/60 text-gray-800 h-8 mt-1 hover:text-black"
      >
        Submit
      </button>
    </div>
  );
}
