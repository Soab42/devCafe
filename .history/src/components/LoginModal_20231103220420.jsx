import { useState } from "react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import firebase from "../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default function LoginModal({ show }) {
  const [currentUser, setCurrentUser] = useState();
  // const db = ;
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setCurrentUser({ token, user });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGitHubSignIn = () => {};
  return (
    show && (
      <div className="absolute h-[10rem] w-[14rem] right-0 top-8 flex items-center p-4 bg-blue-500/10 rounded-md backdrop-blur-sm z-50 font-sans text-xs flex-col fade">
        <div className="title bg-blue-600/20 rounded-md text-sm w-full text-center p-1 text-gray-900 shadow-xl shadow-black/20">
          Login With Account
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <button className="btn hover" onClick={handleGoogleSignIn}>
            <span className="text-xl text-green-600">
              <AiFillGoogleCircle />
            </span>
            Sign In With Google
          </button>
          <button onClick={handleGitHubSignIn} className="btn hover">
            <span className="text-xl text-black">
              <AiFillGithub />
            </span>
            Sign In With Github
          </button>
        </div>
      </div>
    )
  );
}
