/* eslint-disable react/prop-types */
import { Auth } from "../firebase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../feature/user/authSlice";
import useLocalStorage from "../common/hooks/useLocalStorage";
import { useEffect, useState } from "react";

const Terminal = () => {
  const [value, setValue] = useLocalStorage("Auth", undefined);
  const [login, SetLogin] = useState();
  const mood = useSelector((state) => state.mood);
  const dispatch = useDispatch();
  console.log(mood);
  // Create a ref for the input element

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
  const handleLogin = (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      if (login == "google") {
        handleGoogleSignIn();
      } else if (login == "github") {
        handleGitHubSignIn();
      }
    }
  };
  useEffect(() => {
    if (value) dispatch(userLoggedIn(value));
  }, [value, dispatch]);
  return (
    mood && (
      <div className="bg-gray-900 p-0.5 absolute top-[24px] right-0 z-30 fade">
        <div className="bg-black px-2 gap-2 shadow-lg">
          <pre
            className="text-sky-600 flex flex-col h-16 w-36
         text-[8px] gap-0"
          >
            <label>$ Enter your login provider:</label>
            <div>
              <span>$</span>
              <input
                type="text"
                name=""
                id=""
                placeholder="google/github"
                onChange={(e) => SetLogin(e.target.value)}
                onKeyUp={handleLogin}
                className="bg-inherit h-5 pl-1 outline-none terminal"
              />
            </div>
          </pre>
        </div>
      </div>
    )
  );
};

export default Terminal;
