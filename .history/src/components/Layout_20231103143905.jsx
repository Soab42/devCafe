import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className="flex-center">
        <aside className="hidden">left list</aside>
        {children}
        <aside className="sm:hidden">right list</aside>
      </main>
    </div>
  );
}
