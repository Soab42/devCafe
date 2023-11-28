import { ref, push, serverTimestamp } from "firebase/database";
import { DB } from "../firebase";

export const addAnswer = (user, userId, postId, data) => {
  // Create a reference to the location where you want to push the data
  const dataRef = ref(DB, `devcafe/data/${userId}/post/${postId}/answer`);
  // console.log(data);
  const post = {
    text: data,
    comment: [],
    author: user,
    time: serverTimestamp(),
  };
  // Push the data to the specified location
  const newPostRef = push(dataRef, post);

  //   console.log("Data pushed:", data);
  //   console.log("New post reference:", newPostRef.key);
  return post;
};
