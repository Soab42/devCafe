import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { PiAirTrafficControl, PiPowerThin, PiTrademark } from "react-icons/pi";
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

import BurgerMenu from "./utils/BurgerMenu";
export default function Navbar() {
  const [show, setShow] = useState(false);
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
    if (singleDataValue) dispatch(addSingleData(singleDataValue));
    if (routeValue) dispatch(addRoute(routeValue));
  }, []);
  console.log(singleDataValue);
  console.log(routeValue);
  const handleRouteChange = (routing) => {
    setShow(false);
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
  console.log("rendering Navbar");
  return (
    <div className="flex-center font-bold text-xl h-10 title  text-sky-600 w-full bg-slate-700/10 shadow-sm shadow-sky-600/30">
      <div className="flex justify-between items-center md:w-[60%] w-[90%]">
        {/* Burger menu */}
        <div className="w-fit xl:hidden" onClick={() => setShow(!show)}>
          <BurgerMenu show={show} />
        </div>

        <div
          className={`gap-1 ${
            show ? "w-1/2" : "w-0 -translate-x-10"
          } font-thin text-sm flex flex-col absolute left-0 top-5 z-50 items-start mt-5 xl:hidden bg-black/20 backdrop-blur-md h-screen duration-700 p-4 overflow-hidden`}
        >
          <div
            className={`${
              route === "all" && "text-[#936648] bg-inherit"
            } navLinkSm`}
            onClick={() => handleRouteChange("all")}
          >
            Home
          </div>
          {user.user && (
            <button
              className={`${
                route === "profile" && "text-[#936648] bg-inherit"
              } navLinkSm`}
              onClick={() => handleRouteChange("profile")}
            >
              Profile
            </button>
          )}
          {user.user && (
            <button
              className={`${
                route === "add" && "text-[#936648] bg-inherit"
              } navLinkSm`}
              onClick={() => handleRouteChange("add")}
            >
              Ask Question
            </button>
          )}
          <button
            className={`${
              route === "about" && "text-[#936648] bg-inherit"
            } navLinkSm`}
            onClick={() => handleRouteChange("about")}
          >
            About
          </button>
        </div>

        {/* icon  */}
        <Icon />
        {/* navigation buttons */}
        <div className="hidden gap-2  font-thin text-sm xl:flex">
          <button
            className={`${
              route === "all" && "text-[#936648] bg-inherit"
            } navLink`}
            onClick={() => handleRouteChange("all")}
          >
            Home
          </button>
          {user.user && (
            <button
              className={`${
                route === "profile" && "text-[#936648] bg-inherit"
              } navLink`}
              onClick={() => handleRouteChange("profile")}
            >
              Profile
            </button>
          )}
          {user.user && (
            <button
              className={`${
                route === "add" && "text-[#936648] bg-inherit"
              } navLink`}
              onClick={() => handleRouteChange("add")}
            >
              Ask Question
            </button>
          )}
          <button
            className={`${
              route === "about" && "text-[#936648] bg-inherit"
            } navLink`}
            onClick={() => handleRouteChange("about")}
          >
            About
          </button>
        </div>
        {/* search */}

        {/* user authentication section */}
        {user?.user ? (
          <div className="text-sm font-thin great-vibes flex gap-1 ">
            <div className="hidden xl:flex">{user?.user?.name}</div>
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
