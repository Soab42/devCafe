import { MdCoffeeMaker } from "react-icons/md";
import { AiOutlineCoffee } from "react-icons/ai";
import { PiCoffeeFill } from "react-icons/pi";
export default function Navbar() {
  return (
    <div className="flex justify-center items-center font-bold text-2xl h-10 title font-['Kenia'] text-sky-600">
      DevCaf
      <span className="text-[#7c3c20e1] ">
        <PiCoffeeFill />
      </span>
    </div>
  );
}
