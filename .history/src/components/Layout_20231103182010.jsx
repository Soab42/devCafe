import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className="flex-center w-full ">
        <div className="w-[60%] bg-slate-300/20 flex justify-between">
          <aside className="hidden md:flex">left list</aside>
          <content>{children}</content>
          <aside className="hidden md:flex">right list</aside>
        </div>
      </main>
    </div>
  );
}
