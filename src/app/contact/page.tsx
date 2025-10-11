import Navbar from "../components/navbar";


export default function Contact() {
  return (
    <main>
      <Navbar />
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>Email: info@agriuniversity.edu</p>
        <p>Phone: +92 300 1234567</p>
      </section>
    </main>
  );
}
