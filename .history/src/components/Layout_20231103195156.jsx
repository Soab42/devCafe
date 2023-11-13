import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <main className="flex-center w-full ">
        <div className="md:w-[60%] w-[90%] bg-slate-300/20 flex justify-start px-2">
          <aside className="hidden md:flex border-r-[1px] w-[15%] pr-4">
            left list
          </aside>
          <content className="flex justify-between w-full  h-[90vh] overflow-y-scroll">
            <section className="p-2 w-full h-screen">{children}</section>
            <section className="hidden md:flex  w-[25%]">right list</section>
          </content>
        </div>
      </main>
    </div>
  );
}
