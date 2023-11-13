import { PiPowerThin } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { DiTerminalBadge } from "react-icons/di";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./LoginModal";
import { useEffect, useState } from "react";
import { userSignOut } from "../feature/user/authSlice";
import { signOut } from "firebase/auth";
import { Auth } from "../firebase";
import useLocalStorage from "../common/hooks/useLocalStorage";
import { terminalMessage } from "./terminalData";
import { closeModal, openModal } from "../feature/loginmodal/modalSlice";
export default function Navbar() {
  const user = useSelector((state) => state.users);
  const mood = useSelector((state) => state.mood);
  const [value, setValue] = useLocalStorage("Auth", undefined);
  const [showIndex, setShowIndex] = useState(0);
  console.log("navbar", mood);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(closeModal());
  };
  const handleSignOut = () => {
    dispatch(userSignOut());
    setValue(undefined);
    signOut(Auth);
  };
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
    <div className="flex-center font-bold text-xl h-10 title font-['Kenia'] text-sky-600 w-full bg-slate-700/10 shadow-sm shadow-sky-600/30">
      <div className="flex justify-between items-center md:w-[60%] w-[90%]">
        <div className="flex-center shadow-filter">
          DevC
          <span className="text-[#936648] text-[1rem] ">
            <SiCoffeescript />
          </span>
          fe
        </div>
        {user?.user ? (
          <div className="text-sm font-thin great-vibes flex gap-1">
            {user?.user?.name}
            <button
              className="text-xs flex-center hover:text-red-500 duration-300 "
              onClick={handleSignOut}
            >
              <PiPowerThin />
            </button>
          </div>
        ) : (
          <div className="relative">
            <button onClick={handleLogin} className=" bg-black w-32 h-6 flex">
              <span className="scale-110 animate-pulse hover:animate-none duration-300 text-sky-500 flex-center ">
                <DiTerminalBadge />
              </span>
              <span className="text-[8px] font-mono">
                {!mood ? (
                  "$ yarn dev"
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
            <LoginModal />
          </div>
        )}
      </div>
    </div>
  );
}
