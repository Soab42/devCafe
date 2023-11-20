import { IoPencilOutline } from "react-icons/io5";
import { TbBellRinging2Filled } from "react-icons/tb";

export default function Title({ infoNo }) {
  return (
    <div className="backdrop-blur-xl shadow-xl lg:absolute lg:text-justify tracking-tight lg:w-[15rem] -right-[15.5rem] z-50 lg:border-[1px] border-blue-500/20">
      <div className="p-2 bg-slate-800/60 border-b-[1px] text-orange-600/80 border-black">
        {titleInfo[infoNo].name}
      </div>
      <div className="flex p-2 items-center gap-2">
        {/* pen svg */}
        <div className="text-orange-600 text-2xl">
          {infoNo !== 4 ? <IoPencilOutline /> : <TbBellRinging2Filled />}
        </div>
        {/* content */}
        <div className="text-slate-300/60 text-[10px]">
          <p>{titleInfo[infoNo].message}</p>
        </div>
      </div>
    </div>
  );
}

const titleInfo = [
  {
    name: "Writing a good title",
    message:
      "Your title should summarize the problem.You might find that you have a better idea of your title after writing out the rest of the question.",
  },
  {
    name: "Introduce the problem",
    message:
      "Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.",
  },
  {
    name: "Expand on the problem",
    message:
      "Show what you’ve tried, tell us what happened, and why it didn’t meet your needs. Not all questions benefit from including code, but if your problem is better understood with code you’ve written, you should include a minimal, reproducible example. Please make sure to post code and errors as text directly to the question (and not as images), and format them appropriately.",
  },
  {
    name: "Adding tags",
    message:
      "Tags help ensure that your question will get attention from the right people. Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used.",
  },
  {
    name: "Make sure we don’t already have an answer for your question",
    message:
      "DevCafe is a huge database of knowledge. Please make sure your question isn’t already answered before posting, or your question might be closed as a duplicate.",
  },
];
