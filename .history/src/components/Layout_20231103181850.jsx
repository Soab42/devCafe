import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex-center flex-col">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-center bg-slate-300/20">
        <div>
          <aside className="hidden md:flex">left list</aside>
          <content>{children}</content>
          <aside className="hidden md:flex">right list</aside>
        </div>
      </main>
    </div>
  );
}
