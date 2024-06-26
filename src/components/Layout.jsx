import Navbar from "./Navbar";

import Loading from "./Loading";
import Confirm from "./Confirm";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="mb-1 z-[1000]">
        <Navbar />
      </nav>
      <main className="flex justify-start items-center flex-col w-full h-[95vh]  overflow-scroll ">
        <Loading />
        <Confirm />
        <div className="md:w-[60%] w-[90%]  text-xs flex justify-start px-2 bg">
          <div className="flex justify-between w-full">
            <section className="p-2 w-full  border-slate-500 ">
              {children}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
