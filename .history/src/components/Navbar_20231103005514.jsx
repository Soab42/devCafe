import { MdCoffeeMaker } from "react-icons/md";
import { AiOutlineCoffee } from "react-icons/ai";
export default function Navbar() {
  return (
    <div className="flex justify-center items-center font-bold text-2xl h-10 title font-['Kenia'] text-sky-600">
      DevCaf
      <span className="text-[#d89a7d] rotate-45">
        <AiOutlineCoffee />
      </span>
    </div>
  );
}
