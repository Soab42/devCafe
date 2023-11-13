import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <aside>left list</aside>
        {children}
        <aside>right list</aside>
      </main>
    </div>
  );
}
