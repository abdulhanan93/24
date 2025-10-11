import Navbar from "../components/navbar";


export default function Terms() {
  return (
    <main>
      <Navbar />
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-4">Terms & Policies</h1>
        <ul className="list-disc pl-6 mb-6">
          <li>Respect faculty and fellow students at all times.</li>
          <li>Regular attendance is mandatory.</li>
          <li>Plagiarism in any form is not allowed.</li>
          <li>Follow safety protocols during field work.</li>
        </ul>
        <div className="bg-green-100 p-4 rounded text-center">
          <h2 className="text-xl font-bold text-green-700 mb-2">Admissions Now Open!</h2>
          <a href="/contact" className="inline-block bg-green-700 text-white px-4 py-2 rounded">Apply Now</a>
        </div>
      </section>
    </main>
  );
}
