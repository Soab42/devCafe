import { formatDate } from "../../utils/Date";

export default function Author({ author, time, ans }) {
  return (
    <div className="flex justify-end pr-10  gap-2 backdrop-blur-lg">
      <div className="w-10 h-10 bg-black flex-center">
        <img src={author.photoURL} alt={author.name} />
      </div>
      <div>
        <div className="text-blue-400 font-bold">{author.name}</div>
        <div className="text-gray-500">
          {ans ? "Answered On" : "Asked On"}
          <span className="text-blue-400/70 pl-1">{formatDate(time)} </span>
        </div>
      </div>
    </div>
  );
}
