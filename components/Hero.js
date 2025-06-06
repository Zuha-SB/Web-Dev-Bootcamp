export default function Hero() {
    return (
      <section 
        className="bg-cover bg-center text-white py-20 px-6 text-center"
        style={{ backgroundImage: "url('./magicstudio-art.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Summer Web Dev Bootcamp 2025</h1>
        <p className="text-lg md:text-xl mb-6">Master HTML, CSS, JavaScript & React in 10 weeks</p>
        <a href="#registration" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
          Reserve Your Spot
        </a>
      </section>
    )
  }
  