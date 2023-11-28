import { ref, push, serverTimestamp } from "firebase/database";
import { DB } from "../firebase";

export const addComment = (user, userId, postId, data, answerId) => {
  console.log(answerId);
  let dataRef;
  // Create a reference to the location where you want to push the data
  if (!answerId) {
    dataRef = ref(DB, `devcafe/data/${userId}/post/${postId}/comment`);
  } else {
    dataRef = ref(
      DB,
      `devcafe/data/${userId}/post/${postId}/answer/${answerId}/comment`
    );
  }
  // console.log(data);
  const post = {
    text: data,
    author: user,
    time: serverTimestamp(),
  };
  // Push the data to the specified location
  const newPostRef = push(dataRef, post);

  //   console.log("Data pushed:", data);
  //   console.log("New post reference:", newPostRef.key);
  return post;
};
