import { ref, onValue } from "firebase/database";
import { DB } from "../firebase";

export const getSinglePost = (userId, postId) => {
  return new Promise((resolve, reject) => {
    // Create a reference to the location where you want to get the data
    const dataRef = ref(DB, `devcafe/data/${userId}/post/${postId}`);

    // Listen for changes to the data at this location
    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const postData = snapshot.val();
          resolve(postData);
        } else {
          // Handle the case where the data doesn't exist
          resolve(null);
        }
      },
      (error) => {
        // Handle any errors that occur during the onValue listener
        reject(error);
      }
    );

    // You can return the unsubscribe function if you want to stop listening to changes
    // return unsubscribe;
  });
};
