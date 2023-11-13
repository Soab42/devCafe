import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className="flex-center  bg-slate-300/20">
        <aside className="hidden md:flex">left list</aside>
        <content>{children}</content>
        <aside className="hidden md:flex">right list</aside>
      </main>
    </div>
  );
}
