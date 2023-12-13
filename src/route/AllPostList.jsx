import { useDispatch, useSelector } from "react-redux";
import Search from "../components/form/Search";
import SinglePostCard from "../components/post/SinglePostCard";
import Pagination from "../components/utils/Pagination";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { DB } from "../firebase";
import { addAllData } from "../feature/data/allDataSlice";
import { addLoading, removeLoading } from "../feature/loading/loadingSlice";

export default function AllPostList() {
  const search = useSelector((state) => state.filter.search) ?? "";
  // console.log(search);
  const [postData, setPostData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const perPage = 5;
  const dispatch = useDispatch();
  useEffect(() => {
    function getData() {
      dispatch(addLoading());
      const dataRef = ref(DB, "devcafe/data");
      const postsArray = [];

      onValue(dataRef, (snapshot) => {
        // Check if there is any data in the snapshot
        if (snapshot.exists()) {
          const data = snapshot.val();

          // Iterate through user IDs
          Object.keys(data).forEach((userId) => {
            // Check if the user has a "post" node
            if (data[userId].post) {
              // Iterate through posts for the current user
              Object.keys(data[userId].post).forEach((postId) => {
                const postObject = data[userId].post[postId];
                // Add user ID and post ID to the postsArray
                postsArray.push({ userId, postId, ...postObject });
              });
            }
          });

          // At this point, postsArray contains all posts from all user IDs
          setPostData(postsArray);
          dispatch(addAllData(postsArray));
          dispatch(removeLoading());
        } else {
          console.log("No data found");
        }
      });
    }
    getData();
  }, []);
  const filterData = postData.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.includes(search.toLowerCase())
    // post.tags.includes("mongo")
  );

  let content;

  if (loading) {
    content = "loading..";
  } else if (!loading && !search) {
    content = (
      <>
        <div className="flex flex-col gap-2 my-2 h-[78vh] overflow-hidden">
          {postData.slice((page - 1) * perPage, page * perPage).map((data) => (
            <SinglePostCard data={data} key={data.title} />
          ))}
        </div>
        <Pagination
          postsLength={postData.length}
          totalPage={Math.ceil(postData.length / perPage)}
          // totalPage={10}
          pageNo={page}
          setPage={setPage}
          perPage={perPage}
        />
      </>
    );
  } else if (!loading && search) {
    content = (
      <div className="flex flex-col gap-2 mt-2 h-[78vh]">
        {filterData.map((data) => (
          <SinglePostCard data={data} key={data.title} />
        ))}
      </div>
    );
  }

  return (
    <div className="">
      <h1 className=" fixed title bg-red-200/10 text-center font-bold text-[#936648] tracking-[.61rem] flex-center relative">
        All Questions
        <Search />
      </h1>
      {content}
    </div>
  );
}
