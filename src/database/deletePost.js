import { ref, remove } from "firebase/database";
import { DB } from "../firebase";

export const deletePost = (post) => {
  console.log(post);
  return new Promise((resolve, reject) => {
    // Create a reference to the location where you want to update the data
    const dataRef = ref(
      DB,
      "devcafe/data/" + post.userId + "/post/" + post.postId
    );
    remove(dataRef)
      .then(() => {
        console.log("Data deleted successfully");
        resolve(true);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        reject(error); // Re-throw the error to propagate it to the caller
      });
  });
};
