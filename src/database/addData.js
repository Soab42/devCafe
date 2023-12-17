import { ref, push, update, serverTimestamp } from "firebase/database";
import { DB } from "../firebase";

export const addData = (data, user) => {
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
  const newPostRef = push(dataRef, post);
  const newDataRef = ref(DB, "devcafe/data/" + user.id + "/post/" + newPostRef);

  update(newDataRef, { postId: newPostRef });

  //   console.log("Data pushed:", data);
  //   console.log("New post reference:", newPostRef.key);
  return { ...post, time: Date.now(), postId: newPostRef };
};
