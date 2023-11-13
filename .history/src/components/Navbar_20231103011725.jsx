import { MdCoffeeMaker } from "react-icons/md";
import { AiOutlineCoffee } from "react-icons/ai";
import { SiCoffeescript } from "react-icons/si";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center font-bold text-xl h-10 title font-['Kenia'] text-sky-600 w-[80%] lg:w-[50%] bg-teal-700/20 px-4 ">
      <div className="flex justify-center items-center shadow-filter">
        DevC
        <span className="text-[#936648] text-[1rem] ">
          <SiCoffeescript />
        </span>
        fe
      </div>
      <div className="text-sm font-sans">Soab</div>
    </div>
  );
}
