import { MdCoffeeMaker } from "react-icons/md";
import { AiOutlineCoffee } from "react-icons/ai";
import { MdOutlineCoffeeMaker } from "react-icons/md";
export default function Navbar() {
  return (
    <div className="flex justify-center items-center font-bold text-2xl h-10 title font-['Kenia'] text-sky-600">
      DevCaf
      <span className="text-[#39a996] ">
        <MdOutlineCoffeeMaker />
      </span>
    </div>
  );
}
