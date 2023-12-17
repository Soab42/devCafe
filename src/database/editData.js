import { get, onValue, ref, serverTimestamp, update } from "firebase/database";
import { DB } from "../firebase";

export const editData = (data, user, singleData) => {
  // Create a reference to the location where you want to update the data
  const dataRef = ref(
    DB,
    "devcafe/data/" + user.id + "/post/" + singleData?.postId
  );
  // console.log(data);
  const updatedData = {
    tags: data.tags,
    title: data.title,
    post: { problem: data.problems, try: data.try },
    lastEditedTime: serverTimestamp(),
  };

  // Use set to update the data at the specified location
  return update(dataRef, updatedData)
    .then(async () => {
      const updateData = {
        ...singleData,
        ...updatedData,
        lastEditedTime: Date.now(),
      };
      console.log(updateData);
      return updateData;
    })
    .catch((error) => {
      console.error("Error updating data:", error);
      throw error; // Re-throw the error to propagate it to the caller
    });
};
