import Content from "./components/Content";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
export default function DevCafeMain() {
  return (
    <main className="w-full flex justify-center">
      <Navbar />
      <Layout>
        <Content />
      </Layout>
    </main>
  );
}
