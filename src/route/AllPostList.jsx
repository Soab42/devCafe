import { AiOutlineSearch } from "react-icons/ai";
import SinglePostCard from "../components/post/SinglePostCard";

export default function AllPostList() {
  return (
    <div>
      <h1 className="title bg-red-200/10 text-center font-bold text-[#936648] tracking-[.61rem] flex-center relative">
        All Questions
        <div className="flex absolute right-10 text-xl text-sky-500 ">
          <AiOutlineSearch />
        </div>
      </h1>

      <div className="flex flex-col gap-2 mt-2 overflow-scroll h-[85vh] pb-10">
        <SinglePostCard />
        <SinglePostCard />
        <SinglePostCard />
        <SinglePostCard />
        <SinglePostCard />
        <SinglePostCard />
      </div>
    </div>
  );
}
