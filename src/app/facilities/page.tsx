import Navbar from "../components/navbar";


export default function Facilities() {
  return (
    <main>
      <Navbar />
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-6">Our Facilities</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1].map(i => (
            <img key={i} src={`/classes.jpg`} alt={`Class ${i}`} className="rounded shadow" />
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-4">Subjects Offered</h2>
        <ul className="list-disc pl-6">
          <li><strong>Crop Science:</strong> Learn modern methods of crop production.</li>
          <li><strong>Soil Science:</strong> Understand soil properties and management.</li>
          <li><strong>Agri Business:</strong> Learn farm management and agri-economics.</li>
        </ul>
      </section>
    </main>
  );
}
