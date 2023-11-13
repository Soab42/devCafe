import { useState } from "react";

export default function LoginModal({ show }) {
  return (
    show && (
      <div className="absolute h-[10rem] md:w-[20rem] w-[14rem] right-0 top-8 flex-center bg-slate-50/10 backdrop-blur-sm z-50 font-sans text-xs flex-col">
        <div className="title">Login With</div>
        <div className="flex flex-col gap-2 mt-4">
          <div>Sign In With Google</div>
          <div>Sign In With Github</div>
        </div>
      </div>
    )
  );
}
