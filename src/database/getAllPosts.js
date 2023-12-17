// import { onValue, ref } from "firebase/database";
// import { DB } from "../firebase";

// export function getAllPosts() {
//   const dataRef = ref(DB, "devcafe/data");

//   onValue(dataRef, (snapshot) => {
//     // Check if there is any data in the snapshot
//     if (snapshot.exists()) {
//       const data = snapshot.val();
//       return data;
//     } else {
//       console.log("No data found");
//     }
//   });
// }

import { ref, onValue } from "firebase/database";
import { DB } from "../firebase";

export const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    // Create a reference to the location where you want to get the data
    const dataRef = ref(DB, `devcafe/data`);

    // Listen for changes to the data at this location
    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        if (snapshot.exists()) {
            let allPosts = 
          const postData = snapshot.val();


          resolve(Object.values(postData));
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
