import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DB } from "../../firebase";
import Search from "../components/Search";
import SinglePostCard from "./SinglePostCard";
export default function UserAllPostList() {
  const search = useSelector((state) => state.filter.search) ?? "";
  const user = useSelector((state) => state.users.user);
  // console.log(search);
  const [postData, setPostData] = useState([]);
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
            if (userId === user.id) {
              if (data[userId].post) {
                // Iterate through posts for the current user
                Object.values(data[userId].post).forEach((postObject) => {
                  postsArray.push(postObject);
                });
              }
            }
          });

          // At this point, postsArray contains all posts from all user IDs
          setPostData(postsArray);
        } else {
          console.log("No data found");
        }
      });
    }
    getData();
  }, []);
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
