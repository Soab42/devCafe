import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className="flex-center  md:w-[60%] w-[90%]">
        <aside className="hidden md:flex">left list</aside>
        <content className="w-[90%]">{children}</content>
        <aside className="hidden md:flex">right list</aside>
      </main>
    </div>
  );
}
