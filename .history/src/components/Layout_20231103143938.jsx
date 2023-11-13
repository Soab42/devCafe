import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className="flex-center">
        <aside className="sm:hidden">left list</aside>
        {children}
        <aside className="hidden">right list</aside>
      </main>
    </div>
  );
}
