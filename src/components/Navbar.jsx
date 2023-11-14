import { signOut } from "firebase/auth";
import { PiPowerThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "../common/hooks/useLocalStorage";
import { closeModal, openModal } from "../feature/loginmodal/modalSlice";
import { userSignOut } from "../feature/user/authSlice";
import { Auth } from "../firebase";
import LoginModal from "./LoginModal";
import TerminalButton from "./components/TerminalButton";
import {
  allQuestionsRouteOn,
  profileRouteOn,
  aboutRouteOn,
  addQuestionRouteOn,
} from "../feature/route/routeSlice";
import Icon from "./Icon";
import { AiOutlineSearch } from "react-icons/ai";
export default function Navbar() {
  const user = useSelector((state) => state?.users);
  const mood = useSelector((state) => state?.mood?.mood);
  const route = useSelector((state) => state?.route);
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
    dispatch(allQuestionsRouteOn());
    signOut(Auth);
  };

  return (
    <div className="flex-center font-bold text-xl h-10 title  text-sky-600 w-full bg-slate-700/10 shadow-sm shadow-sky-600/30">
      <div className="flex justify-between items-center md:w-[60%] w-[90%]">
        {/* icon  */}
        <Icon />
        {/* navigation buttons */}
        <div className="flex-center gap-2  font-thin text-sm">
          <button
            className={`${route === "all" && "text-[#936648]"} navLink`}
            onClick={() => dispatch(allQuestionsRouteOn())}
          >
            Home
          </button>
          {user.user && (
            <button
              className={`${route === "profile" && "text-[#936648]"} navLink`}
              onClick={() => dispatch(profileRouteOn())}
            >
              Profile
            </button>
          )}
          {user.user && (
            <button
              className={`${route === "add" && "text-[#936648]"} navLink`}
              onClick={() => dispatch(addQuestionRouteOn())}
            >
              Ask Question
            </button>
          )}
          <button
            className={`${route === "about" && "text-[#936648]"} navLink`}
            onClick={() => dispatch(aboutRouteOn())}
          >
            About
          </button>
        </div>
        {/* search */}

        {/* user authentication section */}
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
