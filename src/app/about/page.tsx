import Navbar from "../components/navbar";


export default function About() {
  return (
    <main>
      <Navbar />
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-4">About Agri University</h1>
        <p>
          Agri University is dedicated to excellence in agricultural education,
          research, and innovation. We aim to empower future leaders in farming,
          agribusiness, and sustainable agriculture.
        </p>
      </section>
    </main>
  );
}
