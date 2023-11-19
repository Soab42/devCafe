import React from "react";

export default function Suggestions() {
  return (
    <div className="">
      <div className="text-lg text-sky-600 font-bold mb-5">
        <h1 className="fs-headline1 fw-bold mt24">Ask a public question</h1>
      </div>

      <div className="bg-green-600/40 text-slate-300/70 px-4 py-3 rounded-xl">
        <div>
          <h2 className="text-sm mb-2 text-orange-600/80 font-semibold">
            Writing a good question
          </h2>
          <p className="mb-2">
            You’re ready to ask development related question and this form will
            help guide you through the process.
          </p>

          <h5 className="text-sm mb-2 text-orange-600/80 font-semibold">
            Steps
          </h5>
          <ul className="list-disc pl-8">
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
