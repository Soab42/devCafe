import { ref, serverTimestamp, update } from "firebase/database";
import { DB } from "../firebase";

export const closePost = async (user, postId, originalData) => {
  // Create a reference to the location where you want to update the data
  const dataRef = ref(DB, "devcafe/data/" + user.id + "/post/" + postId);
  const updateData = {
    closed: !originalData?.closed,
    closingTime: serverTimestamp(),
  };

  // Use set to update the data at the specified location
  return update(dataRef, updateData)
    .then(async () => {
      console.log(
        `Data ${originalData?.closed ? "open" : "close"}  successfully`
      );
      return true;
    })
    .catch((error) => {
      console.error("Error updating data:", error);
      throw error; // Re-throw the error to propagate it to the caller
    });
};
