import { MdCoffeeMaker } from "react-icons/md";
import { AiOutlineCoffee } from "react-icons/ai";
import { SiCoffeescript } from "react-icons/si";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center font-bold text-2xl h-10 title font-['Kenia'] text-sky-600 w-[80%] lg:w-[50%] bg-teal-700">
      <div className="flex justify-center">
        DevC
        <span className="text-[#936648] text-[1.2rem] ">
          <SiCoffeescript />
        </span>
        fe
      </div>
    </div>
  );
}
