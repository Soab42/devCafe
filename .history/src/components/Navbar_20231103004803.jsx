import { MdCoffeeMaker } from "react-icons/md";
export default function Navbar() {
  return (
    <div className="flex justify-center items-center font-bold text-2xl h-10 title font-['Agbalumo'] text-sky-600 bg-slate-900/40">
      DevCaf
      <span>
        <MdCoffeeMaker />
      </span>
    </div>
  );
}
