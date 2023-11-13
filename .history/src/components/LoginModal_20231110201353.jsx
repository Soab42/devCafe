/* eslint-disable react/prop-types */
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
import { useEffect, useRef, useState } from "react";
// export default function LoginModal({ show }) {
//   const [value, setValue] = useLocalStorage("Auth", undefined);
//   const dispatch = useDispatch();
//   const handleGoogleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(Auth, provider)
//       .then((result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;

//         dispatch(
//           userLoggedIn({
//             accessToken: token,
//             user: {
//               name: user.displayName,
//               id: user.uid,
//               email: user.email,
//               photoURL: user.photoURL,
//             },
//           })
//         );
//         setValue({
//           accessToken: token,
//           user: {
//             name: user.displayName,
//             id: user.uid,
//             email: user.email,
//             photoURL: user.photoURL,
//           },
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const handleGitHubSignIn = () => {
//     const provider = new GithubAuthProvider();

//     signInWithPopup(Auth, provider)
//       .then((result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;

//         dispatch(
//           userLoggedIn({
//             accessToken: token,
//             user: {
//               name: user.displayName,
//               id: user.uid,
//               email: user.email,
//               photoURL: user.photoURL,
//             },
//           })
//         );
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   useEffect(() => {
//     if (value) dispatch(userLoggedIn(value));
//   }, [value, dispatch]);
//   return (
//     show && (
//       <div className="absolute h-[10rem] w-[14rem] right-0 top-8 flex items-center p-4 bg-blue-500/10 rounded-md z-50 font-sans text-xs flex-col fade backdrop-blur-sm">
//         <div className="title bg-blue-600/20 rounded-md text-sm w-full text-center p-1 text-gray-900 shadow-xl shadow-black/20">
//           Login With Account
//         </div>
//         <div className="flex flex-col gap-2 mt-4">
//           <div className="btn hover" onClick={handleGoogleSignIn}>
//             <span className="text-xl text-green-600">
//               <AiFillGoogleCircle />
//             </span>
//             Sign In With Google
//           </div>
//           <div onClick={handleGitHubSignIn} className="btn hover">
//             <span className="text-xl text-black">
//               <AiFillGithub />
//             </span>
//             Sign In With Github
//           </div>
//         </div>
//       </div>
//     )
//   );
// }

const Terminal = ({ show }) => {
  const [value, setValue] = useLocalStorage("Auth", undefined);
  const [login, SetLogin] = useState();
  const dispatch = useDispatch();
  // Create a ref for the input element
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
    show && (
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
                ref={inputRef}
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
