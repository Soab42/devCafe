import { useState } from "react";

export default function LoginModal() {
  const [show, setShow] = useState(false);
  return (
    show && (
      <div className="absolute h-[10rem] md:w-[20rem] w-[14rem] right-0 top-8 flex-center bg-slate-50/10 backdrop-blur-sm z-50 font-sans">
        Login With
      </div>
    )
  );
}
