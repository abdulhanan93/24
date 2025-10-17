import Navbar from "./components/navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/uni.jpg")' }}
      >
        <div className="text-white text-center bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-4xl font-bold mb-4">Welcome to Agri University</h1>
          <p className="mb-6">Leading agricultural education and research</p>
          <div className="space-x-4">
            <a href="/about" className="bg-green-600 px-4 py-2 rounded">About</a>
            <a href="/contact" className="bg-green-600 px-4 py-2 rounded">Contact</a>
            <a href="/address" className="bg-green-600 px-4 py-2 rounded">Address</a>
            <a href="/facilities" className="bg-green-600 px-4 py-2 rounded">Facilities</a>
            <a href="/terms" className="bg-green-600 px-4 py-2 rounded">Terms</a>
          </div>
        </div>
      </section>

      <section className="p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Teacher</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {["Dr. Ali"].map((name,v) => (
 <div  className="bg-white p-4 rounded shadow text-center">
        
              <img src={`/dr ali.jpg`} alt={name} className="w-32 h-32 round-full mx-auto mb-5" />
              <h3 className="text-xl font-bold">{name}</h3>
              <p>Expert in agricultural sciences with 10+ years experience.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
