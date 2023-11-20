import { useSelector } from "react-redux";
import Search from "../components/components/Search";
import SinglePostCard from "../components/post/SinglePostCard";
import { postData } from "../data";
export default function AllPostList() {
  const search = useSelector((state) => state.filter.search) ?? "";
  // console.log(search);
  return (
    <div>
      <h1 className="title bg-red-200/10 text-center font-bold text-[#936648] tracking-[.61rem] flex-center relative">
        All Questions
        <Search />
      </h1>

      <div className="flex flex-col gap-2 mt-2">
        {postData
          .filter(
            (post) =>
              post.title.toLowerCase().includes(search.toLowerCase()) ||
              post.tags.includes(search.toLowerCase()) ||
              post.post.includes(search.toLowerCase())
            // post.tags.includes("mongo")
          )
          .map((data) => (
            <SinglePostCard data={data} key={data.title} />
          ))}
      </div>
    </div>
  );
}
