import { MdCoffeeMaker } from "react-icons/md";
export default function Navbar() {
  return (
    <div className="flex justify-center items-baseline font-bold text-2xl h-10 title font-['Agbalumo'] text-sky-600">
      DevCaf
      <span className="text-[#A52A2A]">
        <MdCoffeeMaker />
      </span>
    </div>
  );
}
