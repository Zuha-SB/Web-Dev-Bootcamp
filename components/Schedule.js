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
              <p>Online, live sessions + on-demand access</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">💡 Topics Covered</h3>
              <ul className="list-disc list-inside">
                <li>HTML, CSS, JavaScript</li>
                <li>Responsive Design</li>
                <li>Git & GitHub</li>
                <li>React & APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  