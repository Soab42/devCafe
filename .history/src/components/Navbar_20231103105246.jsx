import { PiPowerThin } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
export default function Navbar() {
  return (
    <div className="flex justify-center items-center font-bold text-xl h-10 title font-['Kenia'] text-sky-600 w-full bg-teal-700/20">
      <div className="flex justify-between items-center md:w-[60%] w-[90%]">
        <div className="flex justify-center items-center shadow-filter">
          DevC
          <span className="text-[#936648] text-[1rem] ">
            <SiCoffeescript />
          </span>
          fe
        </div>
        <div className="text-sm font-thin great-vibes flex gap-1">
          Soab
          <button className="text-xs flex justify-center items-center hover:text-red-500 duration-300 ">
            <PiPowerThin />
          </button>
        </div>
      </div>
    </div>
  );
}
