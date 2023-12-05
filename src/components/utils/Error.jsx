import React from "react";
import { IoInformationCircle } from "react-icons/io5";

export default function Error({ error }) {
  return (
    <div className="flex-center gap-1 text-rose-400 font-semibold err-animation">
      <span className="text-lg">{error && <IoInformationCircle />}</span>
      {error}
    </div>
  );
}
