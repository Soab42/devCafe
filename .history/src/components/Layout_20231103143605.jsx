import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>{children}</div>
    </div>
  );
}
