import SinglePostCard from "./post/SinglePostCard";

export default function AllPostList() {
  return (
    <div>
      <h1 className="title bg-red-200/10 text-center font-bold tracking-[.61rem]">
        All Questions
      </h1>
      <div className="flex flex-col gap-2 mt-2">
        <SinglePostCard />
        <SinglePostCard />
        <SinglePostCard />
        <SinglePostCard />
      </div>
    </div>
  );
}
