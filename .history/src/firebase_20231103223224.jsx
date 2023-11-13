// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.REACT_APP_FIREBASE_APP_ID,
//   authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: import.meta.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDERID,
//   appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
// };

// export const firebase = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCg1Osn3AL3oI-u8QdQAqdjL_olqHgPreM",
  authDomain: "syfuddhin2k23.firebaseapp.com",
  databaseURL: "https://syfuddhin2k23-default-rtdb.firebaseio.com",
  projectId: "syfuddhin2k23",
  storageBucket: "syfuddhin2k23.appspot.com",
  messagingSenderId: "404474690190",
  appId: "1:404474690190:web:e6ebe3d235fa46330367df",
  measurementId: "G-3WDSQQNXVB",
};

// Initialize Firebase
export const App = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const DB = getDatabase(app);
