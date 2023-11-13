import React from "react";
import { DiTerminalBadge } from "react-icons/di";
import { SiCoffeescript } from "react-icons/si";

export default function TerminalButton() {
  return (
    <button onClick={handleLogin} className=" bg-black w-32 h-6 flex">
      <span className="scale-110 animate-pulse hover:animate-none duration-300 text-sky-500 flex-center ">
        <DiTerminalBadge />
      </span>
      <span className="text-[8px] font-mono">yarn dev</span>
    </button>
  );
}
