export default function Schedule() {
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Program Schedule</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">🗓️ Dates</h3>
              <p>May 15 - July 30, 2025</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📍 Format</h3>
              <p>Live, in person sessions at Masjid Al Salam</p>
              <p>16700 Old Louetta Road, Spring, TX 77379</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">💡 Topics Covered</h3>
              <ul className="list-disc list-inside">
                <li>HTML, CSS, JavaScript</li>
                <li>Git & GitHub</li>
                <li>React & APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🕒 Class Schedule</h3>
              <ul className="list-disc list-inside">
                <li>Every Wednesday, 6:30 PM - 9 PM</li>
                <li>Every Saturday, 9 AM - 1:30 PM</li>
                <li>Additional help and study time offered on Mondays</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  