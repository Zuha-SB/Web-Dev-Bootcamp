export default function RegistrationForm() {
    return (
      <section id="registration" className="py-16 px-6 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Register for the Bootcamp</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4">
          <input className="w-full border border-gray-300 px-3 py-2 rounded" type="text" placeholder="Full Name" required />
          <input className="w-full border border-gray-300 px-3 py-2 rounded" type="email" placeholder="Email Address" required />
          <textarea className="w-full border border-gray-300 px-3 py-2 rounded" placeholder="Tell us why you're interested" rows="4" />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit">
            Submit Registration
          </button>
        </form>
      </section>
    )
  }
  