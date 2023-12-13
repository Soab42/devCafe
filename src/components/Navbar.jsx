import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { PiPowerThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "../common/hooks/useLocalStorage";
import { closeModal, openModal } from "../feature/loginmodal/modalSlice";
import {
  aboutRouteOn,
  addQuestionRouteOn,
  addRoute,
  allQuestionsRouteOn,
  profileRouteOn,
  singleQuestionsRouteOn,
} from "../feature/route/routeSlice";
import { userSignOut } from "../feature/user/authSlice";
import { Auth } from "../firebase";
import Icon from "./utils/Icon";
import LoginModal from "./LoginModal";
import TerminalButton from "./form/TerminalButton";
import { addSingleData } from "../feature/data/singleDataSlice";
export default function Navbar() {
  const user = useSelector((state) => state?.users);
  const mood = useSelector((state) => state?.mood?.mood);
  const route = useSelector((state) => state?.route);
  const [value, setValue] = useLocalStorage("Auth", undefined);
  const [singleDataValue, setSingleDataValue] = useLocalStorage(
    "singleData",
    undefined
  );
  const [routeValue, setRouteValue] = useLocalStorage("route", undefined);
  // console.log("navbar", mood);
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
  // useEffect(() => setRouteValue(route), []);
  useEffect(() => {
    if (routeValue) dispatch(addRoute(routeValue));
    if (singleDataValue) dispatch(addSingleData(singleDataValue));
  }, []);
  const handleRouteChange = (routing) => {
    if (routing === "all") {
      setRouteValue(routing);
      dispatch(allQuestionsRouteOn());
    } else if (routing === "single") {
      dispatch(singleQuestionsRouteOn());
      setRouteValue(routing);
    } else if (routing === "profile") {
      setRouteValue(routing);
      dispatch(profileRouteOn());
    } else if (routing === "add") {
      setRouteValue(routing);
      dispatch(addQuestionRouteOn());
    } else if (routing === "about") {
      setRouteValue(routing);
      dispatch(aboutRouteOn());
    } else {
      setRouteValue("all");
      dispatch(allQuestionsRouteOn());
    }
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
            onClick={() => handleRouteChange("all")}
          >
            Home
          </button>
          {user.user && (
            <button
              className={`${route === "profile" && "text-[#936648]"} navLink`}
              onClick={() => handleRouteChange("profile")}
            >
              Profile
            </button>
          )}
          {user.user && (
            <button
              className={`${route === "add" && "text-[#936648]"} navLink`}
              onClick={() => handleRouteChange("add")}
            >
              Ask Question
            </button>
          )}
          <button
            className={`${route === "about" && "text-[#936648]"} navLink`}
            onClick={() => handleRouteChange("about")}
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
