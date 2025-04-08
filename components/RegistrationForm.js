export default function RegistrationForm() {
  return (
    <section id="registration" className="py-16 px-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Register for the Bootcamp</h2>
      
      {/* Embed Google Form */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdFU7076ck9f5Db15JVIxsF0OpG7sDfY1icniu0L7KTdM_ePQ/viewform?embedded=true" width="640" height="1052" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </section>
  );
}
