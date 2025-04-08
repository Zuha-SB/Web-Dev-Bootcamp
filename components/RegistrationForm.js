export default function RegistrationForm() {
  return (
    <section id="registration" className="py-16 px-4 sm:px-6 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Register for the Bootcamp</h2>

      <div className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4">
        <div className="relative" style={{ paddingBottom: '150%', height: 0 }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdFU7076ck9f5Db15JVIxsF0OpG7sDfY1icniu0L7KTdM_ePQ/viewform?embedded=true"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            title="Registration Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
