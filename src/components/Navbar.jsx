import { signOut } from "firebase/auth";
import { PiPowerThin } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "../common/hooks/useLocalStorage";
import { closeModal, openModal } from "../feature/loginmodal/modalSlice";
import { userSignOut } from "../feature/user/authSlice";
import { Auth } from "../firebase";
import LoginModal from "./LoginModal";
import TerminalButton from "./components/TerminalButton";
export default function Navbar() {
  const user = useSelector((state) => state?.users);
  const mood = useSelector((state) => state?.mood?.mood);
  const [value, setValue] = useLocalStorage("Auth", undefined);
  console.log("navbar", mood);
  const dispatch = useDispatch();

  const handleLogin = () => {
    mood ? dispatch(closeModal()) : dispatch(openModal());
  };
  const handleSignOut = () => {
    dispatch(userSignOut());
    setValue(undefined);
    dispatch(closeModal());
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
            <TerminalButton handleLogin={handleLogin} mood={mood} />
            <LoginModal />
          </div>
        )}
      </div>
    </div>
  );
}
