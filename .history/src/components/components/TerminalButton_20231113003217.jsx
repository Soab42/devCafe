import React from "react";
import { DiTerminalBadge } from "react-icons/di";
import { SiCoffeescript } from "react-icons/si";

export default function TerminalButton({ handleLogin, message }) {
  return (
    <button onClick={handleLogin} className=" bg-black w-32 h-6 flex">
      <span className="scale-110 animate-pulse hover:animate-none duration-300 text-sky-500 flex-center ">
        <DiTerminalBadge />
      </span>
      <span className="text-[8px] font-mono">
        {!mood ? (
          "yarn dev"
        ) : (
          <div className="flex-center text-[8px] gap-0.5">
            <span className="animate-spin">
              <SiCoffeescript />
            </span>
            {terminalMessage[showIndex]}
          </div>
        )}
      </span>
    </button>
  );
}
