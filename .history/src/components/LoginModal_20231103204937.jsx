import { useState } from "react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
export default function LoginModal({ show }) {
  return (
    show && (
      <div className="absolute h-[10rem] md:w-[20rem] w-[14rem] right-0 top-8 flex items-center p-4 bg-slate-50/10 backdrop-blur-sm z-50 font-sans text-xs flex-col">
        <div className="title bg-black/30 rounded-sm w-full text-center p-1 text-blue-600">
          Login With Account
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <div className="flex-center gap-1 text-slate-400 bg-sky-900 p-2 rounded-full cursor-pointer hover">
            <span className="text-xl text-green-600">
              <AiFillGoogleCircle />
            </span>
            Sign In With Google
          </div>
          <div className="flex-center gap-1 bg-sky-900 p-2 rounded-full cursor-pointer  text-slate-400 hover">
            <span className="text-xl text-black">
              <AiFillGithub />
            </span>
            Sign In With Github
          </div>
        </div>
      </div>
    )
  );
}
