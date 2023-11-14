import Navbar from "./Navbar";
import LeftBar from "./LeftBar";
export default function Layout({ children }) {
  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <main className="flex-center flex-col w-full ">
        <div className="md:w-[60%] w-[90%]  text-xs flex justify-start px-2 bg">
          <div className="flex justify-between w-full">
            <section className="p-2 w-full h-screen  border-slate-500">
              {children}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
