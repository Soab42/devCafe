import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <main className="flex-center w-full h-95vh overflow-hidden">
        <div className="md:w-[60%] w-[90%] bg-slate-300/20 flex justify-between px-2 h-screen">
          <aside className="hidden md:flex border-r-[1px] pr-4">
            left list
          </aside>
          <content>{children}</content>
          <aside className="hidden md:flex border-l-[1px] pl-4">
            right list
          </aside>
        </div>
      </main>
    </div>
  );
}
