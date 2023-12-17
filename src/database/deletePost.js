import { ref, remove } from "firebase/database";
import { DB } from "../firebase";

export const deletePost = async (user, postId) => {
  // Create a reference to the location where you want to update the data
  const dataRef = ref(DB, "devcafe/data/" + user.id + "/post/" + postId);

  // Use set to update the data at the specified location
  return remove(dataRef)
    .then(async () => {
      console.log("Data closed successfully");
      return true;
    })
    .catch((error) => {
      console.error("Error updating data:", error);
      throw error; // Re-throw the error to propagate it to the caller
    });
};
