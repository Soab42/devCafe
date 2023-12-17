import { ref, push, update, serverTimestamp } from "firebase/database";
import { DB } from "../firebase";
import { getSinglePost } from "../database/getSinglePost";
export const addData = async (data, user) => {
  // Create a reference to the location where you want to push the data
  const dataRef = ref(DB, "devcafe/data/" + user.id + "/post");
  // console.log(data);
  const post = {
    tags: data.tags,
    title: data.title,
    post: { problem: data.problems, try: data.try },
    answer: [],
    comment: [],
    author: user,
    time: serverTimestamp(),
  };
  // Push the data to the specified location
  const newPostRef = await push(dataRef, post);
  console.log("uid", newPostRef);
  const newDataRef = ref(
    DB,
    "devcafe/data/" + user.id + "/post/" + newPostRef.key
  );

  update(newDataRef, { postId: newPostRef.key, userId: user.id });
  const uploadedData = getSinglePost(user?.id, newPostRef?.key);
  return uploadedData;
};
