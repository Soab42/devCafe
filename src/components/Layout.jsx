import Navbar from "./Navbar";
import LeftBar from "./LeftBar";
export default function Layout({ children }) {
  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <main className="flex-center flex-col w-full ">
        <div className="md:w-[60%] w-[90%] bg-slate-300/10 text-slate-300 text-xs flex justify-start px-2">
          <aside className="hidden md:flex border-r-[1px] border-slate-500 w-[15%] px-4">
            <LeftBar />
          </aside>
          <div className="flex justify-between w-full  h-[95vh] overflow-y-scroll">
            <section className="p-2 w-full h-screen  md:border-r-[1px] border-slate-500">
              {children}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
