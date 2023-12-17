import { useDispatch, useSelector } from "react-redux";
import Search from "../components/form/Search";
import SinglePostCard from "../components/post/SinglePostCard";
import Pagination from "../components/utils/Pagination";
import { useEffect, useState } from "react";
import { addAllData } from "../feature/data/allDataSlice";
import { addLoading, removeLoading } from "../feature/loading/loadingSlice";
import { getAllPosts } from "../database/getAllPosts";

export default function AllPostList() {
  const search = useSelector((state) => state.filter.search) ?? "";
  const user = useSelector((state) => state.users.user);
  // console.log(search);
  const [postData, setPostData] = useState([]);
  const [page, setPage] = useState(1);
  const loading = useSelector((state) => state.loading);
  const perPage = 10;
  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      dispatch(addLoading());
      const postsArray = await getAllPosts();
      // console.log(postsArray);
      if (postsArray) {
        setPostData(postsArray);
        dispatch(addAllData(postsArray));
      }

      dispatch(removeLoading());
    }
    getData();
  }, []);

  const filterData = postData.filter(
    (post) =>
      post?.title?.toLowerCase().includes(search?.toLowerCase()) ||
      post?.tags?.includes(search.toLowerCase())
    // post.tags.includes("mongo")
  );

  let content;

  if (loading) {
    content = <div className="flex-center h-[90vh] text-3xl flex-col"></div>;
  } else if (!loading && !search && postData?.length == 0) {
    content = (
      <div className="flex-center h-[90vh] text-3xl flex-col">
        <p className="text-sky-600 capitalize">No Data Available!</p>
        <span className="text-lg mt-4 text-slate-600">
          If You Have Any Question, Please! {!user?.id && "Login And"} Ask A
          Question.
        </span>
      </div>
    );
  } else if (!loading && !search && postData?.length > 0) {
    content = (
      <>
        <div className="flex flex-col gap-2 my-2 overflow-scroll" key={"main"}>
          {postData?.slice((page - 1) * perPage, page * perPage).map((data) => (
            <SinglePostCard data={data} key={data?.title} />
          ))}

          <Pagination
            postsLength={postData?.length}
            totalPage={Math.ceil(postData?.length / perPage)}
            // totalPage={10}
            pageNo={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </>
    );
  } else if (!loading && search) {
    content = (
      <div className="grid gap-2 mt-2">
        {filterData?.map((data) => (
          <SinglePostCard data={data} key={data.title} />
        ))}
      </div>
    );
  }

  return (
    <div className="">
      <h1 className=" title bg-red-200/10 text-center font-bold text-[#936648] tracking-[.61rem] flex-center relative">
        All Questions
        <Search />
      </h1>
      {content}
    </div>
  );
}
