import { SiCoffeescript } from "react-icons/si";
import { useSelector } from "react-redux";

export default function Loading() {
  const loading = useSelector((s) => s.loading);
  return (
    <div
      className={`fixed z-50 text-yellow-700 left-0 lg:text-[5rem]  w-screen h-screen bg-black/30 flex-center top-10 bottom-0 backdrop-blur-[1px] text-[3rem] ${
        !loading && "hidden"
      }`}
    >
      <div className="animate-spin">
        <SiCoffeescript />
      </div>
    </div>
  );
}
