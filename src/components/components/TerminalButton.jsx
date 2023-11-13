import React, { useEffect, useState } from "react";
import { DiTerminalBadge } from "react-icons/di";
import { SiCoffeescript } from "react-icons/si";
import { terminalMessage } from "../terminalData";

export default function TerminalButton({ handleLogin, mood }) {
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    let timeId;

    if (mood) {
      // Clear the previous interval (if any)
      clearInterval(timeId);

      // Set up a new interval
      timeId = setInterval(() => {
        setShowIndex((prevIndex) => (prevIndex + 1) % terminalMessage.length);
      }, 5000);
    }

    // Cleanup function
    return () => clearInterval(timeId);
  }, [showIndex, mood]);
  return (
    <button onClick={handleLogin} className=" bg-black w-32 h-6 flex">
      <span className="scale-110  hover:animate-none duration-300 text-sky-500 flex-center ">
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
