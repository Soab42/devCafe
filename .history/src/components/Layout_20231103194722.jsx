import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <main className="flex-center w-full ">
        <div className="md:w-[60%] w-[90%] bg-slate-300/20 flex justify-start px-2 h-screen">
          <aside className="hidden md:flex border-r-[1px] pr-4">
            left list
          </aside>
          <content className="flex justify-between w-full">
            <section className="p-2">{children}</section>
            <section className="hidden md:flex border-l-[1px] pl-4">
              right list
            </section>
          </content>
        </div>
      </main>
    </div>
  );
}
