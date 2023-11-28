import { useDispatch, useSelector } from "react-redux";
import Search from "../components/components/Search";
import SinglePostCard from "../components/post/SinglePostCard";

import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { DB } from "../firebase";
import { addAllData } from "../feature/data/allDataSlice";
export default function AllPostList() {
  const search = useSelector((state) => state.filter.search) ?? "";
  // console.log(search);
  const [postData, setPostData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    function getData() {
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
        } else {
          console.log("No data found");
        }
      });
    }
    getData();
  }, []);
  return (
    <div className="h-[92vh]">
      <h1 className="title bg-red-200/10 text-center font-bold text-[#936648] tracking-[.61rem] flex-center relative">
        All Questions
        <Search />
      </h1>

      <div className="flex flex-col gap-2 mt-2">
        {postData
          .filter(
            (post) =>
              post.title.toLowerCase().includes(search.toLowerCase()) ||
              post.tags.includes(search.toLowerCase())
            // post.tags.includes("mongo")
          )
          .map((data) => (
            <SinglePostCard data={data} key={data.title} />
          ))}
      </div>
    </div>
  );
}
