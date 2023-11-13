import { MdCoffeeMaker } from "react-icons/md";
import { AiOutlineCoffee } from "react-icons/ai";
import { SiCoffeescript } from "react-icons/si";
export default function Navbar() {
  return (
    <div className="flex justify-center items-center font-bold text-2xl h-10 title font-['Kenia'] text-sky-600">
      DevC
      <span className="text-[#d0a487] text-[1.2rem] ">
        <SiCoffeescript />
      </span>
      fe
    </div>
  );
}
