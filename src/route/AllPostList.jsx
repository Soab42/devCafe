import Search from "../components/components/Search";
import SinglePostCard from "../components/post/SinglePostCard";

export default function AllPostList() {
  return (
    <div>
      <h1 className="title bg-red-200/10 text-center font-bold text-[#936648] tracking-[.61rem] flex-center relative">
        All Questions
        <Search />
      </h1>

      <div className="flex flex-col gap-2 mt-2">
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
