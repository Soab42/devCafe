import { PiPowerThin } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { GrPowerForceShutdown } from "react-icons/gr";
import { useSelector } from "react-redux";
export default function Navbar() {
  const user = useSelector((state) => state.users);
  const handleLogin = () => {};
  const handleSignOut = () => {};
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
            {user?.user?.username}
            <button
              className="text-xs flex-center hover:text-red-500 duration-300 "
              onClick={handleLogin}
            >
              <PiPowerThin />
            </button>
          </div>
        ) : (
          <button onClick={handleSignOut} className="text-sm text-sky-500">
            <GrPowerForceShutdown />
          </button>
        )}
      </div>
    </div>
  );
}
