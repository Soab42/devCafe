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
          let allPosts = [];
          const postData = snapshot.val();
          Object.keys(postData)
            .map((key) => postData[key])
            .map((value) =>
              Object.keys(value.post).map((key) =>
                allPosts.push(value.post[key])
              )
            );
          // data.map((value) => console.log(value.post));
          // console.log("data", data);
          resolve(allPosts);
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
