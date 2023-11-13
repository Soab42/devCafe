import { PiPowerThin } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { DiTerminalBadge } from "react-icons/di";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./LoginModal";
import { useState } from "react";
import { userSignOut } from "../feature/user/authSlice";
import { signOut } from "firebase/auth";
import { Auth } from "../firebase";
import useLocalStorage from "../common/hooks/useLocalStorage";
export default function Navbar() {
  const user = useSelector((state) => state.users);
  const [show, setShow] = useState(false);
  const [value, setValue] = useLocalStorage("Auth", undefined);
  const dispatch = useDispatch();
  const handleLogin = () => {
    setShow(!show);
  };
  const handleSignOut = () => {
    dispatch(userSignOut());
    setValue(undefined);
    signOut(Auth);
  };
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
            <button
              onClick={handleLogin}
              className="text-2xl animate-pulse hover:animate-none duration-300 text-sky-500 flex-center "
            >
              Yarn Add
              <DiTerminalBadge />
            </button>
            <LoginModal show={show} />
          </div>
        )}
      </div>
    </div>
  );
}
