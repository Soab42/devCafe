import Comments from "./comments";
import Author from "./Author";
import AnswerForm from "../components/AnswerForm";
import TextWithMarkup from "./TextWithMarkup";

export default function Answer({ answer }) {
  // Object.values(answer).map((ans) => console.log(ans));
  return (
    <div className="answer flex flex-col gap-1 text-slate-400">
      <div
        className="title shadow-sm p-1 shadow-sky-500/20 pl-4 flex 
  items-center"
      >
        Answer
      </div>
      {Object?.keys(answer)?.map((key, i) => {
        return (
          <div key={answer[key].time} className="flex flex-col gap-1 mt-1">
            <div className="font-bold text-xl">#{i + 1}</div>
            {/* <div>{ans.text}</div> */}
            <TextWithMarkup text={answer[key].text} />
            <div className="h-2"></div>
            <Comments comments={answer[key].comment} answerId={key} />
            <div className="h-2"></div>

            <div>
              <Author
                author={answer[key].author}
                time={answer[key].time}
                icon={answer[key].icon}
                ans={true}
              />
            </div>
            <hr />
            <div className="h-5"></div>
          </div>
        );
      })}
      <div className="anserForm">
        <AnswerForm />
      </div>
    </div>
  );
}
