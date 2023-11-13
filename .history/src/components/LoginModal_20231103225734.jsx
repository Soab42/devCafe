import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { Auth } from "../firebase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../feature/user/authSlice";
import useLocalStorage from "../common/hooks/useLocalStorage";
import { useEffect } from "react";
export default function LoginModal({ show }) {
  const [value, setValue] = useLocalStorage("Auth", undefined);
  const dispatch = useDispatch();
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(Auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        dispatch(
          userLoggedIn({
            accessToken: token,
            user: {
              name: user.displayName,
              id: user.uid,
              email: user.email,
              photoURL: user.photoURL,
            },
          })
        );
        setValue({
          accessToken: token,
          user: {
            name: user.displayName,
            id: user.uid,
            email: user.email,
            photoURL: user.photoURL,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGitHubSignIn = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(Auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        dispatch(
          userLoggedIn({
            accessToken: token,
            user: {
              name: user.displayName,
              id: user.uid,
              email: user.email,
              photoURL: user.photoURL,
            },
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {}, [value]);
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
