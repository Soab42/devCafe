import { useState } from "react";

export default function LoginModal({ show }) {
  return (
    show && (
      <div className="absolute h-[10rem] md:w-[20rem] w-[14rem] right-0 top-8 flex items-center p-4 bg-slate-50/10 backdrop-blur-sm z-50 font-sans text-xs flex-col">
        <div className="title bg-black/30 rounded-sm w-full text-center p-1">
          Login With Social
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <div>Sign In With Google</div>
          <div>Sign In With Github</div>
        </div>
      </div>
    )
  );
}
