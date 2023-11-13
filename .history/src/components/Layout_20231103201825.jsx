import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <main className="flex-center flex-col w-full ">
        <div className="md:w-[60%] w-[90%] bg-slate-300/20 flex justify-start px-2">
          <aside className="hidden md:flex border-r-[1px] border-slate-300 w-[15%] px-4">
            left list
          </aside>
          <content className="flex justify-between w-[60vw]  h-[95vh] overflow-y-scroll">
            <section className="p-2 w-full h-screen bg-red-200/20 border-r-[1px]">
              {children}
            </section>
            <section className="hidden md:flex px-2  w-[25%] flex-grow">
              right list
            </section>
          </content>
        </div>
      </main>
    </div>
  );
}
