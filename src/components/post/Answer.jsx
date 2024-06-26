import Comments from "./Comments";
import Author from "./Author";
import AnswerForm from "../form/AnswerForm";
import TextWithMarkup from "../code/TextWithMarkup";
import { useState } from "react";

export default function Answer({ answer, status }) {
  // Object.values(answer).map((ans) => console.log(ans));
  const [showAnswer, setShowAnswer] = useState(4);

  return (
    <div className="answer flex flex-col gap-1 text-slate-400">
      <div
        className="title shadow-sm p-1 shadow-sky-500/20 pl-4 flex 
  items-center"
      >
        Answer
      </div>
      {Object?.keys(answer)
        ?.slice(-showAnswer)
        .map((key, i) => {
          return (
            <div key={answer[key]?.time} className="flex flex-col gap-1 mt-1">
              <div className="font-bold text-xl">#{i + 1}</div>
              {/* <div>{ans.text}</div> */}
              <TextWithMarkup text={answer[key]?.text} />
              <div className="h-2"></div>
              <Comments
                comments={answer[key]?.comment}
                answerId={key}
                status={status}
              />
              <div className="h-2"></div>

              <div>
                <Author
                  author={answer[key]?.author}
                  time={answer[key]?.time}
                  icon={answer[key]?.icon}
                  ans={true}
                />
              </div>
              <hr />
              <div className="h-5"></div>
            </div>
          );
        })}
      {answer && Object?.values(answer).length > showAnswer && (
        <button onClick={() => setShowAnswer((prev) => prev + 4)}>
          show more answer
        </button>
      )}
      <div className="anserForm">{!status && <AnswerForm />}</div>
    </div>
  );
}
