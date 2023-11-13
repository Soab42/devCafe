import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className="flex-center">
        <aside className="hidden md:flex">left list</aside>
        {children}
        <aside className="hidden md:visible">right list</aside>
      </main>
    </div>
  );
}
